module.exports = function (app) {
    app.get('/', function(req,res){

        // we Render the response with the view
        res.render('index');
        
    });


    app.get('/person/:id', function(req,res){

        // delete verb is a hint for the server to delete the user.
        // doesn't actually do anything without us writing it
        res.render('person', {ID:req.params.id})

    });
}
