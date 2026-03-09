// STRING

// console.log(`hello ${str}`);
// console.log("hello", str);
// console.log(typeof str);

// const str = "Abhishek";

// console.log(str[0]);
// console.log(str.charAt(5));
// console.log(str.charCodeAt(0));  // Give a UTR-8 value

// -----------------------------------------------------------------------------------

// EXTRACTING

// console.log(str.slice(2));
// console.log(str.slice(2, 5));
// console.log(str.slice(-5));
// console.log(str.slice(-5, -2));

// console.log(str.substring(4, 8))
// console.log(str.substring(8, 4))
// console.log(str.substring(-2, 4))

// -----------------------------------------------------------------------------------

// SEARCHING

// const a = "Attack on Titan";

// console.log(a.includes("Attack"));  // case-sensitive

// const mail = "example@gmail.com";

// const isValid = mail.includes("@");

// if(isValid){
//     console.log("valid");
// } else {
//     console.log("invalid");
// }

// -----------------------------------------------------------------------------------

// INDEX OF 

// console.log(a.indexOf("on"));
// console.log(a.lastIndexOf("a"));

// -----------------------------------------------------------------------------------

// REPLACE

// const anime = "Dragon Ball Z Ball"

// console.log(anime.replace("a", "o"))
// console.log(anime.replaceAll("Ball", "Super"))

// -----------------------------------------------------------------------------------

// SPLIT AND JOIN

// console.log(anime.split(""))
// console.log(anime.split(" ").reverse().join("-"))


// console.log(str.split("").reverse().join(""))  // Name reverse 

// console.log(String.prototype);
// console.log(Object.getOwnPropertyNames(String.prototype));

// -----------------------------------------------------------------------------------

// CREATING METHOD TO REVERSE STRING

// const name = "abhishek"

// String.prototype.reverseStr = function () {
//     return this.split("").reverse().join("");
// }

// console.log(name.reverseStr())
// console.log(Object.getOwnPropertyNames(String.prototype))

// -----------------------------------------------------------------------------------

// CREATING METHOD TO CONVERT THE FIRST LETTER TO UPPERCASE

// String.prototype.title = function () {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }

// console.log(name.title());

