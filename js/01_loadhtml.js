/**
 * long description for the file
 *
 * @summary Main html loading file
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 03:24:15 
 * Last modified  : 2018-05-08 04:18:48
 */

/*
** IMPORTING HTML CHUNKS FOR ASSIGMENET 
*/

/* 0.  Google analytics script */ //Analytics script
/* 1.  Navigation Desktop      */ import navigationD from '../html/01_navbar_D.html';
/* 1.  Navigation Mobile       */ import navigationM from '../html/01_navbar_M.html';
/* 2.  Landing                 */ import landing from '../html/02_landing.html';
/* 3.  Introduction            */ import intro from '../html/03_intro.html';
/* 4.  About                   */ import about from '../html/04_about.html';
/* 5.  Portfolio               */ import portfolio from '../html/05_portfolio.html'; //import portfolio 
/* 6.  Social                  */ import social from '../html/06_social.html' //import social 
/* 7.  Contact                 */ //import contact 
/* 8.  Credits                 */ //import credits 


/*
** LOADING HTML INTO PAGE IN ORDER 
*/

/* DESCRIMIATE MOBILE AND DESKTOP */
var navigation;
if (window.isMobile) {
    navigation = navigationM;
} else {
    navigation = navigationD;
}

/* SELECTIVE LOADING OF ABOUT COLLAPSED SECTIONS */

/* 0 */
/* 1 */ $('body').html(navigation);
/* 2 */ $('.parallax').append(landing);
/* 3 */ $('.parallax').append(intro);
/* 4 */ $('.parallax').append(about);
/* 5 */ $('.parallax').append(portfolio);
/* 6 */ $('.parallax').append(social);


/* SMOOTH SCROLLING */

/* SOME HTML ADJUSTMENT */
//$('.parallax__group').css('height', window.innerHeight);


