// building a web server

var http = require('http');

http.createServer(function(req, res){

    // build a response when seomeone requests our server
    // return the response
    res.writeHead(200, {'Content-type':'text/plain'}); // response code and content type
    res.end("Hey! You're finally awake.");

}).listen(1337,'127.0.0.1');

