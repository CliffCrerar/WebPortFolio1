$(document).ready(function() {
    //Fade in and out scroll instruction
    setTimeout(function() {
        $('div.row.alert').fadeIn('slow').delay(2000).fadeOut('slow');
    }, 2000);

    //Start flashin scroll down icon
    setTimeout(function() {
        $('#scrlprompt').addClass('flash');
    }, 3000);
});