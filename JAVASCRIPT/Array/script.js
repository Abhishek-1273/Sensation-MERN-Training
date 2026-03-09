// FIRST WAY TO CREATE ARRAY

// const arr = ["1", 2, null, undefined, { name: "ryuzaki"}, ["a"]]
// console.log(arr);

// SECOND WAY TO CREATE ARRAY

// let b = new Array(1);
// console.log(b.length);
// console.log(b[0]);

// THIRD WAY TO CREATE ARRAY

// let c = Array.of(1, 2, 3, "a");
// console.log(c);

// ------------------------------------------------------------------------------------------------------------------

// METHODS

// 1. PUSH & POP

// const cart = ["shirts", "watches"];
// console.log(cart);
// const l = cart.push("shoes");
// console.log(cart);
// console.log(l);
// const removed = cart.pop();
// console.log(cart);
// console.log

// 2. SHIFT AND UNSHIFT (at the beginning operation of an array)

// const cars = ["hummer", "porche", "g-wagon"]
// const removed2 = cars.shift();
// console.log(cars);
// console.log(removed2);

// const l2 = cars.unshift("hummer");
// console.log(l2);
// console.log(cars);

// 3. SLICE

// const arr = ["a", "b", "c", "d", "e"];
// const sliced = arr.slice(-4);
// console.log(sliced);
// console.log(arr);

// sliced.unshift("z");
// console.log(sliced);
// console.log(arr);

// ------------------------------------------------------------------------------------------------------------------

// const arr = [{ name1: "abhishek"}, { name2: "deepu"}, { name3: "ishant"}];
// const sliced = arr.slice(1);
// console.log(sliced);
// console.log(arr);
// sliced[0].name2 = "dhruv";

// console.log(sliced);
// console.log(arr)

// ------------------------------------------------------------------------------------------------------------------

// ARRAY FROM

// let str = "Abhishek";
// let arr1 = Array.from(str);
// console.log(arr1);

// ------------------------------------------------------------------------------------------------------------------

// SPLICE

// const cars = ["volvo", "BMW", "Audi", "Buggati"]
// const removed = cars.splice(1,cars.length)

// console.log(removed)
// console.log(cars)

// REMOVE

// const cars = ["hummer", "porche", "g wagon", "bentley"];

// let remove = cars.splice(2, 1);
// console.log(remove)
// console.log(cars)

// ADD

// let removed = cars.splice(1, 0, "range rover", "bmw");
// console.log(removed);
// console.log(cars);

// REPLACE

// let replace = cars.splice(1, 2, "range rover", "bmw");
// console.log(replace);
// console.log(cars);

// ------------------------------------------------------------------------------------------------------------------

// QUESTION

// const arr = [1, 2, 3, 4, 5, 6];

// let splice = arr.splice(1, 2, "two", "three")
// let pop = arr.pop()
// let push = arr.push("seven")
// console.log(arr)

// result: [1, "two", "three", 4, 5, "seven"]
// using : push, pop, splice

