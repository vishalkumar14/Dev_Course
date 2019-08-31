var steve = {
  name: "Robert Downey Jr",
  age: 50,
  getAge: function() {
    return "My age is " + this.age;
  }
};

// console.log(steve.getAge());

// var hydra = steve;

// steve = null;

// console.log(hydra.getAge());


var cap = {
    name: "Robert Downey Jr",
    age: 50,
    getAge: function() {
      console.log("Object");
      console.log(this);
    }
}

function forThis(){
    console.log("Function ");
    console.log(this);
}

// console.log("Global");
// console.log(this);

// forThis(); // function without invoked without help of any object have this equals to global

// cap.getAge(); // here function have this equals to cap object

var c = {

    name : "c object",
    log : function(){
        this.name = "updated c object";

        function setName(newName){
            this.name = newName;
        }
        setName("Updated c again object");
    }

}

console.log(c.name);
c.log();
console.log(c.name);



