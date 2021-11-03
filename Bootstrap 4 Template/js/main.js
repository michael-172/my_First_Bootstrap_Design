$(function () {
    'use strict';

    var winH = $(window).height(),
        uppH = $('.upperbar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (uppH + navH));
});