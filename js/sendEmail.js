var nodemailer = require("nodemailer");

exports.module = function sendMail(msgText, msgHtml) {
    var smtpConfig = {
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
            user: "information.cj@gmail.com",
            pass: "Pass-123"
        }
    };
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(smtpConfig);
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "information.cj@gmail.com", // sender address
        to: "cliff.crerar@gmail.com", // list of receivers
        subject: "Portfolio enquiry", // Subject line
        text: msgText, // plaintext body
        html: msgHtml // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: " + info.response);
    });
};