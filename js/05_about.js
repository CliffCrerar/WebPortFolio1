/**
 * long description for the file
 *
 * @summary This is the javascript that handles the interaction in the about section
 * @author Cliff Crerar
 *
 * Created at     : 2018-05-07 22:45:53 
 * Last modified  : 2018-05-08 05:19:18
 */

/* TURN ON CAROUSEL */
$('.slick-carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 6000,
    arrows: false,
    dots: false,
    cssEase: 'cubic-bezier(0.77, 0.14, 0.20, 0.91)'
});

/* ADJUSTING ABOUT SECTION FOR MOBILE RESPONSIVENESS */
function mobileAdjust() {
    // TUNING THE JUMBOTRON FOR BETTER MOBILE DISPLAY
    if (window.isMobile) {
        $('.jumboHeading').removeClass('display-3');
        if (window.orientation == 0) {
            $('.jumboHeading').html('iCode iBuild iSolve')
        }
        //$('.btnBox1').find('button').addClass('btn-block');
    }
    // LOADING ABOUT COLLAPSED SECTIONS ACCORDING TO DEVICE AND ORIENTATION
    /* 4.1 About Collapse */ const aboutCollapse = require('../html/04_1_AboutCollapsed.html');
    if (window.isMobile && orientation == 0) {
        console.log('load collapsers for mobile');
        var achtmlm = $(aboutCollapse).get(1); // assign selected elements to "about collapsed html mobile" variable
        console.log($(achtmlm).children());
        console.log($(achtmlm).children()[0])
        console.log($(achtmlm).children()[1])
        console.log($(achtmlm).children()[2])
        console.log($(achtmlm).children()[3])
        $('#abtGroup1').append($(achtmlm).find('#abtCollapser1'));
        $('#abtGroup2').append($(achtmlm).find('#abtCollapser2'));
        $('#abtGroup3').append($(achtmlm).find('#abtCollapser3'));
        $('#abtGroup4').append($(achtmlm).find('#abtCollapser4'));
    } else {
        //$('.collapserD').append('<div class="row collapserDeskContainer"></div>');
        $('.collapserDeskContainer').append(aboutCollapse);
    }
}
mobileAdjust() // Run mobile adjust function once of on script load

$(window).resize(() => {
    mobileAdjust()  // run when resize occurs
})

/* COLLAPSE ALL SECTIONS */
