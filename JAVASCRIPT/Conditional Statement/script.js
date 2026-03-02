// FALSEY VALUES:
// false, 0, -0, "", null, undefined, NaN

// TRUTHY VALUES:
// true, 1, -1, " ", "0", "false", [], {}, function(){}

// -----------------------------------------------------------------------------

// if (0) {
//     console.log("truth")
// }
// else {
//     console.log("false")
// }

// if (" ") {
//     console.log("truth")
// }
// else {
//     console.log("false")
// }

// if ([]) {
//     console.log("truthy");
// } else {
//     console.log("falsy");
// }

// -----------------------------------------------------------------------------

// console.log([] == false);
// console.log([] === false);

// -----------------------------------------------------------------------------

// IF ELSE STATEMENT

// let age = 19;
// if (age >= 18) {
//     console.log("proceed");
// } else {
//     console.log("chota bacha")
// }

// -----------------------------------------------------------------------------

// MARKS 

// let  marks = 32;
// if (marks >= 90){
//     console.log("GRADE A")
// }
// else if(marks < 90 && marks >= 75){
//     console.log("GRADE B")
// }
// else if(marks < 75 && marks >= 60){
//     console.log("GRADE C")
// }
// else if(marks < 60 && marks >= 50){
//     console.log("GRADE D")
// }
// else if(marks < 50 && marks >= 33){
//     console.log("GRADE E")
// } else {
//     console.log("FAIL")
// }

// -----------------------------------------------------------------------------

// TRAFFIC LIGHT WITH IF ELSE STATEMENT

// const light = "red";

// if (light === "red") {
//     console.log("STOP");
// } else if (light === "yellow") {
//     console.log("READY TO GO")
// } else if(light === "green"){
//     console.log("GO");
// } else {
//     console.log("INVALID LIGHT")
// }

// -----------------------------------------------------------------------------

// SWITCH STATEMENT

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// -----------------------------------------------------------------------------

// DAY

// let day = 4;
// switch (day){
//     case 1:
//         console.log("SUNDAY");
//         break;
//     case 2:
//         console.log("MONDAY");
//         break;
//     case 3:
//         console.log("TUESDAY");
//         break;
//     case 4:
//         console.log("WEDNESDAY");
//         break;
//     case 5:
//         console.log("THURSDAY");
//         break;
//     case 6:
//         console.log("FRIDAY");
//         break;
//     case 7:
//         console.log("SATURDAY");
//         break;
//     default:
//         console.log("Ye konsa day hai bhai!!!")
// }

// -----------------------------------------------------------------------------

// TRAFFIC LIGHT WITH SWITCH STATEMENT

// let light = "red";
// switch(light){
//     case "red":
//         console.log("STOP")
//         break;
//     case "yellow":
//         console.log("READY TO GO")
//         break;
//     case "green":
//         console.log("GO")
//         break;
//     default:
//         console.log("INVALID LIGHT")
// }

// -----------------------------------------------------------------------------

// DICE

// let dice = Math.floor(Math.random() * 6) + 1

// switch(dice){
//     case 1:
//         console.log(`You got ${dice}`);
//         break;
//     case 2:
//         console.log(`You got ${dice}`);
//         break;
//     case 3:
//         console.log(`You got ${dice}`);
//         break;
//     case 4:
//         console.log(`You got ${dice}`);
//         break;
//     case 5:
//         console.log(`You got ${dice}`);
//         break;
//     case 6:
//         console.log(`You got ${dice}`);
//         break;
//     default:
//         console.log("Error")
// }

// -----------------------------------------------------------------------------

// TERNARY OPERATOR

// CONDITION ? (TRUE): (FALSE)

// const isAdult = 55;
// console.log(isAdult>=18 ? ("can drive"): ("can't drive"));
// isAdult>=18 ? console.log("can drive"): console.log("can't drive");