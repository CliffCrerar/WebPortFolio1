$(document).ready(function() {
    //Collapse controller
    $('#headingOne').click(function() {
        $('#collapseOne').toggle('collapse');

        var isCollapsed = $('div.left-angle>button').hasClass('fa-angle-left');

        if (isCollapsed) {
            //console.log(isCollapsed);
            $('div.left-angle>button').removeClass('fa-angle-left');
            $('div.left-angle>button').addClass('fa-angle-down');
        } else {
            //console.log(isCollapsed);
            $('div.left-angle>button').removeClass('fa-angle-down');
            $('div.left-angle>button').addClass('fa-angle-left');
        }
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