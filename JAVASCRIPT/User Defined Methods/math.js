// console.log(typeof Math);

// console.log(Math.PI);
// console.log(Math.E);

// ---------------------------------------------------------------------------------

// RoundOff Properties

// console.log(Math.round(23.3));
// console.log(Math.round(23.8));

// console.log(Math.floor(23.2));
// console.log(Math.floor(23.9));

// console.log(Math.ceil(23.01));
// console.log(Math.ceil(23.9));

// console.log(Math.trunc(23.55));
// console.log(Math.trunc(-13.55));

// console.log(Math.abs(10));
// console.log(Math.abs(-10));

// console.log(Math.pow(2, 3));

// console.log(Math.sqrt(16));

// console.log(Math.min(2, 4, 42, 1, 2, 5, 23));
// console.log(Math.min(2, 4, 42, 1, 2, -5, -23));

// console.log(Math.max(2, 4, 2, 1, 2, 5, 23));
// console.log(Math.max(2, 4, 2, -1, 2, -5, 23));

// console.log(Math.sign(-3424));
// console.log(Math.sign(0));
// console.log(Math.sign(783424));

// ----------------------------------------------------------------------------

// TO GENERATE A RANDOM NUMBER BETWEEN 0 TO 10

// const num1 = Math.random()
// console.log(num1)
// console.log(num1 * 10)
// console.log(Math.floor(num1 * 10) + 1)

// ----------------------------------------------------------------------------

// CREATE MY OWN PROTOTYPE FOR GENERATE RANDOM NUMBER

// Number.prototype.generate_number = function(){
//     return Math.floor(Math.random() * num2 + 1);
// }

// const num2 = 100
// console.log(num2.generate_number())

// ----------------------------------------------------------------------------

// CREATE MY OWN PROTOTYPE FOR GENERATE RANDOM NUMBER IN BETWEEN

// Number.prototype.is_Between = function(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const randomNumber = Number().is_Between(20, 30);  // (0).is_Between
// console.log(randomNumber)

// ----------------------------------------------------------------------------

// PRECENDENCE (Left to Right)

// ()
// **
// * / %    
// + -

// ----------------------------------------------------------------------------
