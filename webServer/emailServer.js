var http = require("http");

var ip = "172.20.10.3";
var port = 8005;

http
    .createServer(function(req, res) {
        console.log(req);
    })
    .listen(port, ip);
console.log("Mail server running on: " + ip + ":" + port);