/**
 * long description for the file
 *
 * @summary This  file is responsible for importing and allocating images as variables
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 04:32:30 
 * Last modified  : 2018-05-08 18:49:09
 */

/* 1. HOME SECTION */
import tie from '../image/tie.jpg';
/* 2. NAVBAR  --NO IMAGES*/
/* 3. INTRO SECTION */
import redCar from '../image/redCar.png'
/* 4. ABOUT SECTION */
import abtImg1 from '../image/sp1.jpg';
import abtImg2 from '../image/sp5.jpg';
import abtImg3 from '../image/sp3.jpg';
import abtImg4 from '../image/sp4.jpg';
/* 5. PORTFOLIO */
import prtBgImg from '../image/city2.jpg';
import prtImg1 from '../image/tqoffroad.png'

/* ALLOCATE IMAGES */
$('#tie').attr('src', tie)
$('#redCar').attr('src', redCar)
$('#abtImg1').attr('src', abtImg1);
$('#abtImg2').attr('src', abtImg2);
$('#abtImg3').attr('src', abtImg3);
$('#abtImg4').attr('src', abtImg4);
$('#prtBgImg').attr('src', prtBgImg);
$('#prtImg1').attr('src', prtImg1)

/* SOME IMAGE ADJUSTMENTS */
//$('.slick-image').height(window.innerHeight);

/* PERFECT IMAGE SCALING */
function imageFix() {

    let or = window.orientation // detect orientation
    let vph = window.innerHeight // get screen hieght
    let vpw = window.innerWidth // get screen hieght
    let winRatio = vpw / vph

    //console.log(or);
    //console.log('Height: ', vph)
    //console.log('Width: ', vpw);
    //console.log('HW Ration - INNER: ', vpw / vph, 'SCREEN: ', sw / sh)
    //console.log(winRatio);

    $('img').each((i, img) => {
        //console.log(img)
        var imgH = Number($(img).css('height').replace('px', ''));
        var imgW = Number($(img).css('width').replace('px', ''));
        var imgRatio = imgW / imgH

        //console.log('IMG H: ', imgH);
        //console.log('IMG W: ', imgW);
        //console.log('H W Ration: ', imgRatio);

        if (winRatio >= 1 && imgW < vpw) {
            $(img).css('height', 'auto');
            $(img).css('width', vpw);
            //console.log(img);
        } else {
            $(img).css('height', vph);
            $(img).css('width', 'auto');
            //console.log(img);
        }


        //console.log(img.height);
        //console.log(img.height);
    });

}

$(window).resize((ev) => {
    console.log(ev);
    console.log('Resize MF');
    $('img').css('height', window.innerHeight);
    imageFix();
})
$(document).ready(() => {
    $('img').css('height', window.innerHeight);
    imageFix();
})
