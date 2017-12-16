$(document).ready(function() {

    $('div.card.tel').click(function() {
        console.log($(this));

        $('#collapseOne').toggle('collapse');

        var isCollapsed = $('div.left-angle>button').hasClass('fa-angle-left');
        console.log(isCollapsed);

        if (isCollapsed) {
            console.log(isCollapsed);
            //$('div.left-angle>button').removeClass('fa-angle-left');
            //$('div.left-angle>button').addClass('fa-angle-down');
            $('div.left-angle>button').css("transform", "rotateOutDownRight");
        } else {
            console.log(isCollapsed);
            //$('div.left-angle>button').removeClass('fa-angle-down');
            //$('div.left-angle>button').addClass('fa-angle-left');
        }
    });
});