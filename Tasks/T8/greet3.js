function Greetr(){

    this.greeting = "Long ass Wednesday";

    this.greet = function(){

        console.log(this.greeting);

    }

}

module.exports = new Greetr();