/*jslint browser: true*/
/*global  $*/

$(function () {
    'use strict';
    
    var body        = $('body'),
        load        = $('#load'),
        hidden      = $('#hidden'),
        content     = $('main .content'),
        a1          = $('#a1'),
        a2          = $('#a2'),
        a3          = $('#a3');
    
    window.setInterval(function () {
        load.addClass('fadeOut');
        window.setInterval(function () {
            load.remove();
            body.removeClass('stop-scrolling');
            hidden.removeClass('hidden');
        }, 500);
    }, 3000);
    
    content.load('latest.html');
    
    a1.on('click', function () {
        content.load('latest.html');
    });
    a2.on('click', function () {
        content.load('archive.html');
    });
    a3.on('click', function () {
        content.load('about.html');
    });
    
});