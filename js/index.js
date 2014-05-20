$(document).ready(function() {
    $.fn.fullpage({
        anchors: ['home', 'what-we-do', 'who-we-are', 'portfolio', 'contact'],
        navigationPosition: 'right',
        slidesNavigation: false,
        'afterLoad': function(anchorLink, index) {
            if (index === 2) {
                $('#iphone-image, #ipad-image').addClass('active');
            } else if (index === 3) {
                $('#saron, #robin').addClass('active');
            }
        }
    });

    $('#logo').addClass('bounceIn animated');

    if (window.location.hash) {
        $(window.location.hash + '-listitem').addClass('active');
    } else {
        $("#home-listitem").addClass("active");
    }
});

$(window).on('hashchange', function() {
    $('li.active').removeClass('active');
    $(window.location.hash + '-listitem').addClass('active');
});

$('#imac-image').click(function() {
    $.fn.fullpage.moveTo('what-we-do', 1);
});

$('.vertical-menu-listitem').click(function() {
    window.location.hash = $(this).attr('id').split('-listitem')[0];
});