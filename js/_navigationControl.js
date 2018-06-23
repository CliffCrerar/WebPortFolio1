/**
 * Controls the navigation bar adaptation as page is scrolled
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2018-06-23 13:53:54 
 * Last modified  : 2018-06-23 15:10:25
 */

/**
 * SETS THE CURRECT SECTION AS ACTIVE
 * @summary Sets the current section in the navbar as active
 * @author Cliff Crerar
 * Created at     : 2018-06-18 20:47:42 
 * Last modified  : 2018-06-18 21:26:06
 */

/*
$(document).ready(function () {
   // $sections incleudes all of the container divs that relate to menu items.
   let $sections = $('.vs-section');
   // The user scrolls
   $(window).scroll(function () {
       // currentScroll is the number of pixels the window has been scrolled
       let currentScroll = $(this).scrollTop();
       //console.log('currentScroll: ', currentScroll);
       // $currentSection is somewhere to place the section we must be looking at
       let $currentSection;
       // We check the position of each of the divs compared to the windows scroll positon
       $sections.each(function () {
           // divPosition is the position down the page in px of the current section we are testing      
           let divPosition = $(this).offset().top;
           //console.log('divPosition: ', divPosition);
           // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
           // the -1 is so that it includes the div 1px before the div leave the top of the window.
           if (divPosition - 1 < currentScroll) {
               // We have either read the section or are currently reading the section so we'll call it our current section
               $currentSection = $(this);
               // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
           }
           //console.log('Current section ID: ', $currentSection.attr('id'));
           let id = $currentSection.attr('id');
           $('.nav-link-a').removeClass('active');
           $('[href="#' + id + '"]').addClass('active');
       });
   });
});*/

$(document).ready(function () {
    //control the navbar click
    $('nav.navbar').on('click', function (Event) {
        $('a.nav-link.active').removeClass('active');
        if (Event.target.className == 'nav-link') {
            $(this.target).addClass('active');
        }
    });

    //Change the navbar according to section in view
    $('.parallax__group').mouseenter(function (Event) {
        var currGroup = Event.currentTarget.id;

        setTimeout(function () {
            document.getElementById(currGroup).scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            });
        }, 1000);

        $('a.nav-link.active').removeClass('active');
        var srcGroup = Event.currentTarget.id;
        $('.nav-link').each(function (i) {
            //var navGroup = $('a.nav-link').get(i).attributes[1].value.replace('#', '');
            var navGroup = $('a.nav-link').get(i).id.replace('a', '');
            if (srcGroup == navGroup) {
                $('a.nav-link').get(i).classList.add('active');
                switch (srcGroup) {
                    case 'group1':
                        $('a.navbar-brand').html('Welcome');
                        $('a.navbar-brand').css({ 'font-family': 'Poiret One' });
                        break;
                    case 'group2':
                        $('a.navbar-brand').html('Title');
                        $('a.navbar-brand').css({ 'font-family': 'Josefin Sans' });
                        $('[data-toggle="popover"]').popover('hide');
                        break;
                    case 'group3':
                        $('a.navbar-brand').html('About');
                        $('a.navbar-brand').css({ 'font-family': 'RUBIK MONO ONE' });
                        break;
                    case 'group4':
                        $('a.navbar-brand').html('Portfolio');
                        $('[data-toggle="popover"]').popover('hide');
                        $('a.navbar-brand').css({ 'font-family': 'Dancing Script' });
                        break;
                    case 'group5':
                        $('a.navbar-brand').html('Social');
                        $('a.navbar-brand').css({ 'font-family': 'Pacifico' });
                        break;
                    case 'group6':
                        $('a.navbar-brand').html('E-mail');
                        $('a.navbar-brand').css({ 'font-family': 'Krona One' });
                        break;
                    case 'group7':
                        $('a.navbar-brand').html('Thank you');
                        $('a.navbar-brand').css({ 'font-family': 'Berkshire Swash' });
                        break;
                }
            }
        });
    });
});