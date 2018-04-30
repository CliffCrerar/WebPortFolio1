/**
 * long description for the file
 *
 * @summary Site entry point
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 03:14:56 
 * Last modified  : 2018-04-30 09:51:33
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
import 'bootstrap';
/* PARALAX EFFECT CSS */
import './css/_parallax.css';
/* JQUERY USER INTERFACE */
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
/* FONT AWESOME 5 */
import './fontawesome5/web-fonts-with-css/css/fontawesome-all.css';

/****************************************/
/*           CUSTOM CSS FILES           */
/****************************************/

/* -  FONTS   */ import './css/_font.css';
/* 0. GENERAL */ import './css/00_general.css';
/* 1. NAVBAR  */ import './css/01_navbar.css';
/* 2. LANDING */ import './css/02_landing.css';

/****************************************/
/*       CUSTOM JAVASCRIPT FILES        */
/****************************************/

/* CHECK FOR MOBILE */ import './js/_isMobile';
/* LOAD PAGE HTML   */ import './js/01_loadhtml';
/* LOAD PAGE IMAGES */ import './js/02_loadimges';
/* NAVBAR OPERATION */ import './js/03_navbar';