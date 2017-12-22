$(document).ready(function() {
    //Collapse controller
    $('.callme').on('change', function() {
        $('#collapseOne').toggle('collapse');
    });
    //Hover over
    /*
    $('#headingOne').hover(function() {
        $('div.left-angle>button').addClass('gly-spin45');
        console.log('hovering');
    });
    $('#headingOne').on('mouseleave', function() {
        $('div.left-angle>button').removeClass('gly-spin45');
        console.log('MouseLeaving');
    });
    */
});