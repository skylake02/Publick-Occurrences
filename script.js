/*jslint browser: true*/
/*global  $*/

$(function () {
    'use strict';
    
    var content     = $('main .wrapper'),
        a1          = $('#a1'),
        a2          = $('#a2'),
        a3          = $('#a3');
    
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