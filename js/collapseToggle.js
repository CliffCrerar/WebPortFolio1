$(document).ready(function() {
    $('div.card.tel').click(function(event) {
        console.log($(this))

        $('#collapseOne').toggle('collapse');

        var isCollapsed = $('div.left-angle>button').hasClass('fa-angle-left');
        console.log(isCollapsed)

        if (isCollapsed) {
            console.log(isCollapsed)
            $('div.left-angle>button').removeClass('fa-angle-left');
            $('div.left-angle>button').addClass('fa-angle-down');
        } else {
            console.log(isCollapsed)
            $('div.left-angle>button').removeClass('fa-angle-left');
            $('div.left-angle>button').addClass('fa-angle-left');
        }
    });
});