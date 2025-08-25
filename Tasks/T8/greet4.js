function Greetr(){

    this.greeting = "Weekend come sooner";
    this.greet = function(){
        console.log(this.greeting);
    }

}

module.exports = Greetr;