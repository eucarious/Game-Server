// Routing part2

var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.get('/', function(req,res){

    res.send('<html><head></head><body><h1>This is a heading</h1></body></hmtl>')

});

app.get('/persons', function(req,res){

    res.send('<html><head></head><body><h1>Doxx every user on my list (list size 0) </h1></body></hmtl>')

});

app.delete('/person/:id', function(req,res){

    // delete verb is a hint for the server to delete the user.
    // doesn't actually do anything without us writing it
    res.send('<html><head></head><body><h1>Gets a specific person. Info of:' + req.params.id + '</h1></body></hmtl>')

});

app.get('/api', function(req,res){

    res.send({

        firstname : 'Matti',
        lastname : 'Meikäläinen'
    
    })

});


app.listen(port);