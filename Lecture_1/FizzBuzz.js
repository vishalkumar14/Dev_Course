/*

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];

for(var i = 0; i < arr.length; ++i){

    if((arr[i]%3) === 0 && (arr[i]%5) === 0){
        console.log("FizzBuzz ");
    }
    else if((arr[i]%3) === 0 ){
        console.log("Fizz ");
    }
    else if((arr[i]%5) === 0){
        console.log("Buzz ");
    }

}

*/

var cap = {
  name: "Steve",
  lastName: "Rogers",
  age: 105,
  movies: [
    "First Avengers",
    "Avengers",
    "Winter Soldier",
    "Age Of Ultron",
    "CivilWar",
    "Infinity War",
    "Endgame"
  ],
  address: {
    city: "Brooklyn",
    state: "New York"
  },
  sayHi: function() {
    console.log("I can do this all day");
  }
};

//console.log(cap);

var sn = 13;

var i = 1;
var dn = 0;
var rem = 0;
var sb = 10;
var db = 2; //i=power

while (sn > 0) {
  rem = sn % db;
  dn = dn + rem * i;
  i = i * sb;
  sn = Math.floor(sn/db);
}
console.log(dn);
