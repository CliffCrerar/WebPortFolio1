$(document).ready(function() {
    //Fade in and out scroll instruction
    setTimeout(function() {
        $('.scrMsg').fadeIn('slow').delay(2000).fadeOut('slow');
    }, 4000);

    //Start flashin scroll down icon
    setTimeout(function() {
        $('#scrlprompt').addClass('flash');
    }, 5000);
});