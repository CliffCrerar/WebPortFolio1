$(document).ready(function() {
    /* POPOVERS */

    $('[data-toggle="popover"]').popover();

    var Po1Data = [{
            index: 0,
            title: 'Pretoria boy',
            content: '-Live in Pretoria most of my life \n' +
                '-Went to an afrikaans school in the north \n' +
                '-Had dreams wanted to be a rock stor\n',
        },
        {
            index: 1,
            title: 'May the force be with you',
            content: '-All things nerdy and geeky \n' +
                '-Technology is the future \n' +
                '-Crypto trading \n' +
                '-Web development(obviously) \n' +
                '-Golf is sometimes my game \n' +
                '-Kaizen',
        },
        {
            index: 2,
            title: 'My vocation',
            content: '-In one word, knowledge worker \n' +
                '-Worked as an asset accountent for many years(boring) \n' +
                '-Then got myself a job as a solutions architect \n' +
                '-Currently employed by AdaptIT \n' +
                '-I strive to design enjoyable experiences',
        },
        {
            index: 3,
            title: 'I love books',
            content: '-Early life drop out \n' +
                '-Currently a part time university student \n' +
                '-Studying 3rd year Bcom informatics at UNISA \n' +
                '-Also a student at freeCodeCamp \n' +
                '-In the process of completing a front end certificate \n' +
                '-Learning everyday, and will be for the days to come',
        },
    ];

    var btns = $('div.lead>div.row').children();
    $('div.lead>div.row').children().each(function(i) {
        console.log(Po1Data[i]);
        console.log(btns[i]);

        btns[i].title = Po1Data[i].title;
        btns[i].title = Po1Data[i].title;

        //btns[i].removeClass('data-content=""');

        //var newContent = Po1Data.content;

        //newContent = '' + newContent;

        console.log(i);
    });
});