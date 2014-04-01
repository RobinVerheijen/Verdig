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
    var splitlayout = $('#splitlayout'),
            leftSide = $('.side-left'),
            rightSide = $('.side-right'),
            pageLeft = $('.page-left'),
            pageRight = $('.page-right'),
            transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

    if (mobilecheck()) {
        $('.splitlayout').addClass('mobile-layout');
    }
    $('.splitlayout').addClass('reset-layout');

    $('.side-left').on('click', function() {
        reset();
        $('.splitlayout').addClass('open-left');
    });

    $('.side-right').on(click, function() {
        reset();
        $('.splitlayout').addClass('open-right');
    });

    // back to intro after transition ends:
    var onEndTransFn = function() {
        this.removeEventListener(transEndEventName, onEndTransFn);
        $('.splitlayout').addClass('reset-layout');
    },
            backToIntro = function(ev) {
                ev.preventDefault();
                ev.stopPropagation();
                var dir = $(ev.target).hasClass('back-right') ? 'left' : 'right', page = dir === 'right' ? pageRight : pageLeft;
                $('.splitlayout').removeClass('open-' + dir);
                $('.splitlayout').addClass('close-' + dir);
                $('.' + dir).on(transEndEventName, onEndTransFn);
            };

    $('.back-left').on(eventtype, backToIntro);
    $('.back-right').on(eventtype, backToIntro);
});

function reset() {
    $('.splitlayout').removeClass('close-right');
    $('.splitlayout').removeClass('close-left');
    $('.splitlayout').removeClass('close-layout');
}