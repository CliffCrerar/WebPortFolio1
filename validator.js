var validator = require('html-validator');
var fs = require('fs');
var options = {
    format: 'text',
};

fs.readFile('index.html', 'utf8', function(err, html) {
    if (err) {
        throw err;
    }
    options.data = html;
    validator(options, function(error, data) {
        if (error) {
            console.error(error);
        }
        console.log(data);
    });
});