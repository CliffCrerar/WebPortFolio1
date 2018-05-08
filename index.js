/**
 * long description for the file
 *
 * @summary Site entry point
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 03:14:56 
 * Last modified  : 2018-05-08 07:19:38
 */

/****************************************/
/*      LIBRARIES AND FRAMEWORKS        */
/****************************************/

/* JQUERY */
import $ from 'script-loader!jquery'
/* POPPER.JS */
import './node_modules/popper.js/dist/esm/popper';
/* BOOTSTRAP */
import './node_modules/bootstrap/dist/css/bootstrap.css';
import 'script-loader!./node_modules/bootstrap/dist/js/bootstrap';
/* PARALAX EFFECT CSS */
import './css/_parallax.css';
/* JQUERY USER INTERFACE */
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
/* FONT AWESOME 5 */
import './fontawesome5/web-fonts-with-css/css/fontawesome-all.css';
/* SLICK CAROUSEL */
import './node_modules/slick-carousel/slick/slick.css';
import './node_modules/slick-carousel/slick/slick-theme.css'
import 'script-loader!slick-carousel';
/* SMOOTH SCROLLING */
// import 'script-loader!jquery-smooth-scroll';

/****************************************/
/*           CUSTOM CSS FILES           */
/****************************************/

/* -  FONTS       */ import './css/_font.css';
/* 0. GENERAL     */ import './css/00_general.css';
/* 1. NAVBAR      */ import './css/01_navbar.css';
/* 2. LANDING     */ import './css/02_landing.css';
/* 3. INTRO       */ import './css/03_intro.css';
/* 4. ABOUT       */ import './css/04_about.css';
/* 5. PORTFOLIO   */ import './css/05_portfolio.css';

/****************************************/
/*       CUSTOM JAVASCRIPT FILES        */
/****************************************/

/* DETECT BROWSERT  */ import './js/_detectBrowser'
/* CHECK FOR MOBILE */ import './js/_isMobile';
/* LOAD PAGE HTML   */ import './js/01_loadhtml';
/* LOAD PAGE IMAGES */ import './js/02_loadimages';
/* NAVBAR OPERATION */ import './js/03_navbar';
/* ABOUT JS         */ import './js/05_about';