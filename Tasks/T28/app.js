// outputting json
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    // We create some JSON and give that to the response
    res.writeHead(200, {'Content-type':'text/json'}); // response code and content type
    
    // can be content from database or content from other server / API
    var person = {

        firstname : 'Matti',
        lastname : 'Meikäläinen'

    }
    
    res.end(JSON.stringify(person));
    

}).listen(1337,'127.0.0.1');

