/* This file contains all the scipts that are started when page loads */

$(document).ready(function() {

    //Correction of image viewhight
    var carImgHeight = window.visualViewport.height;
    var carImgWidth = window.visualViewport.width;
    var imgElement = $('img');
    $.each(imgElement, function(i) {
        imgElement[i].height = carImgHeight;
        imgElement[i].width = carImgWidth;
    });



});