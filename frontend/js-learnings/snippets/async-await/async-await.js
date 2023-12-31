// async and await keywords allow us to create asynchronous functions that always
// return a Promise, w/o having to explicitly create a new Promise and
// ending up with Promises chaining.

//"async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

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


// Theories and questions:
/*  1.purpose of the then method in async and await?: to access the resolved values of a promise 


*/

/*
async function evenOrOdd(number) {
  let promise = new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      setTimeout(() => resolve('The number is even'), 2000);
    } else {
      setTimeout(() => reject('The number is odd'), 2000);
    }
  });

  const result = await promise 
  console.log(result);
}
*/

// await keyword - It waits for a promise to resolve before moving on to the next line of code.
// async keyword can be used to convert a function to an asynchronous function which will return a promise object
// we can use await inside a function which has asynce keyword in its signature that is async function() ...