// PROMISE -> True

// const getUserData = new Promise((resolve, reject) => {
//     console.log("Promise Started")

//     setTimeout(() => {
//         const serverUp = true;
//         if (serverUp) {
//             resolve("Server got the data");
//         } else {
//             reject("Server is not responding")
//         }
//     }, 3000)
// });

// console.log(getUserData);

// TRADITIONAL WAY

// getUserData
//     .then((res) => console.log(res, "-> then"))
//     .catch((err) => console.log(err, "-> catch"));

// -------------------------------------------------------------------------------------------------------------------------------

// PROMISE -> False 

// const getUserData = new Promise((resolve, reject) => {
//     console.log("Promise Started");

//     setTimeout(() => {
//         const serverUp = false;
//         if (serverUp) {
//             resolve("Server got the data");
//         } else {
//             reject("Server is not responding");
//         }
//     }, 3000)
// })

// console.log(getUserData);

// getUserData
//     .then((res) => console.log(res, "-> then"))
//     .catch((rej) => console.log(rej, "-> catch"))

// -------------------------------------------------------------------------------------------------------------------------------

// MODERN WAY

// const getUser = async () => {                             // iss function ke andar asynchronous kaam hoga
//     try {
//         const result = await getUserData;
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
// getUser();

// -------------------------------------------------------------------------------------------------------------------------------

// API CALL -> fetch - data fetch krne k liye

// async function getCars() {
//     try {
//         const res = await fetch("https://myfakeapi.com/api/cars/");
//         const data = await res.json();
//         console.log(data, "test")
//     } catch (e) {
//         console.log(e.message)
//     }
// }

// getCars();

// -------------------------------------------------------------------------------------------------------------------------------

// QUESTIONS

// const getUserDetails = new Promise((resolve, reject) => {

//     const users = [
//         { userId: 1, name: "Luffy", email: "luffy@gmail.com"}, 
//         { userId: 2, name: "Zoro", email: "zoro@gmail.com"}, 
//         { userId: 3, name: "Sanji", email: "sanji@gmail.com"}
//     ]
//     if (users) {
//         resolve(users.map((user) => {
//             return user.name;
//         }))

//         // resolve(users);
//     } else {
//         reject("Something went wrong")
//     }
// })

// const getUser = async () => {
//     try {
//         const res = await getUserDetails;
//         console.log()
//     } catch (e) {
//         console.log(e.message)
//     }
// }

// getUser();