// HOISTING - Saare variable hoist hote hai..

// a;
// console.log(a);

// a = 5;
// console.log(a);

// console.log(a);
// a = 5;

// --------------------------------------------------------------------------------------------------------------

// VAR

// var a;
// console.log(a);

// var a = 5;
// console.log(a)

// console.log(a);
// var a = 5;

// --------------------------------------------------------------------------------------------------------------

// LET 

// let a;
// console.log(a);

// let a = 5;
// console.log(a)

// console.log(a);              // Temporal Dead Zone
// let a = 5;

// --------------------------------------------------------------------------------------------------------------

// CONST 

// const a;
// console.log(a);

// const a = 5;
// console.log(a)

// console.log(a);
// const a = 5;

// --------------------------------------------------------------------------------------------------------------

// NORMAL FUNCTION - Hoisting Works

// console.log(square(7));
// function square(n){
//     return n * n;
// }

// greet()
// function greet(){
//     const name = "Abhishek";
//     console.log(`Hello ${name}`)
// }

// --------------------------------------------------------------------------------------------------------------

// ANONYMOUS FUNCTION - Hoisting Works but TDZ 

// with var

// console.log(greet);
// var greet = function(){
//     const name = "Abhishek";
//     return `Hello ${name}`;
// }

// console.log(greet());


// with let

// console.log(greet);
// let greet = function(){
//     const name = "Abhishek";
//     return `Hello ${name}`;
// }

// console.log(greet());

// with const

// console.log(greet);
// const greet = function(){
//     const name = "Abhishek";
//     return `Hello ${name}`;
// }

// console.log(greet());

// --------------------------------------------------------------------------------------------------------------

// TEMPORAL DEAD ZONE - variable ko declare karne ke baad, jab tak value assign nahi hoti, us time me use access karoge to error aayega — us gap ko TDZ bolte hain.

// --------------------------------------------------------------------------------------------------------------

// QUESTIONS

// console.log(a)        // undefined
// console.log(b)       // initialization
// console.log(c)      // initialization
// test1()            // Normal Functons
// test2()           // test2 is not function
// test3()          // initialization

// var a = 10;
// let b = 20;
// const c = 30

// function test1(){
//     console.log("Normal Functions");
// }

// var test2 = function(){
//     console.log("Anonymous Function")
// }

// const test3 = () => {
//     console.log("Arrow Function")
// }