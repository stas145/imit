/**
 * View helpers
 */
module.exports = {
  // So errors will never be undefined
  errors: {},

  // Cut string to certain length if it's longer
  strip: function(str, len) {
    if (typeof(str) !== 'string') {
      return "";
    }
    var limit = len - 3;
    if (str.length > limit) {
      return str.substr(0, limit) + "...";
    } else {
      return str;
    }
  }
};