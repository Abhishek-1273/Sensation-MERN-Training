// NUMBER

// let a = 10;
// let b = -10;
// let c = 15.243346;

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(a)

// console.log(a / 0)   // Infinity
// console.log(-a / 0)  // -Infinity

// console.log("10" / 5)  // coertion
// console.log("10" + 5)  // concat
// console.log("p" / 5)  // NaN | type is number

// -------------------------------------------------------------------------------------------

// ARITHMETIC OPERATION

// let num1 = 5;
// let num2 = 5;

// console.log(num1 + num2) // Addition
// console.log(num1 - num2) // Subtraction
// console.log(num1 * num2) // Multiplication
// console.log(num1 / num2) // Division
// console.log(num1 ** num2) // Exponential
// console.log(num1 % num2) // Modulus (Reminder)

// -------------------------------------------------------------------------------------------

// CONSTRUCTOR

// console.log(typeof Number("56a"));

// -------------------------------------------------------------------------------------------

// SOME METHODS

// console.log(Number.isNaN("56"))        // false

// console.log(Number("56a"));
// console.log(isNaN("56a"))  // defect
// console.log(Number.isNaN("56a"))      // false

// console.log(Number.isNaN(10))        // false
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.5));
// console.log(Number.isInteger(-10));

// -------------------------------------------------------------------------------------------

// INTERVIEW QUESTIONS

// console.log(0.1 + 0.2);
// console.log(0.3);

// console.log((0.1 + 0.2) === 0.3);
// console.log((0.1 + 0.2).toFixed(1) == 0.3);  // return type is string

// -------------------------------------------------------------------------------------------

// EPSILON

// console.log(Number.EPSILON)
// console.log(0.1 + 0.2 - 0.3 < Number.EPSILON);
// console.log(Number.EPSILON > 5);
// console.log(Number.EPSILON == 0);
// console.log(Number.EPSILON > 0);
// console.log(Number.EPSILON < 0);


// const num5 = 0.1 + 0.3;
// const num6 = 0.1 + 0.2;
// console.log(Math.abs(num5))
// console.log(Math.abs(num6))
// console.log(Math.abs(num5 - 0.3) < Number.EPSILON)

// -------------------------------------------------------------------------------------------

// INFINITE METHODS

// console.log(Number.isFinite(10));
// console.log(Number.isFinite("10"));
// console.log(Number.isFinite(Number("10")));
// console.log(Number.isFinite(Infinity));
// console.log(isFinite("10")) // does not perform coercion(coversion)
// console.log(isFinite(Number("10"))) // does not perform coercion(coversion)

// -------------------------------------------------------------------------------------------

// PARSEINT -> Convert into integer

// console.log(Number.parseInt(10.6));
// console.log(Number.parseInt("10"));
// console.log(Number.parseInt("10jl57sfj"));
// console.log(Number.parseInt("jl5.7sfj"));
// console.log(Number.parseInt("23.887sfj"));
// console.log(Number.parseInt("jl577sfj"));

// PARSEFLOAT -> Convert into float

// console.log(Number.parseFloat(10.6));
// console.log(Number.parseFloat(10));
// console.log(Number.parseFloat("150sfj"));
// console.log(Number.parseFloat("jl5.7sfj"));
// console.log(Number.parseFloat("23.887sfj"));
// console.log(Number.parseFloat("jl577sfj"));
