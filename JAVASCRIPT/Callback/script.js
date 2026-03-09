// CALLBACK - jo function dusre function ke argument me pass ho raha hai and call later

// function greet(name) {                    // callback
//     console.log("hello", name);
//     return 1;
// }

// function printResult(callback) {         // high order function
//     console.log(callback, "test");
// }

// printResult(greet);
// printResult(greet("Ryuk"));

// -----------------------------------------------------------------------------------------------------------------------

// HIGH ORDER FUNCTION - jo function callback function ko receive ya return kar raha hai - parent function

// function calculate(a, b, operation){
//     return operation(a, b);
// }

// -----------------------------------------------------------------------------------------------------------------------

// ARITHMETIC CALLBACKS

// function add(x, y){
//     return x + y;
// }
// function sub(x, y){
//     return x - y;
// }
// function mul(x, y){
//     return x * y;
// }
// function div(x, y){
//     return x / y;
// }
// function exp(x, y){
//     return x ** y;
// }
// function mod(x, y){
//     return x % y;
// }

// console.log(calculate(10, 2, add))
// console.log(calculate(10, 2, sub))
// console.log(calculate(10, 2, mul))
// console.log(calculate(10, 2, div))
// console.log(calculate(10, 2, exp))
// console.log(calculate(10, 2, mod))

// -----------------------------------------------------------------------------------------------------------------------

// QUESTION

// function multiply(fac){
//     return function(num){
//         return num * fac;
//     }
// }

// const triple = multiply(3);
// console.log(triple(3))


// function multipy(factor){                     // factor = 5   multiply is a higher order function
//     return function (num){                   //  num = 3
//         return num * factor;                //   3 * 5
//     }
// }

// const penta = multipy(5);               // penta is not a callback
// console.log(penta(3))

// -----------------------------------------------------------------------------------------------------------------------

// CLOSURE - Inner function ko outer function ke variables yaad rehte hain - lexical scope

// function outer() {
//     let count = 0;
//     function increment() {
//         count++;
//         console.log(count);
//     }
//     return increment;
// }

// const result = outer();
// result()
// result()
// result()


