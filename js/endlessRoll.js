$(document).ready(function() {
    var run1time = 0;
    setTimeout(function() {
        $('#carousel2').mouseenter(function() {
            $('div.c2.ss-item').css({ "animation-play-state": "Paused" });
        });

        $('#carousel2').mouseleave(function() {
            $('div.c2.ss-item').css({ "animation-play-state": "Running" });
        });
    }, 11000);

    $('#group4').mouseenter(function() {
        if (run1time == 0) {
            //$('div.card').fadeIn(5000)
            setTimeout(function() {
                var timeout = 0;
                $('div.card').each(function(i) {
                    timeout = timeout + 1000;
                    var cardDiv = $(this);
                    setTimeout(function() {
                        cardDiv.fadeIn(3000);
                        if (i == 4) {
                            $('div.c2.ss-item').css({ "animation-play-state": "Running" });
                        }
                    }, timeout);
                });
            }, 2000);
        }
        run1time = 1;
    });
});
/*
animation: slideshow 10s linear infinite;
-webkit-animation: slideshow 10s linear infinite;
*/