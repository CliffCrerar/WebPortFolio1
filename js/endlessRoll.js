$(document).ready(function() {
    $('#carousel2').mouseenter(function() {
        $('div.c2.ss-item').css({ "animation-play-state": "Paused" });
    });

    $('#carousel2').mouseleave(function() {
        $('div.c2.ss-item').css({ "animation-play-state": "Running" });
    });

});
/*
animation: slideshow 10s linear infinite;
-webkit-animation: slideshow 10s linear infinite;
*/