$(document).ready(function() {
    $.fn.fullpage({
        slidesColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
        anchors: ['what-we-do', 'who-we-are', 'portfolio', 'contact'],
        navigation: true,
        navigationPosition: 'right',
//        navigationTooltips: ['Wat doen wij', 'Wie zijn wij', 'Portfolio', 'Contact']
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