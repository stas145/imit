/**
 * Admin service
 */

var q = require('q');
var crypto = require('crypto');
var db = require('./utils/db');
var begin = require('./utils/transactions');
var mailer = require('./utils/mailer');
var settings = require('../configuration/settings');
var emailSubjects = require('../messages/email/subjects');
var Request = require('../models/request');

var SQL_SAVE_ADMIN_REQUEST = "INSERT INTO request (email, password, first_name, last_name, secret_code) " +
  "VALUES (?, ?, ?, ?, ?)";
var SQL_APPLY_REQUEST = "UPDATE request SET accepted = TRUE WHERE secret_code = ? AND accepted IS NULL";
var SQL_DECLINE_REQUEST = "UPDATE request SET accepted = FALSE WHERE secret_code = ? AND accepted IS NULL";
var SQL_CREATE_ADMIN = "INSERT INTO admin (email, password, first_name, last_name, secret_code) " +
  "SELECT email, password, first_name, last_name, secret_code FROM request WHERE secret_code = ? AND accepted = TRUE";
var SQL_SELECT_REQUEST = "SELECT * FROM request WHERE secret_code = ?";
var SQL_LOGIN_CHECK = "SELECT * FROM admin where email = ? AND password = ?";

var rowConvert = function(row) {
  if (row == null) {
    return null;
  }
  var keys = Object.keys(row);
  if (keys.length > 0) {
    var result = {};
    for (var i=0; i<keys.length; i++) {
      var currentKey = keys[i];
      var objProperty = currentKey.replace(/_[0-9a-zA-Z]/g, function(x) {return x[1].toUpperCase();});
      result[objProperty] = row[currentKey];
    }
    return result;
  }
  return null;
};

var findRequest = function(code) {
  var deferred = q.defer();
  db.query(SQL_SELECT_REQUEST, [code], function(err, res) {
    if (err) {
      console.log("Saving request error:" + err);
      deferred.reject(err);
    } else {
      var adminRequest = new Request();
      adminRequest.load(rowConvert(res.rows[0]));
      adminRequest.password = "";
      deferred.resolve(adminRequest);
    }
  });
  return deferred.promise;
};

module.exports = {

  saveRequest: function(request) {
    var deferred = q.defer();
    request.secretCode = crypto.randomBytes(20).toString('hex');
    var data = [request.email, request.password, request.firstName, request.lastName, request.secretCode];
    db.query(SQL_SAVE_ADMIN_REQUEST, data, function(err, res) {
      if (err) {
        console.log("Saving request error:" + err);
        deferred.reject(err);
      } else {
        var params = {
          email: request.email,
          firstName: request.firstName,
          lastName: request.lastName,
          applyLink: settings.SITE_ADDRESS + "/admin/register-apply?code=" + request.secretCode,
          declineLink: settings.SITE_ADDRESS + "/admin/register-decline?code=" + request.secretCode
        };
        var htmlEmail = mailer.buildEmail('review-request', params);
        htmlEmail.then(function(data) {
          mailer.send(settings.EMAIL_GMAIL_LOGIN, emailSubjects.request.review, "", data);
        }, function(err) {
          console.log("Building html email failed:" + err);
        });
        deferred.resolve(res);
      }
    });
    return deferred.promise;
  },

  applyRequest: function(code) {
    var deferred = q.defer();
    var tx = begin(db);
    var data = [];
    tx.on('error', function(err) {
      console.log("Apply request unhandled query error");
      tx.rollback();
      deferred.reject(err);
    });
    db.query(SQL_APPLY_REQUEST, [code], function(err, res) {
      if (err) {
        console.log("Applying request error:" + err);
        deferred.reject(err);
      } else {
        data.push(res);
        db.query(SQL_CREATE_ADMIN, [code], function(err, res) {
          if (err) {
            console.log("Creating admin error:" + err);
            deferred.reject(err);
          } else {
            data.push(res);
            tx.commit(function(err){
              if (err) {
                console.log("Error occurs during creating admin:" + err);
                deferred.reject(err);
              } else {
                var promise = findRequest(code);
                promise.then(function(data) {
                  var params = data;
                  params.adminLink = settings.SITE_ADDRESS + "/admin/";
                  var htmlEmail = mailer.buildEmail('request-applied', params);
                  htmlEmail.then(function(html) {
                    mailer.send(params.email, emailSubjects.request.applied, "", html);
                  }, function(err) {
                    console.log("Cannot build apply email notification:" + err);
                  });
                }, function(err) {
                  console.log("Cannot retrieve request data from db");
                });
                deferred.resolve(data);
              }
            });
          }
        });
      }
    });
    return deferred.promise;
  },

  declineRequest: function(code) {
    var deferred = q.defer();
    db.query(SQL_DECLINE_REQUEST, [code], function(err, res) {
      if (err) {
        console.log("Declining request error:" + err);
        deferred.reject(err);
      } else {
        var promise = findRequest(code);
        promise.then(function(data) {
          var params = data;
          var htmlEmail = mailer.buildEmail('request-declined', params);
          htmlEmail.then(function(html) {
            mailer.send(params.email, emailSubjects.request.declined, "", html);
          }, function(err) {
            console.log("Cannot build decline email notification:" + err);
          });
        }, function(err) {
          console.log("Cannot retrieve request data from db");
        });
        deferred.resolve(res);
      }
    });
    return deferred.promise;
  },

  loginCheck : function(email, password) {
    var deferred = q.defer();
    db.query(SQL_LOGIN_CHECK, [email, password], function(err, res) {
      if (err) {
        console.log("Login check request error:" + err);
        deferred.reject(err);
      } else {
        var found = null;
        if (res.rows[0] != null) {
          var adminRequest = new Request();
          found = adminRequest.load(rowConvert(res.rows[0]));
          found.password = null;
        }
        deferred.resolve(found);
      }
    });
    return deferred.promise;
  }
};