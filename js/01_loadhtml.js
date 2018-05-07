/**
 * long description for the file
 *
 * @summary Main html loading file
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 03:24:15 
 * Last modified  : 2018-05-08 00:11:23
 */

/*
** IMPORTING HTML CHUNKS FOR ASSIGMENET 
*/

/* 0. Google analytics script */ //Analytics script
/* 1. Navigation Desktop      */ import navigationD from '../html/01_navbar_D.html';
/* 1. Navigation Mobile       */ import navigationM from '../html/01_navbar_M.html';
/* 2. Landing                 */ import landing from '../html/02_landing.html';
/* 3. Introduction            */ import intro from '../html/03_intro.html';
/* 1. About                   */ import about from '../html/04_about.html';
/* 1. Portfolio               */ //import portfolio 
/* 1. Social                  */ //import social 
/* 1. Contact                 */ //import contact 
/* 1. Credits                 */ //import credits 


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

/* 0 */
/* 1 */ $('body').html(navigation);
/* 2 */ $('.parallax').append(landing);
/* 3 */ $('.parallax').append(intro);
/* 4 */ $('.parallax').append(about);

/* SMOOTH SCROLLING */




