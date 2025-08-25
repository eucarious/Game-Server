var express = require('express');
// middleware. used when form is sent to server
var urlEncodedParser = express.urlencoded({extended:false});
var jsonParser = express.json();

module.exports = function (app) {

    app.post('/api/person', urlEncodedParser, function(req,res){

        res.send("Thanks for the info, SUCKER-- i mean " +req.body.fname );
        console.log(req.body.fname);
        console.log(req.body.lname);

    });

    app.post('/api/personjson', jsonParser, function(req,res){

        console.log(req.body.playerName);
        console.log(req.body.race);

    });


    app.get('/api', function(req,res){

        res.send({

            firstname : 'Matti',
            lastname : 'Meikäläinen'
        
        })
    });

}