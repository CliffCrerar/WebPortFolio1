/**
 * long description for the file
 *
 * @summary javascript for the portfolio section of the page
 * @author Cliff Crerar
 *
 * Created at     : 2018-05-08 17:55:53 
 * Last modified  : 2018-05-08 20:19:53
 */

// GET PORTFOLIO CARD DIMENSIONS
var cardHeight = $('.pfItem').height();
var cardWidth = $('.pfItem').width();
// DETERMIN PORTFOLIO CARD ADJUSTMENTS
var bodyHeight = cardHeight / 2 - 20;
var imgHeight = cardHeight / 2 - 20;
console.log(cardHeight, bodyHeight, imgHeight);
$('.pfImageContainer').css('height', imgHeight); // Adjust image cap container
$('.pfBody').css('height', bodyHeight); // Adjust card body
// ADJUST CARD LINK BUTTON TO FIT IN SPACE
$('.pfLinkBtn').css('width', cardWidth - 40) // 40 takes into considerations the card body all side padding of 20px

/* ACTIVATING SLICK CAROUSEL */
$('.projects-carousel').slick({
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    centerMode: true
});