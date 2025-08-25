// Templates and Engines

var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine','ejs');

app.get('/', function(req,res){

    // we Render the response with the view
    res.render('index');
    
});

app.get('/person/:id', function(req,res){

    res.render('person', {ID:req.params.id})

});

app.get('/api', function(req,res){

    res.send({

        firstname : 'Matti',
        lastname : 'Meikäläinen'
    
    })

});


app.listen(port);