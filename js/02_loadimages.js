/**
 * long description for the file
 *
 * @summary This  file is responsible for importing and allocating images as variables
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 04:32:30 
 * Last modified  : 2018-05-08 01:15:27
 */

/* 1. HOME SECTION */
import tie from '../image/tie.jpg';
/* 2. INTRO SECTION */
import redCar from '../image/redCar.png'
/* 3. ABOUT SECTION */
import abtImg1 from '../image/sw5.jpg';
import abtImg2 from '../image/sw4.jpg';
import abtImg3 from '../image/avengers1.jpg';
import abtImg4 from '../image/dc2.jpg';

/* ALLOCATE IMAGES */
$('#tie').attr('src', tie)
$('#redCar').attr('src', redCar)
$('#abtImg1').attr('src', abtImg1);
$('#abtImg2').attr('src', abtImg2);
$('#abtImg3').attr('src', abtImg3);
$('#abtImg4').attr('src', abtImg4);

/* SOME IMAGE ADJUSTMENTS */
$('.slick-image').height(window.innerHeight);

/* PERFECT IMAGE SCALING */
function imageFix() {

    let or = window.orientation // detect orientation
    let vph = window.innerHeight // get screen hieght
    let vpw = window.innerWidth // get screen hieght
    let sh = screen.height // get screen hieght
    let sw = screen.width // get screen hieght
    let winRatio = vpw / vph

    console.log(or);
    console.log('Heights: ', vph, sh)
    console.log('Widths: ', vpw, sw);
    console.log('HW Ration - INNER: ', vpw / vph, 'SCREEN: ', sw / sh)
    console.log(winRatio);

    $('img').each((i, img) => {
        console.log(img)
        var imgH = $(img).css('height');
        var imgW = $(img).css('width');
        var imgRatio = Number(imgW.replace('px', '')) / Number(imgH.replace('px', ''));

        console.log('IMG H: ', imgH);
        console.log('IMG W: ', imgW);
        console.log('H W Ration: ', imgRatio);
        /*
        if (winRatio > 1) {
            $(img).css('height', vph);
            $(img).css('width', 'auto');
        }
        */

        //console.log(img.height);
        //console.log(img.height);
    });

}

$(window).on('orientationchange', (ev) => {
    console.log(ev);
    console.log('orientation has changed')
})

$(window).resize((ev) => {
    console.log(ev);
    console.log('Resize MF')
})
$(document).ready(() => {
    imageFix();
})
