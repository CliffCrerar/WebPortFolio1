/* This file contains all the scipts that are started when page loads */

$(document).ready(function() {
    //Correction of image viewhight
    'use strict';
    var vph;
    var vpw;
    var agentCheck = window.navigator.userAgent; //Get window data to determine browser
    var agent;
    //Define viewport for browser compatibility

    //Determine browser by looking at the DOM
    if (agentCheck.indexOf('Chrome') > 0) {
        agent = 'Chrome';
        vph = window.visualViewport.height;
        vpw = window.visualViewport.width;
    } else if (agentCheck.indexOf('Firefox') > 0) {
        agent = 'Firefox';
        vph = window.innerHeight;
        vpw = window.innerWidth;
    } else if (agentCheck.indexOf('Safari') > 0) {
        agent = 'Safari';
        vph = window.innerHeight;
        vpw = window.innerWidth;
    }

    var imgElement = $('img.vp');
    $.each(imgElement, function(i) {
        var el = this;

        console.log('I', i, el, 'IMG H:', el.height, 'IMG W:', el.width, 'VPH:', vph, 'VPW:', vpw);

        $(this).css('height', vph);
        $(this).css('width', 'auto');

        console.log('H', i, el, 'IMG H:', el.height, 'IMG W:', el.width, 'VPH:', vph, 'VPW:', vpw);

        var elH = this.height;
        var elW = this.width;
        if (elW < vpw) {
            console.log('true');
            $(this).css('width', vpw);
            $(this).css('height', 'auto');
            console.log('W', i, el, 'IMG H:', el.height, 'IMG W:', el.width, 'VPH:', vph, 'VPW:', vpw);
        }
    });
});