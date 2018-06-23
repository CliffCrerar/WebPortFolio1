/**
 * JAVASCRIPT that controls events on the landing page
 * @summary LANDING PAGE JS
 * @author Cliff Crerar
 * Created at     : 2018-06-23 13:35:03 
 * Last modified  : 2018-06-23 13:45:06
 */

$(window).on('load', () => {
    console.log('window has loaded')
    let toggleShow = 2000;
    let toggleHide = toggleShow + 7000
    setTimeout(() => {
        $('#welcome').toggle('slide');
    }, toggleShow)

    setTimeout(() => {
        $('#welcome').toggle('slide');
    }, toggleHide)

})