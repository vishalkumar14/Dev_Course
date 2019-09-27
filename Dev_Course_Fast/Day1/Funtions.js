function sayHi(){
    console.log("I Just said HI");
}

sayHi();

const greeter = function (str){
    console.log("HI" + str );
}

greeter("Steve");

(function(){
    console.log("HI");
})();

var a = 10;
console.log(global.a);