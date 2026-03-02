// DIFFERENT TYPES OF ERRORS

// ReferenceError
// console.log(userName); 

// TypeError
// let num = 10;
// num.toUpperCase();

// SyntaxError
// if (true {
//   console.log("Hi");
// }

// --------------------------------------------------------------------------------------------------------------------

// HANDLING ERROR

// RUN-TIME ERROR - handle with try-catch-finally

// try {
//     const n= 10;
//     console.log(n.toUpperCase());                   // Type Error
// } 
// catch (error){
//     console.log(error.name, "- Please enter a valid string!!")
// }
// finally {
//     console.log("THANK YOU")
// }


// try {
//   console.log(username);
// } catch (error) {
//   console.log(error.name, "- Something went wrong");    // ReferenceError
// }
// finally {
//     console.log("THANK YOU")
// }


// COMPILE-TIME ERROR - not handle with try-catch-finally

// try {
//   if (true {
//   console.log("Hi");                 // SyntaxError
// }
// } catch (error) {
//   console.log(error.name, "- Something went wrong");    
// }
// finally {
//     console.log("THANK YOU")
// }

// --------------------------------------------------------------------------------------------------------------------

// THROW

// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("Underage not allowed to drive");
//     }
//     return "Adult allowed to drive";
// }

// try {
//     console.log(checkAge(17));
// } catch (error) {
//     console.log(error.message);
// }