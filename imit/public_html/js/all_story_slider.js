

$(document).ready(function(){
    var currentElementTop = 200;
    var offset = 100;
    $("#story_1").css('cursor', 'pointer');
    $("#story_2").css('cursor', 'pointer');
    $("#story_3").css('cursor', 'pointer');
    $("#story_4").css('cursor', 'pointer');
    $("#story_5").css('cursor', 'pointer');
    $("#story_6").css('cursor', 'pointer');
    $("#story_7").css('cursor', 'pointer');
    $("#story_8").css('cursor', 'pointer');
    $("#story_9").css('cursor', 'pointer');
    $("#story_10").css('cursor', 'pointer');
    $("#story_11").css('cursor', 'pointer');
    $("#story_12").css('cursor', 'pointer');
    $(".story-close").click(function(e) {
        hideAllStories();
        $(".story-container").css('display', 'none');
        $('html, body').animate({scrollTop: currentElementTop - offset}, 400);
    })
    hideAllStories();
    $('#story_1').click(function (e) {
        if($("#all-story_1").css('display') =="none") {
            hideAllStories();
            $("#all-story_1").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_1").hide();
        }
    });
    $('#story_2').click(function (e) {
      if($("#all-story_2").css('display') == "none") {
            hideAllStories();
            $("#all-story_2").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_2").hide();
        }
    });
    $('#story_3').click(function (e) {
      if($("#all-story_3").css('display') =="none") {
            hideAllStories();
            $("#all-story_3").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_3").hide();
        }
    });
    $('#story_4').click(function (e) {
      if($("#all-story_4").css('display') =="none") {
            hideAllStories();
            $("#all-story_4").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_4").hide();
        }
    });
    $('#story_5').click(function (e) {
      if($("#all-story_5").css('display') =="none") {
            hideAllStories();
            $("#all-story_5").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_5").hide();
        }
    });
    $('#story_6').click(function (e) {
      if($("#all-story_6").css('display') =="none") {
            hideAllStories();
            $("#all-story_6").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_6").hide();
        }
    });
    $('#story_7').click(function (e) {
      if($("#all-story_7").css('display') =="none") {
            hideAllStories();
            $("#all-story_7").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_7").hide();
        }
    });
    $('#story_8').click(function (e) {
      if($("#all-story_8").css('display') =="none") {
            hideAllStories();
            $("#all-story_8").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_8").hide();
        }
    });
    $('#story_9').click(function (e) {
      if($("#all-story_9").css('display') =="none") {
            hideAllStories();
            $("#all-story_9").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_9").hide();
        }
    });
    $('#story_10').click(function (e) {
      if($("#all-story_10").css('display') =="none") {
            hideAllStories();
            $("#all-story_10").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_10").hide();
        }
    });
    $('#story_11').click(function (e) {
      if($("#all-story_11").css('display') =="none") {
            hideAllStories();
            $("#all-story_11").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_11").hide();
        }
    });
    $('#story_12').click(function (e) {
      if($("#all-story_12").css('display') =="none") {
            hideAllStories();
            $("#all-story_12").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_12").hide();
        }
    });
    $('#story_13').click(function (e) {
      if($("#all-story_13").css('display') =="none") {
            hideAllStories();
            $("#all-story_13").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_13").hide();
        }
    });
    $('#story_14').click(function (e) {
      if($("#all-story_14").css('display') =="none") {
            hideAllStories();
            $("#all-story_14").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_14").hide();
        }
    });
    $('#story_15').click(function (e) {
      if($("#all-story_15").css('display') =="none") {
            hideAllStories();
            $("#all-story_15").css('display', 'inline-block');
            $(".story-container").css('display', 'block');
            $('html, body').animate({scrollTop: 200}, 400);
            currentElementTop = $(this).offset().top;
        } else {
            $("#all-story_15").hide();
        }
    });
});

function hideAllStories() {
    $("#all-story_1").css('display', 'none');
    $("#all-story_2").css('display', 'none');
    $("#all-story_3").css('display', 'none');
    $("#all-story_4").css('display', 'none');
    $("#all-story_5").css('display', 'none');
    $("#all-story_6").css('display', 'none');
    $("#all-story_7").css('display', 'none');
    $("#all-story_8").css('display', 'none');
    $("#all-story_9").css('display', 'none');
    $("#all-story_10").css('display', 'none');
    $("#all-story_11").css('display', 'none');
    $("#all-story_12").css('display', 'none');
    $("#all-story_13").css('display', 'none');
    $("#all-story_14").css('display', 'none');
    $("#all-story_15").css('display', 'none');

    $("#triangle_1").css('display', 'none');
    $("#triangle_2").css('display', 'none');
    $("#triangle_3").css('display', 'none');
    $("#triangle_4").css('display', 'none');
    $("#triangle_5").css('display', 'none');
    $("#triangle_6").css('display', 'none');
    $("#triangle_7").css('display', 'none');
    $("#triangle_8").css('display', 'none');
    $("#triangle_9").css('display', 'none');
    $("#triangle_10").css('display', 'none');
    $("#triangle_11").css('display', 'none');
    $("#triangle_12").css('display', 'none');
    $("#triangle_13").css('display', 'none');
    $("#triangle_14").css('display', 'none');
    $("#triangle_15").css('display', 'none');

}



