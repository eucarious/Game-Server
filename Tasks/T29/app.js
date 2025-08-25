// routing

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === "/"){

        res.writeHead(200, {'Content-type':'text/html'}); 
        fs.createReadStream(__dirname+'/index.html').pipe(res);

    } else if (req.url === "/api") {

       
        res.writeHead(200, {'Content-type':'text/json'});
        
        var person = {

            firstname : 'Matti',
            lastname : 'Meikäläinen'

        }
        
        res.end(JSON.stringify(person));

    } else {
        res.writeHead(200, {'Content-type':'text/plain'});
        res.end("This page doesn't exist, dummy");
    }

}).listen(1337,'127.0.0.1');

