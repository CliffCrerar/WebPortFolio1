/**
 * long description for the file
 *
 * @summary The code in this file controls the page's navigation
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 06:13:30 
 * Last modified  : 2018-05-01 00:02:33
 */

$('.burgerIcon').on('click', (ev) => {
    console.log($(ev.currentTarget).hasClass('collapsed'));
    var collapsed = $(ev.currentTarget).hasClass('collapsed');
    if (collapsed) {
        console.log('open')
        $('.mobileNav').animate({ 'background-color': 'black' }, 500);
    } else {
        console.log('close')
        $('.mobileNav').animate({ backgroundColor: 'none' }, 500);
    }
})

$('.nav-link.desktop').on('click', (ev) => {
    console.log($(ev.currentTarget).attr('href'))
    $.smoothScroll({
        scrollTarget: $(ev.currentTarget).attr('href')
    })
})
