$(document).ready(function() {
    $('div.card-bottom>input.btn').tooltip({ delay: { show: 1000, hide: 500 } });

    $('div.card-bottom>input').on('click', function(event) {});

    var CardData = {
        card1: {
            img: 'image/tributePage.png',
            link: 'https://codepen.io/Cliffenator/full/qmLRPr/',
            text: 'First Page Ever, Single Static page. Composed from HTML and and element level style. No libraries used and not mobile responsive',
        },
        card2: {
            img: 'image/qouteMachine.png',
            link: 'https://codepen.io/Cliffenator/full/wedePx/',
            text: 'Site that generates random quotes, mobile responsive, quotes object was scripted. Composed with HTML, CSS and "Vanila" javascript.',
        },
        card3: {
            img: 'image/wikiVeiwer.png',
            link: 'https://codepen.io/Cliffenator/full/GMNOXG/',
            text: 'Scripted using the WikiPedia API, Site can search WikiPedia as well as return results. Composed with HTML, CSS and jQuery',
        },
        card4: {
            img: 'image/tqoffroad.png',
            link: 'http://tqoffroadparts.com/#',
            text: 'My first "real" website to be used for business, customer is a retailer of after market offroad parts. Scripted with HTML, CSS and jQuery mixed with vanilla. Data is stored in JS objects.',
        },
        card5: {
            img: '/image/oldPort.png',
            link: 'https://codepen.io/Cliffenator/full/rwBOVM/',
            text: 'This is my old portfolio, my second freeCodeCamp project, HTML, CSS and jQuery',
        },
        card6: {
            img: 'image/future2.png',
            link: 'f',
            text: 'Future Real Estate',
        },
        card7: {
            img: 'image/future2.png',
            link: 'f',
            text: 'Future Real Estate',
        },
        card8: {
            img: 'image/future2.png',
            link: 'f',
            text: 'Future Real Estate',
        },
    };

    //console.log(CardData);
    $('div.pr1.col-md-3').each(function(i) {
        var numCh = [11, 10, 9, 8];

        var card;
        var num = i;
        if (numCh.indexOf(num) > -1) {
            num = num - 8;

            card = CardData['card' + (num + 1)];
        } else {
            card = CardData['card' + (i + 1)];
        }

        if (card.link !== 'F') {
            $('div#card' + (i + 1) + '>img.card-img-top').attr('src', card.img);
            $('div#card' + (i + 1) + '>div.card-body>p.card-text').html(card.text);
            $('div#card' + (i + 1) + '>div.card-bottom>a').attr('href', card.link);
            $('div#card' + (i + 1) + '>div.card-bottom>a').attr('target', '_blank');
        }
    });
});