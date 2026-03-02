// NORMAL FUNCTION

// Definition
// function sum(a, b) {
//     let result = a + b;
//     return result;
// }
// // Calling
// console.log(sum(4, 5));

// -----------------------------------------------------------------------------------

// DEFAULT FUNCTION

// function sum(a = 4, b = 2) {
//     let result = a + b;
//     return result;
// }
// console.log(sum());

// function greet(name = "User") {
//     console.log(`Hello ${name}`);
// }

// greet() // greet("Abhishek")

// -----------------------------------------------------------------------------------

// QUESTIONS

// TAX CALCULATOR

// function taxCalculator(price, tax = 0.40) {
//     let result = price + (price * tax)
//     return result;
// }

// console.log(taxCalculator(200))

// TABLE GENERATOR

// function tableGenerator(n) {
//     for (i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = ${n * i}`)
//     }
// }
// tableGenerator(10)

// TABLE GENERATE FROM ARRAY

// function tableGenerator(n) {           // length = 10
//     Array.from({ length: 10 }, (_, i) => {
//         console.log(`${n} x ${i + 1} = ${n * (i + 1)}`)
//     })
// }
// tableGenerator(10);

// -----------------------------------------------------------------------------------

// ANONYMOUS FUNCTIONS

// const name = function(name){
//     console.log(`Hello ${name}`)
// }
// console.log("Abhishek")

// -----------------------------------------------------------------------------------

// CALLBACK FUNCTION -> It is a function that is passed to another function and called later

// function calculation(a, b, operation){
//     return operation(a, b)
// }

// function add(a, b){
//     return a + b;
// }

// function subtract(a, b){
//     return a - b;
// }

// console.log(calculation(3, 4, add))
// console.log(calculation(10, 4, subtract))

// -----------------------------------------------------------------------------------

// CALLBACK HELL

// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//         console.log("Step 2")
//         setTimeout(() => {
//             console.log("Step 3")
//         }, 1000);
//     }, 1000);
// }, 1000)

// -----------------------------------------------------------------------------------

// HIGHER ORDER FUNCTION -> It is a function that accept another function or return a function


// with normal function :

// function sayHi(){ 
//     console.log("Hello..!!!")
// }
// function callFunction(fn){               // calling a function
//     fn();
// }
// callFunction(sayHi);


// function greet(message){
//     return function(name){               // return a function
//         return message + " " + name;
//     }
// }
// const sayHi = greet("Hello")
// console.log(sayHi('Abhishek'))


// with arrow function :

// const greet = (message) => {
//     return (name) => {
//         return message + " " + name;
//     }
// }
// const sayHi = greet("Hello")
// console.log(sayHi("Abhishek"))


// const multiply = (a) => {
//     return (b) => {
//         return a + b;
//     }
// }

// const add = multiply(5)
// console.log(add(5))

// with normal function

// function doOperation(n, operation) {
//     return operation(n);
// }

// function square(n){
//     return n * n;
// }

// console.log(doOperation(4, square))

// with arrow function

// const doOperation = (n, operation) => {
//     return operation(n);
// }

// const square = (n) => n * n;
// const cube = (n) => n * n * n;

// console.log(doOperation(4, square))
// console.log(doOperation(4, cube))

// -----------------------------------------------------------------------------------

// ARROW FUNCTION