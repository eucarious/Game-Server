// call and apply

var obj = {

    fullname : "Matti Meikäläinen",

    greet : function() {

        console.log(`Hello ${this.fullname}`);
    }

}

obj.greet();
obj.greet.call({fullname: 'Maija Mehiläinen'});
obj.greet.apply({fullname: 'Taija Ampiainen'});

