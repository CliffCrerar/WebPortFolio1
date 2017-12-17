$(document).ready(function() {
    //control the navbar click
    $('nav.navbar').on('click', function(Event) {
        $('a.nav-link.active').removeClass('active');
        if (Event.target.className == 'nav-link') {
            $(this.target).addClass('active');
        }
    });

    //Change the navbar according to section in view
    $('.parallax__group').mouseenter(function(Event) {
        var currGroup = Event.currentTarget.id;

        /*
        setTimeout(function() {
            document.getElementById(currGroup).scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            });
        }, 1000);
        */

        $('a.nav-link.active').removeClass('active');
        var srcGroup = Event.currentTarget.id;
        $('.nav-link').each(function(i) {
            //var navGroup = $('a.nav-link').get(i).attributes[1].value.replace('#', '');
            var navGroup = $('a.nav-link').get(i).id.replace('a', '');
            if (srcGroup == navGroup) {
                $('a.nav-link').get(i).classList.add('active');
                switch (srcGroup) {
                    case 'group1':
                        $('a.navbar-brand').html('Welcome');
                        $('a.navbar-brand').css({ 'font-family': 'Pacifico' });
                        break;
                    case 'group2':
                        $('a.navbar-brand').html('Title');
                        $('a.navbar-brand').css({ 'font-family': 'Josefin Sans' });
                        $('[data-toggle="popover"]').popover('hide');
                        break;
                    case 'group3':
                        $('a.navbar-brand').html('About');
                        $('a.navbar-brand').css({ 'font-family': 'Gloria Hallelujah' });
                        break;
                    case 'group4':
                        $('a.navbar-brand').html('Portfolio');
                        $('[data-toggle="popover"]').popover('hide');
                        $('a.navbar-brand').css({ 'font-family': 'Dancing Script' });
                        break;
                    case 'group5':
                        $('a.navbar-brand').html('Socila');
                        break;
                    case 'group6':
                        $('a.navbar-brand').html('Email');
                        break;
                    case 'group7':
                        $('a.navbar-brand').html('Thanks!');
                        break;
                }
            }
        });
    });
});