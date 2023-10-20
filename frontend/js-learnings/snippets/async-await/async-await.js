// async function myFunc() {
//     return "Hello, Async!";
// }
//
// console.log(myFunc()); // Promise { 'Hello, Async!' }
// myFunc()
//     .then(function (response) {
//         console.log(response);
// })
//     .catch(function (error) {
//         console.log("Error detected: ", error)
// })

// async function findUser(username) {
//     try {
//         const response = await fetch(
//             `https://jsonplaceholder.typicode.com/users/${username}`
//         );
//         const user = await response.json();
//         console.log(user);
//     } catch (error) {
//         console.log(`Failed to fetch user: ${error.message}`);
//     }
// }

async function fetchFunction() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error)
    }
}
fetchFunction();
