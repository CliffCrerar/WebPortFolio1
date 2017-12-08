$(document).ready(function() {
    //control the navbar click

    var os = new OnScreen({
        tolerance: 50,
        debounce: 100,
        container: window
    });


    $('nav.navbar').on('click', function(Event) {
        $('a.nav-link.active').removeClass('active');
        if (Event.target.className == 'nav-link') {
            Event.target.classList.add('active');
        }
    });

    os.on('leave', 'nav.navbar-navbrand', function myCallback(element, event) {
        console.log('left');
        console.log(event);
    });

    /*
    $('.parallax__group').mouseenter(function(Event) {
        console.log('enter new group')
            //console.log(Event);
            //console.log(Event.currentTarget);
        var scrGroup = Event.currentTarget.id;

        $('.nav-link').each(function(i) {

            var navGroup = $('a.nav-link').get(i).attributes[1].value.replace('#', '');
            //var selector = 'nav.navbar:eq(' + i + 1 + ')';
            //console.log($(selector));

            if (scrGroup == navGroup) {
                console.log('NAV = ' + navGroup + ' SCR: ' + scrGroup);
                //console.log($(selector));
            }
        });
    });*/



});