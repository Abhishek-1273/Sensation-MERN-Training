// "this" KEYWORD

// console.log(this);

// ----------------------------------------------------------------------------------------------------------------------------

// "this" KEYWORD WITH FUNCTION

// "this" refers to an object
// node run snipet : global object, {}
// browser : window
// if "this" is define inside a function then call site with decide where we have call its value
// for normal functions and anonymous function "this" can be determined by call site
// for arrow functions "this" can be determined by the surrounding parent scope

// const obj = {
//     name: "Light",
//     regular() {
//         console.log("This is an regular function, and here the 'this' keyword works and gives:", this);
//     },
//     anonymous: function () {
//         console.log("This is an anonymous function, and here the 'this' keyword works and gives:", this)
//     },
//     arrowfn: () => {
//         console.log("This is an arrow function, and here the 'this' keyword does not work and gives:", this);
//     },
// };

// obj.regular();
// obj.anonymous();
// obj.arrowfn();

// ----------------------------------------------------------------------------------------------------------------------------

// NORMAL FUNCTION

// function test() {
//     console.log(this);
// }

// test();

// ARROW FUNCTION

// const test = () => {
//     console.log(this);
// };

// test();

// ----------------------------------------------------------------------------------------------------------------------------

// const playing = {
//     name: "Ronaldo",
//     game: function () {
//         const football = () => {
//             console.log(this)
//         }
//         football();
//     }
// }

// playing.game();

// ----------------------------------------------------------------------------------------------------------------------------

// ✅ CALL - "this" ko manual set krne k liye hota hai and arguments directly pass hote hain

// function greet(){
//     console.log("Welcome", this.name);
// }

// const person1 = {
//     name: "Light Yagami",
// }
// const person2 = {
//     name: "L Lawliet",
// }
// greet.call(person1);
// greet.call(person2);

// ----------------------------------------------------------------------------------------------------------------------------

// QUESTIONS

// const user = {
//     name: "Eren",
//     anonymousfn: function () {
//         console.log("Anonymous: ", this.name);                // Eren
//         const arrowfn = () => {
//             console.log("Arrow: ", this.name)                 // Eren
//         };
//         arrowfn();
//     },
// };

// const anotherUser = {
//     name: "Mikasa"
// };

// user.anonymousfn()
// user.anonymousfn.call(anotherUser)

// ----------------------------------------------------------------------------------------------------------------------------

// APPLY - arguments array me pass hote hain

// function greet(age, country){
//     console.log(this.name, age, country);
// }


// const user ={
//     name: "Ryuzaki"
// }
// greet.apply(user, [22, "Japan"]);
// result = greet.apply(user, [22, "Japan"]);
// result();                                                // (apply and call immediately execute karta hai, kuch return nahi karta)

// ----------------------------------------------------------------------------------------------------------------------------

// BIND - function ko turant execute nahi karta and naya function return karta hai

// function greet(age, city) {
//     console.log(this.name, age, city);
// }

// const user = {
//     name: "Light",
// }
// const result = greet.bind(user, 22, "Japan")
// result();

// ----------------------------------------------------------------------------------------------------------------------------

// SPREAD OPERATOR

// IN ARRAY

// const array = [1, 2, 3, 4];

// let arrayCopy = array;                                        // create a reference copy
// let arrayCopy = [...array];                                  // spread create a shallow copy

// console.log(arrayCopy, "Test1")
// console.log(array, "Test2")

// arrayCopy.push(5);

// console.log(arrayCopy, "Test3")
// console.log(array, "Test4")


// IN OBJECT

// const obj = {
//     name: "Tanjiro",
//     age: 20
// }

// let objCopy = { ...obj };

// console.log(objCopy, "Test1")
// console.log(obj, "Test2")

// objCopy.age = 200;

// console.log(objCopy, "Test3")
// console.log(obj, "Test4")


// IN NESTED ARRAY AND OBJECT - give reference copy

// const nestedArray = [1, 2, [3, 4]];

// let nestedArrayCopy = [...nestedArray];

// console.log(nestedArrayCopy, "Test1")
// console.log(nestedArray, "Test2")

// nestedArray[2][0] = 33;

// console.log(nestedArrayCopy, "Test3")
// console.log(nestedArray, "Test4")

// ----------------------------------------------------------------------------------------------------------------------------

// let arr = [1, 2, [5, 4]];

// let arrCopy = structuredClone(arr);
// arrCopy[2][0] = 3;

// console.log("Original: ", arr);
// console.log("Copy: ", arrCopy)


// let obj = {
//     name: "Light",
//     age: 22
// }

// let objCopy = structuredClone(obj)
// objCopy.age = 30;

// console.log("Original: ", obj);
// console.log("Copy: ", objCopy)

// ----------------------------------------------------------------------------------------------------------------------------

// REST OPERATOR

// function test(...numbers){
//     console.log(numbers)
// }

// test(1, 2, 3, 4)

// ----------------------------------------------------------------------------------------------------------------------------

// QUESTION

// function sum(first, second, ...numbers) {
//     console.log(first)
//     console.log(second)
//     console.log(numbers)
//     return numbers.reduce((acc, curr) => acc += curr);
// }

// console.log(sum(1, 2, 3, 4, 5, 6));

