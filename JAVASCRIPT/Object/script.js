// CREATING OBJECTS

// const obj = {
//     "name": "Light",
//     "last name": "Yagami",
//     1: "one",
//     true: "turu",
//     false: "false",
//     age: 22
// };

// ACCESSING OBJECT:

// console.log(obj);

// 1. DOT OPERATOR
// console.log(obj.name);
// console.log(obj.true);

// 2. BRACKET
// console.log(obj["name"]);
// console.log(obj[age])                             // not accessable
// console.log(obj[true])                           // only access boolean value - true/ false
// console.log(obj["age"])
// console.log(obj[1], obj["1"]);
// console.log(obj["last name"])

// --------------------------------------------------------------------------------------------------------------------

// OPERATIONS

// 1. ADD

// const obj = {
//     user: "Light"
// };

// console.log(obj);

// const key = "email";

// When key is static
// obj.key = "kira@gmail.com";
// When key is dynamic
// obj[key] = "lawliet@gmail.com";                    // Dynamic value
// console.log(obj)

// QUESTIONS

// STATIC

// const car = {

// }

// car.company = "Audi"
// car.model = 2020;
// car.color = "white"
// car.engine = "500cc"
// car.horsepower = "2500"

// console.log(car)

// DYNAMIC

// const key1 = "company";
// const key2 = "model";
// const key3 = "color"
// const key4 = "engine"
// const key5 = "horsepower"

// car[key1] = "BMW";
// car[key2] = "2026";
// car[key3] = "black"
// car[key4] = "1000cc"
// car[key5] = "5000hp"

// console.log(car)


// 2. UPDATE

// obj.age = 25
// console.log(obj)

// if ("age" in obj){
//     obj.age = 27;
// }
// console.log(obj)


// 3. DELETE

// delete obj.age;
// delete obj[1]true
// delete obj["last name"]
// delete obj.agee;                                        // not give any error
// console.log(obj)

// --------------------------------------------------------------------------------------------------------------------

// IMPORTANT OPERATIONS

// FREEZE

// Object.freeze(obj);                                            // totally freeze the obj
// obj.age = 100;
// obj.country = "Japan";
// delete obj.age;
// console.log(obj);

// SEAL

// Object.seal(obj);
// obj.age = 100;                                                  // can update only
// obj.country = "Japan";
// delete obj.age;
// console.log(obj)

// --------------------------------------------------------------------------------------------------------------------

// SHALLOW WORK

// const obj1 = {
//     user: {
//         "name": "Eren",
//         age: 25
//     },
// };

// Object.freeze(obj1);
// obj1.user.name = "Levi";
// console.log(obj1);

// --------------------------------------------------------------------------------------------------------------------

// METHODS

// console.log(Object.keys(obj))                                            // only keys
// console.log(Object.keys(obj).includes("age"))
// console.log(Object.values(obj))                                        // only values
// console.log(Object.entries(obj))                                      // key-value pairs

// --------------------------------------------------------------------------------------------------------------------

// DESTRUCTURING

// const user = {
//     name: "Gojo",
//     age: 25,
//     city: "Shibhuya"
// };

// console.log(user);

// const { name, age } = user;
// console.log(name, age);

// RENAME WHILE DESTRUCTURING

// const { name: naam, age: umar, city: shehr} = user;
// console.log(naam, umar, shehr);

// --------------------------------------------------------------------------------------------------------------------

// NESTED OBJECT DESTRUCTURING

// const user = {
//     name: "Itachi",
//     address: {
//         city: "Leaf Village",
//         pin: 120843,
//     },
// };

// const { name, address } = user;
// console.log(name, address);
// const { city, pin } = address;
// console.log(city);
// console.log(pin)


// const name = "Abhishek";
// const age = 22;
// const state = "Punjab";

// const user = {
//     name,
//     age,
//     state,
// };

// console.log(user);

// const { name: username, age: umar, state: shehr } = user;

// console.log(username)
// console.log(umar)
// console.log(shehr)

// --------------------------------------------------------------------------------------------------------------------+

// FUNCTION IN OBJECT

// const major = {
//     name: "abcd",
//     greet: () => {
//         console.log("greet")
//     },
// };

// major.greet()

// --------------------------------------------------------------------------------------------------------------------

// QUESTIONS

// const obj = {
//   a: 10,
//   b: {
//     a: 20,
//   },
// };
// const x = obj.b;
// x.a = 30;
// console.log(obj.b.a);


// const obj = {
//   a: 1,
// };

// Object.seal(obj);

// obj.a = 10;
// delete obj.a;
// console.log(obj);

// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//   },
// };

// Object.freeze(obj);

// obj.b.c = 10;
// console.log(obj.b.c);

// --------------------------------------------------------------------------------------------------------------------

// FUNCTION INSIDE OBJECTS CALLED METHODS

// const obj = {
//     name: "Light",
//     regular() {
//         console.log("This is an regular function");
//     },
//     anonymous: function () {
//         console.log("This is an anonymous function");
//     },
//     arrowfn: () => {
//         console.log("This is an arrow function");
//     },
// };

// obj.regular();
// obj.anonymous();
// obj.arrowfn();



// const test = () => {
//     console.log("This is test");
// }

// const testObj = {
//     test,
// }

// test();                      // function
// testObj.test();             //  method
