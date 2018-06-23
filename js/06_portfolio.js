/**
 * JS for portfolio section
 *
 * @summary This javascript controls the interactions for the portfolio section
 * @author Cliff Crerar
 *
 * Created at     : 2018-06-22 21:31:46 
 * Last modified  : 2018-06-22 23:03:20
 */

const portfolioData = [
    {
        cardNo: 0,
        pageName: 'freeCodeCamp tribute page',
        image: require('../image/tribute_page_2.jpg'),
        link: 'https://codepen.io/Cliffenator/full/qmLRPr/'
    },
    {
        cardNo: 1,
        pageName: 'freeCodeCamp quote machine',
        image: require('../image/quote_machine_1.jpg'),
        link: 'https://codepen.io/Cliffenator/full/wedePx/'
    },
    {
        cardNo: 2,
        pageName: 'freeCodeCamp wikipedia viewer',
        image: require('../image/wiki_viewer.jpg'),
        link: 'https://codepen.io/Cliffenator/full/GMNOXG/'
    },
    {
        cardNo: 3,
        pageName: 'Future real estate',
        image: require('../image/Future_1.jpg'),
        link: '#'
    },
    {
        cardNo: 4,
        pageName: 'Future real estate',
        image: require('../image/Future_1.jpg'),
        link: '#'
    },
    {
        cardNo: 5,
        pageName: 'Future real estate',
        image: require('../image/Future_1.jpg'),
        link: '#'
    },
    {
        cardNo: 6,
        pageName: 'Future real estate',
        image: require('../image/Future_1.jpg'),
        link: '#'
    },
    {
        cardNo: 7,
        pageName: 'Future real estate',
        image: require('../image/Future_1.jpg'),
        link: '#'
    }
]

$(portfolioData).each((i, card) => {
    //console.log(i, card);
    let thisCard =
        `<div id="card-${card.cardNo}" class="card text-white bg-dark mb-3 prt-card">` +
        `   <img class="card-img-top prt-img-top" src="${card.image}" alt="Card image cap">` +
        `   <div class="card-body prt-card-body">` +
        `       <p class="prt-card-text">${card.pageName}</p>` +
        `   <a href="${card.link}" class="btn btn-outline-success prt-card-btn" target="_blank">CLICK HERE TO VIEW</a> ` +
        '   </div>' +
        '</div>'
    $('#prtCards').append(thisCard);
});