// const user1 = {
//     name: "Sasuke",
//     age: 21,
//     login(){
//         console.log("user1 logged in");
//     }
// }

// const user2 = {
//     name: "Sakura",
//     age: 22,
//     login(){
//         console.log("user1 logged in");
//     }
// }

// ------------------------------------------------------------------------------------------------------------------

// CONSTRUCTOR FUNCTION - without prototype

// function User(name, age) {
//     ((this.name = name), (this.age = age));

//     this.login = function (){                     // why we need prototype function
//         console.log(`${this.name} logged in`)
//     };
// }


// const u1 = new User("Naruto", 22);
// const u2 = new User("Hinata", 20);

// console.log(u1)
// console.log(u2)
// u1.login()
// u2.login()

// console.log(u1.login === u2.login)

// ------------------------------------------------------------------------------------------------------------------

// CONSTRUCTOR FUNCTION - with prototype

// function User(name, age) {
//     this.name = name,
//     this.age = age;
// }

// User.prototype.login = function (){
//     console.log(`${this.name} logged in`);
// }

// const u1 = new User("Naruto", 22);
// const u2 = new User("Hinata", 20);

// console.log(u1)
// console.log(u2)
// u1.login()
// u2.login()

// console.log(u1.login === u2.login)

// ------------------------------------------------------------------------------------------------------------------

// PRACTICE QUESTIONS

// function user(name){
//     this.name = name;
// }

// const u1 = user("Luffy");
// console.log(u1);
// console.log(name);


// function person(name) {
//     this.name = name;
//     this.age = 22;
//     console.log(this);
//     return {
//         name: "Ryuzaki",
//     };
// }

// const p1 = new person("Light", 22);
// console.log(p1)

// ------------------------------------------------------------------------------------------------------------------

// CLASSES ()

// class Student {
//     constructor(name, age) {                        // empty object and take value from this
//         this.name = name;
//         this.age = age;
//     }
//     internally() {
//         console.log(this)
//     }
// }

// const s1 = new Student("Ryuk", 1000);
// console.log(s1)
// console.log(typeof Student);
// console.log(s1.name)
// s1.internally()

// ------------------------------------------------------------------------------------------------------------------

// INHERITANCE

// class Crew {                                              // Parent Class
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     login() {
//         console.log(`${this.name} logged in`);
//     }
// }

// class Role extends Crew {                                 // Child Class
//     constructor(name, email, role) {
//         super(name, email);
//         this.role = role;
//     }

//     details() {
//         console.log(this);
//     }
// }

// // Objects
// const crew1 = new Role("Monkey D. Luffy", "luffy@strawhat.com", "Captain");
// const crew2 = new Role("Roronoa Zoro", "zoro@strawhat.com", "Swordsman");
// const crew3 = new Role("Vinsmoke Sanji", "sanji@strawhat.com", "Cook");

// console.log(crew1);
// console.log(crew2);
// console.log(crew3);

// ------------------------------------------------------------------------------------------------------------------

// TRICKY QUESTION

// class employee {
//     constructor(name, salary) {
//         ((this.name = name), (this.salary = salary));
//     }
//     getDetails() {
//         return `${this.name} earns Rs ${this.salary}`
//     }
// }

// class manager extends employee {
//     constructor(name, salary, teamsize) {
//         super(name, salary);
//         this.teamsize = teamsize;
//     }
//     getDetails() {
//         console.log(super.getDetails());                                                              // Parent ka method call karna
//         return `${this.name} earns Rs ${this.salary} and manage ${this.teamsize} man power`
//     }
// }
// const e1 = new manager("Kakashi", "999999", "3");
// console.log(e1);
// console.log(e1.getDetails())

// PRACTICE QUESTION

// class RoyalEnfield {
//     constructor(bikeId, name) {
//         this.bikeId = bikeId;
//         this.name = name;
//     };
//     ready() {
//         return `The Bike id: ${this.bikeId} named ${this.name} is ready go....!`
//     }
// }

// class Bikes extends RoyalEnfield {
//     constructor(bikeId, name, cc) {
//         super(bikeId, name);
//         this.cc = cc;
//     }
//     ready() {
//         console.log(super.ready())
//         console.log(`${this.name} with ${this.cc}cc is ready to go...!!`)
//     }
// }

// const bike1 = new Bikes(1, "Hunter 350", 349.34)
// console.log(bike1);
// bike1.ready();
// const bike2 = new Bikes(2, "Himalayan", 450)
// console.log(bike2);
// bike2.ready()


// const bike3 = new Bikes(3, "Classic 350", 500)
// const bike4 = new Bikes(4, "Shotgun", 650)

// ------------------------------------------------------------------------------------------------------------------

// MULTI LEVEL INHERITANCE

// class grandparent {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class parent extends grandparent {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
//     readyToGo() {
//         return `Naruto is ${this.age} years old`;
//     }
// }

// class child extends parent {
//     constructor(name, age, school) {
//         super(name, age);
//         this.school = school;
//     }
//     readyToGo() {
//         console.log(super.readyToGo());
//         return `Naruto is ready to go to ${this.school}.....`;
//     }
// }

// const c1 = new child("Naruto", 22, "Leaf Public School");
// console.log(c1)
// console.log(c1.readyToGo());

// ------------------------------------------------------------------------------------------------------------------

// HIERARCHY INHERITANCE


// Parent Class

// class User {
//     constructor(name) {
//         this.name = name;
//     };
//     login() {
//         console.log(`${this.name} logged in`);
//     }
// }

// // Admin Class
// class admin extends User {
//     deleteUser() {
//         console.log(`${this.name} deleted a user`)
//     }
// }

// // Customer Class

// class customer extends User {
//     buyProduct() {
//         console.log(`${this.name} buy a product`)
//     }
// }

// const a = new admin("Kazuya");
// const c = new customer("Mizuhara");

// a.login();
// c.login();
// a.deleteUser();
// c.buyProduct();

// ------------------------------------------------------------------------------------------------------------------

// MIXIN

// SIMPLE INHERITANCE

// class animal {
//     eat() {
//         console.log("Eating");
//     }
// };

// //  with Mixin

// const canRun = (base) => class extends base {
//     run() {
//         console.log("Running")
//     };
// };

// const canSleep = (base) => class extends base {
//     sleep() {
//         console.log("Now Sleeping")
//     }
// }

// class dog extends canRun(animal) { }

// // without Mixin

// // class dog extends animal(){
// //     run(){
// //         console.log("Running")
// //     };
// // };

// const d = new dog();

// d.eat()
// d.run()
// // d.sleep()

// ------------------------------------------------------------------------------------------------------------------

// Problem : MULTIPLE INHERITANCE (diamond pattern)

// class person {
//     constructor(name) {
//         this.name = name;
//         console.log(`${this.name} is a Demon Slayer`);
//     }
//     breathe() {
//         console.log(`${this.name} is breathing`)
//     }
// }

// // first mixin

// const canRun = (base) =>
//     class extends base {
//         swim() {
//             console.log(`${this.name} is swimming of canRun`)
//         }
//     };

// // second mixin

// const canSwim = (base) =>
//     class extends base {
//         swim() {
//             console.log(`${this.name} is swimming of canSwim`)
//         }
//     };



// class athelete extends canSwim(canRun(person)) {
//     train() {
//         console.log(`${this.name} is training`)
//     }
// }

// const a = new athelete("Tanjiro");
// // a.run();
// a.swim();
// a.breathe();
// // a.train();

// ------------------------------------------------------------------------------------------------------------------

// POLYMORPHISM - Poly means many and morphism means forms

// class shape {
//     draw() {
//         console.log("drawing shape");
//     }
// }
// class circle extends shape {
//     draw() {
//         console.log("drawing circle");
//     }
// }
// class square extends shape {
//     draw() {
//         console.log("drawing square");
//     }
// }
// const shapes = [new square(), new circle()];                                   // Execution Flow
// shapes.forEach((obj) => {
//     obj.draw();
// })

// ------------------------------------------------------------------------------------------------------------------

// ENCAPSULATION

// class counter {
//   #count;                                        //private
//   constructor(start = 1) {
//     this.#count = start;
//   }
//   increment() {
//     this.#count++;
//   }
//   getcount() {
//     console.log(this.#count, this);
//   }
//   obj() {
//     return this;
//   }
// }
// const c = new counter(7);
// c.increment();
// c.getcount();
// console.log(c.#count);

// ------------------------------------------------------------------------------------------------------------------

// EXAMPLE - BANK ACCOUNT

// class bankAccount {
//   #balance;                                                                //private
//   constructor(accountholder, initialbalance) {
//     this.accountholder = accountholder;
//     this.#balance = initialbalance;
//   }
//   #isValidAmount(amount) {
//     return amount > 0;
//   }
//   getbalance() {
//     return this.#balance;
//   }
//   deposite(amount) {
//     if (this.#isValidAmount(amount)) {
//       this.#balance += amount;
//       console.log("amount deposited");
//     } else {
//       console.log("invalid deposite");
//     }
//   }

//   withdraw(amount) {
//     if (this.#isValidAmount(amount) && amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log("amount withdrawel");
//     } else {
//       console.log("insuficiant balance");
//     }
//   }
// }

// const p1 = new bankAccount("harman", 1000);
// console.log(p1.getbalance());
// p1.deposite(-1000);
// console.log(p1.getbalance());
// p1.withdraw(500);
// console.log(p1.getbalance());
// const p2 = new bankAccount("harshita", 10000);
// console.log(p2.getbalance());
// p2.withdraw();
// console.log(p2.getbalance());
// console.log(p1.getbalance());

// ------------------------------------------------------------------------------------------------------------------

// GETTER SETTER

// class user {
//     constructor(name) {
//         this.naam = name;
//     }

//     // getter                                                    // value lene ka controlled tareeka
//     get name() {
//         console.log("Running")
//         return this.naam;
//     }

//     // setter                                                    // value update karne ka controlled tareeka
//     set name(newName) {
//         console.log("Run setter")
//         this.naam = newName;
//     }
// }

// const n = new user("Ryuk");

// console.log(n.name);

// n.name = "Zoro";         // setter initialization
// console.log(n.name);    // getter initialization