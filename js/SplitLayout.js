/**
 * cbpSplitLayout.js v1.0.0
 * Edited to work with jQuery by @SaronGrave
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
$(document).ready(function() {
    $('.back-left').click(function(ev) {close(ev);});
    $('.back-right').click(function(ev) {close(ev);});

    $('.side-left').click(function(ev) {
        if ($('.splitlayout').hasClass('open-left')) {
            close(ev);
        } else {
            reset();
            $('.splitlayout').addClass('open-left');
        }
    });

    $('.side-right').click(function(ev) {
        if ($('.splitlayout').hasClass('open-right')) {
            close(ev);
        } else {
            reset();
            $('.splitlayout').addClass('open-right');
        }
    });
});

function reset() {
    $('.splitlayout').removeClass('close-right');
    $('.splitlayout').removeClass('close-left');
}

function close(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var dir = $('.splitlayout').hasClass('open-right') ? 'right' : 'left';
    $('.splitlayout').removeClass('open-' + dir);
    $('.splitlayout').addClass('close-' + dir);
}