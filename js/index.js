$(document).ready(function() {
    $.fn.fullpage({
        anchors: ['home', 'what-we-do', 'who-we-are', 'portfolio', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: false,
        'afterLoad': function(anchorLink, index) {
            if(index == 1) {
                $('#logo').addClass('active');
            } else if (index == 2) {
                $('#iphone-image, #ipad-image').addClass('active');
            } else if(index == 3 ) {
                $('#saron, #robin').addClass('active');
            }
//            $('#infoMenu').toggleClass('whiteLinks', index == 4);

        }
//        navigationTooltips: ['Wat doen wij', 'Wie zijn wij', 'Portfolio', 'Contact']
    });
    
    if(window.location.hash) {
        $(window.location.hash + '-listitem').addClass('active');
    }
    
    $(window).on('hashchange', function() {        
        $('li.active').removeClass('active');
        $(window.location.hash + '-listitem').addClass('active');
    });
    
    $('#imac-image').click(function() {
        $.fn.fullpage.moveTo('what-we-do', 1);
    });
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