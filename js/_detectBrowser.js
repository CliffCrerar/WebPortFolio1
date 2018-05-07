/**
 * long description for the file
 *
 * @summary This script detects the broweser which page is being viewed in
 * @author Cliff Crerar
 *
 * Created at     : 2018-05-08 00:00:27 
 * Last modified  : 2018-05-08 00:13:57
 */

const { detect } = require('detect-browser');
const browser = detect();

//console.log(detect)
//console.log(browser)

if (browser) {
    //console.log(browser.name);
    //console.log(browser.version);
    //console.log(browser.os);

    if (browser.name == 'ie') {
        console.log("This is internet explorer");
    }
}

