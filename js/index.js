$(document).ready(function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    $('.window').width(windowWidth);
    $('.window').height(windowHeight);

    $('.window').windows({
        snapping: true,
        snapSpeed: 300,
        snapInterval: 200
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

$(document).scroll(function() {
  if ($(document).scrollTop() >= 80) {
      $(".ca-menu").removeClass("normal");
      $(".ca-menu").addClass("full");
  } else {
      $(".ca-menu").removeClass("full");
      $(".ca-menu").addClass("normal");
  }
});