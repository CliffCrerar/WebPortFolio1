/**
 * long description for the file
 *
 * @summary This is the javascript that handles the interaction in the about section
 * @author Cliff Crerar
 *
 * Created at     : 2018-05-07 22:45:53 
 * Last modified  : 2018-06-22 20:13:55
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

/* COLLAPSE ALL SECTIONS */


$('.abtButton').on('click', ev => {
    $('.abtCollapse').each((i, el) => {
        console.log(i, el)
        if ($(el).hasClass('show')) {
            $(el).removeClass('show');
        }
    })
});
