$(document).ready(function() {
    /* POPOVERS */

    //Carouseld endless_scroll_pluging

    //$('#pf').endlessScroll({ width: '100%', height: '100px', steps: -2, speed: 40, mousestop: true });

    //Custom popover data objects
    var PoData = [{
            index: 0,
            title: 'Pretoria boy',
            content: [
                'Lived in Pretoria most of my life',
                'Went to an afrikaans school in the north',
                'Played in a band',
                'Had dreams to to be a rock star',
            ],
        },
        {
            index: 1,
            title: 'May the force be with you',
            content: [
                'All things nerdy and geeky',
                'Technology is the future',
                'Crypto trading',
                'Web development (obviously)',
                'Golf is sometimes my game',
                'Kaizen',
            ],
        },
        {
            index: 2,
            title: 'My vocation',
            content: [
                'In one word; knowledge worker',
                'Worked as an asset accountent for many years (boring)',
                'I then got myself a job as a solutions architect',
                'Currently employed by AdaptIT',
                'I strive to design enjoyable experiences',
            ],
        },
        {
            index: 3,
            title: 'I love books',
            content: [
                'Early life drop out',
                'Currently a part time university student',
                'Studying 3rd year Bcom informatics at UNISA',
                'Also a student at freeCodeCamp',
                'In the process of completing a front end certificate',
                'Learning everyday, and will be for the days to come',
            ],
        },
    ];

    $('[data-toggle="popover"]').popover(); //Activate poppers

    //Clicking on the buttons will populate the poppers with the data in object PoData
    $('div.lead>div.row>.col-md-3>a').on('click', function(event) {
        //console.log(event.target);
        //console.log(event.target.attributes[10].nodeValue);
        //console.log($('#' + event.target.attributes[11].nodeValue));
        //console.log($('#' + event.target.attributes[10].nodeValue).children()[1].innerHTML);
        //console.log($('#' + event.target.attributes[10].nodeValue).children()[2].innerHTML);

        var i = event.target.id.split('btn')[1]; //Get object number from button ID

        //Assign popper title
        $('#' + event.target.attributes[10].nodeValue).children()[1].innerHTML = event.target.title = PoData[i].title;
        var end = PoData[i].content.length; //Get lenth of popper data object
        var cont = '<ul class="pbodyList">'; //start html element for popper boddy

        //for each item in array append a <li> to cont
        for (l = 0; l < end; l++) {
            cont = cont + '<li>' + PoData[i].content[l] + '</li>';
        }
        cont = cont + '</ul>';
        $('#' + event.target.attributes[10].nodeValue).children()[2].innerHTML = cont;
        event.target.title = 'Click the button again to dismiss';

        //console.log($('#' + event.target.id).hasClass('btn-primary'));

        if ($('#' + event.target.id).hasClass('btn-primary')) {
            $('#' + event.target.id).removeClass('btn-primary');
            $('#' + event.target.id).addClass('btn-success');
        } else if ($('#' + event.target.id).hasClass('btn-success')) {
            $('#' + event.target.id).removeClass('btn-success');
            $('#' + event.target.id).addClass('btn-primary');
        }
    });
});