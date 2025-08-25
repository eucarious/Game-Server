var express = require('express');
var mysql = require('mysql');
var app = express();
var port = process.env.port || 3000;

app.get(('/unitytest'), function(req,res) {

    console.log("Space was pressed in Unity");
    // Send a response to unity to instantiate an object to scene
    var dummyData = {
        action: "instantiatePlayer",
        position: [

            {name: "x", value: 5},
            {name: "y", value: 0},
            {name: "z", value: 15}
        ]
    }
    res.json(dummyData);

});

app.get('/api/player/:id', function(req,res){

    console.log("Let's get info from DB.  " + req.params.id);

    // connect to DB
    var con = mysql.createConnection({

        host:"localhost",
        user:"root",
        password:"",
        database:"unitygame"

    })

    con.connect();

    // query to the DB

    var query = "SELECT id, firstname, lastname, health FROM players WHERE id="+req.params.id;
    con.query(query, function(err,rows){

        // info in rows. errors in err
        // includes all rows
        if (err) throw (err);

        console.log(rows[0].firstname);
        console.log(rows[0].lastname);
        console.log(rows[0].health);

        // if above works, send info in response via JSON
        res.json({firstname:rows[0].firstname, lastname:rows[0].lastname,health:rows[0].health});

    });

});

app.listen(port, () => {
    
    console.log("Unity server is running");

});