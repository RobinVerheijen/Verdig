$(document).ready(function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    $('.window').width(windowWidth);
    $('.window').height(windowHeight);

    $("#menu").sticky({topSpacing:0});

    $('.window').windows({
        snapping: true,
        snapSpeed: 300,
        snapInterval: 200,
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

    $('#menu').sticky();
});