// Query String and Post
var express = require('express');
var app = express();

var port = process.env.port || 3000;

// middleware. used when form is sent to server
var urlEncodedParser = express.urlencoded({extended:false});
var jsonParser = express.json();


app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine','ejs');

app.get('/', function(req,res){

    // we Render the response with the view
    res.render('index');
    
});

app.post('/person', urlEncodedParser, function(req,res){

    res.send("Thanks for the info, SUCKER-- i mean " +req.body.fname );
    console.log(req.body.fname);
    console.log(req.body.lname);

});

app.post('/personjson', jsonParser, function(req,res){

    console.log(req.body.playerName);
    console.log(req.body.race);

});

app.get('/person/:id', function(req,res){

    // delete verb is a hint for the server to delete the user.
    // doesn't actually do anything without us writing it
    res.render('person', {ID:req.params.id})

});

app.get('/api', function(req,res){

    res.send({

        firstname : 'Matti',
        lastname : 'Meikäläinen'
    
    })

});


app.listen(port);