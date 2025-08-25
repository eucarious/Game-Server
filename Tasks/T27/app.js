// streams and performance

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    // build a response when seomeone requests our server
    // return the response
    res.writeHead(200, {'Content-type':'text/html'}); // response code and content type
    
    fs.createReadStream(__dirname+'/index.html').pipe(res);
    

}).listen(1337,'127.0.0.1');

