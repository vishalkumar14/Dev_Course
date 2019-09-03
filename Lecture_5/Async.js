console.log("I was Called before the SetTime");

setTimeout(function() {
  console.log("Hi Steve");
}, 2000);

console.log("I was Called After the SetTime");


// Code below does not allow setTimeout to print because is not allow stack to become empty
while(true){
    console.log("Hi") 
}
