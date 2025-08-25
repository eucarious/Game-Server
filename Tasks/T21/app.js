// Callbacks

function greet(callbackFunction) {
    console.log("Hello everyone. The function worked.");

    var data = {
        fullname : "Matti Meikäläinen"
    }
    // invoke callback function
    callbackFunction(data);
}

greet(function(newData){
    console.log("This is the callback function!")
    console.log(newData);
});

greet(function(newData){
    console.log("This is a DIFFERENT callback!!")
    console.log(newData.fullname);
});