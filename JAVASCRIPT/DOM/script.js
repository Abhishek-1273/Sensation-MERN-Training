// DOM - Document Object Model

// let text = document.getElementById("text");
// let btn =  document.getElementById("btn");

// console.log(text);
// console.log(btn);

// btn.addEventListener("click", function(){
//     text.textContent = "Button Clicked....";
//     text.style.color = "grey";
// });


// ----------------------------------------------------------------------------------------------------------------------------------------------

// STYLE CSS IN DOM

// let text = document.getElementById("text");
// let btn =  document.getElementById("btn");

// btn.addEventListener("click", function(){
//     text.style.color = "white"
//     text.innerText = text.innerText === "Inactive" ?  "Active" : "Inactive";
//     text.style.backgroundColor = text.innerText === "Inactive" ? "Red" : "Green";
//     text.classList.toggle("active");
// });

// ----------------------------------------------------------------------------------------------------------------------------------------------

// REMOVE ELEMENT

// let list = document.getElementById("list");
// let btn = document.getElementById("removeElement");

// btn.addEventListener("click", () => {
//     const lastele = list.lastElementChild;
//     lastele.remove();
//     btn.disabled = true;                                // jugaad
// });

// ----------------------------------------------------------------------------------------------------------------------------------------------

// QUERY SELECTOR   

// let list = document.querySelector("#list");
// let btn = document.querySelector("#removeElement");

// btn.addEventListener("click", () => {
//     const lastele = list.lastElementChild;
//     lastele.remove();
//     // btn.disabled = true;                              
// });

// ----------------------------------------------------------------------------------------------------------------------------------------------

// CREATE ELEMENT

// let root = document.getElementById("root");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     const h1 = document.createElement("h1");
//     h1.innerText = "Created by Ryuzaki";
//     root.append(h1);
// })



