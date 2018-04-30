/**
 * long description for the file
 *
 * @summary The code in this file controls the page's navigation
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 06:13:30 
 * Last modified  : 2018-04-30 10:31:48
 */

$('.burgerIcon').on('click', (ev) => {
    console.log($(ev.currentTarget).hasClass('collapsed'));
    var collapsed = $(ev.currentTarget).hasClass('collapsed');
    if (collapsed) {
        $('.mobileNav').animate({ backgroundColor: 'black' }, 500);
    } else {
        $('.mobileNav').animate({ backgroundColor: 'none' }, 500);
    }
})

