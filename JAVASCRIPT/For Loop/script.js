// FOR LOOP

// const arr = ["a", "b", "c", "d", "e"];

// increment case
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i)
// }

// decrement case
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i], i)
// }

// ------------------------------------------------------------------------------------------------------------------

// QUESTION

// PRINT EVEN NUMBER BETWEEN 20 WITH FOR LOOP

// for (let i = 1; i < 21; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// WITH CONTINUE

// for (let i = 1; i < 21; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i)
// }

// --------------------------------------------------------------------------------------------------------------

// BREAK

// for (i = 0; i < 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// CONTINUE

// for (i = 1; i <= 20; i++) {
//   if (i === 16) break;
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// --------------------------------------------------------------------------------------------------------------

// WHILE LOOP

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let pin = 1234;
// let enteredPin = 2345;
// while (pin !== enteredPin) {
//   console.log("PIN IS WRONG");
//   break;
// }

// --------------------------------------------------------------------------------------------------------------

// DO WHILE LOOP

// let x = 10;
// do {
//     console.log(x, "run");
//     x--;
// } while (x > 5);

// --------------------------------------------------------------------------------------------------------------

// FOR OF

// const arr = [1, 2, 3, 4, 5];
// for (let alpha of arr) {
//   console.log(alpha + alpha);
// }

// --------------------------------------------------------------------------------------------------------------

// SORT

// const arr = [3, 5, 20, 21, 10];
// console.log(arr.sort());
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));
// console.log(arr.reverse());
// console.log(arr);

// ARRAY PROTOTYPE

// const arr2 = [11, 2, 3, 4, 5];
// Array.prototype.customSum = function (callback) {
//   let sum = 0;
//   for (let i = 0; i < this.length; i++) {
//     sum += callback(this[i], i, this);
//   }
//   return sum;
// };
// const total = arr2.customSum((value) => value);
// console.log(total);

// const arr = [12, 13, 14, 6, 8];

// Array.prototype.sum = function () {
//   let sum = 0;
//   for (let v of this) {
//     sum += v;
//   }
//   return sum;
// };
// console.log(arr.sum());

// ------------------------------------------------------------------------------------------------------

// FOR EACH LOOP

// let arr = ["a", "b", "c"];

// const test = arr.forEach((item,index) => {
//     console.log(item, index)
// })

// console.log(test);

// ------------------------------------------------------------------------------------------------------

// FOR EACH DON'T RETURN ANY OPERATION

// const arr = [1, 2, 3, 4, 5, 6];

// const test = arr.forEach((item)=>{
//     console.log(item * 2);
//     return item * 2;
// })
// console.log(test)

// ------------------------------------------------------------------------------------------------------

// MAP -> it perform operation and return a new Array


// const arr = [1, 2, 3, 4, 5, 6];
// const test = arr.map((item) => {
//     console.log(item * 2);
//     return item * 2
// })


// const test = arr.map(item => item * 2)  // shorten the code

// console.log(test)

// ------------------------------------------------------------------------------------------------------

// MAP PRACTICE

// const arr = [2, 4, 5, 6,];

// const newArr = arr.map(item => item * item);
// console.log(newArr)

// arr.forEach((item) => {
//     console.log(item ** 2);
// })

// const arr = ["abhishek", "deepak", "dhruv"]
// const newArr = arr.map(item => item.toUpperCase());
// console.log(newArr)

// arr.forEach((item) => {
//     console.log(item.toUpperCase())
// })


// let prices = [100, 200, 300];  // return new array with 18% gst;

// const gstPrices = prices.map(price => price + (price * 18 / 100));  // 0.18
// console.log(gstPrices)

// ------------------------------------------------------------------------------------------------------

// FILTER -> filter and give a new Array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = arr.filter((item) => {
//     return item % 2 === 0;
// })
// console.log(even)

// const even = arr.filter(item => item % 2 === 0);
// console.log(even)

// ------------------------------------------------------------------------------------------------------

// FILTER PRACTICE

// const str = ["Abhi", "Dev", "Rohan", "Ram", "Deepak", "Ajay", "Raj"];

// const newStr = str.filter(item => item.length > 3);
// console.log(newStr);

// const values = [0, "false", "", false, true, 1, "hello"];

// const truthyValues = values.filter(value => Boolean(value))
// const falseyValues = values.filter(value => Boolean(value) === false)
// console.log(truthyValues)
// console.log(falseyValues)

// ------------------------------------------------------------------------------------------------------

// REDUCE -> return only a single value

// const arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((acc, item)=>{
//     return acc += item;
// })

// let sum2 = arr.reduce((acc, item)=>{
//     return acc += item;
// }, 10)
// console.log(sum, sum2)

// ------------------------------------------------------------------------------------------------------

// FIND -> work like filter but only give a single value

// const arr = [11, 22, 27, 40, 52, 6];

// const result = arr.find(item => item % 2 === 0);
// console.log(result)