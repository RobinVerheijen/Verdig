var windowWidth;
var windowHeight;

$(document).ready(function() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    $('.window').width(windowWidth);
    $('.window').height(windowHeight);

    $('.window').windows({
        snapping: true,
        snapSpeed: 200,
        snapInterval: 400
//        onScroll: function(scrollPos) {
//            // scrollPos:Number
//        },
//        onSnapComplete: function($el) {
//            // after window ($el) snaps into place
//        },
//        onWindowEnter: function($el) {
//            // when new window ($el) enters viewport
//        }
    });
});

$( window ).resize(function() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    $('.window').width(windowWidth);
    $('.window').height(windowHeight);
});

// menubar animation
$(document).scroll(function() {
  if ($(document).scrollTop() >= 80) {
      $(".ca-menu").addClass("full");
      $("#menu-container").css("position", "fixed");
  } else {
      $("#menu-container").css("position", "absolute");
      $(".ca-menu").removeClass("full");
  }
});