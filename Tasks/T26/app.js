// outputting html

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    // build a response when seomeone requests our server
    // return the response
    res.writeHead(200, {'Content-type':'text/html'}); // response code and content type
    
    var html = fs.readFileSync(__dirname+'/index.html', 'utf8');
    var message = "Final task for this video!";

    html = html.replace('{Message}', message);

    res.end(html);

}).listen(1337,'127.0.0.1');

