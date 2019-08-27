
// Javscript is a Dynamically Typed language

/*Boolean

    boolean are use for representing true or false of something

*/
const isHuman = true;

/* Numbers

    In, Javascript all the numbers are represented as Decimals or Floating Point Numbers
    
    Javscript does not have integers

*/

const a = 0.2;
const b = 0.1;

const sum = a + b; // 0.30000000004

sum.toFixed(); // 0
sum.toFixed(1); // 0.3
sum.toFixed(2); // 0.30

/* Undefined

    A variable that hasn’t been assigned a value yet, or 
    in other words a variable that hasn’t yet been defined, holds the value undefined. 
    We haven’t given the variable a value yet, although we have declared it. 

*/

var c;

/* NULL

    You can declare a variable with the value null if you deliberately don’t want it to hold any value.
    Null does not mean 0 or undefined: the variable deliberately points to nothing

*/

let d = null;

/* String

    Javascript support string in Single quote or Double quote
    Javscript does not support Characters type

*/

var str = "How 's is the day"; // "\" is used as a escape sequence
console.log(str);
