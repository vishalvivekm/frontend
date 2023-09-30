// Programmers mostly use promises in cases when executing a function takes some time.

// const myFriendHasApprovedMyPosition = true;
//
// let promise = new Promise(function(resolve, reject) {
//     if (myFriendHasApprovedMyPosition){
//         resolve("Hooray! Now I'm a true programmer!");
//     } else {
//         reject(new Error("Whoops! Have to study more =("));
//     }
// });

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("I have completed"), 5000);
// });

// 1. Create a Promise to fetch the water
let promise = new Promise(function(resolve, reject) {
    // Pretend a delay of 2 sec to fetch it!
    setTimeout(function() {
        // Fetched the water. Let's resolve the promise
        resolve('Hurray! Fetched the Water.');
    }, 2000);
});

// 2. Function to Set up the handler to handle a promise result.
// It is to inform the grandparents when the result is available.
const grandParentsCooking = () => {
    // The handler function to handle the resolved promise
    promise.then(function(result) {
        // Fetched the water. Now grandparents can start the cooking
        console.log(`cooking rice with the ${result}`);
    });
}

// 3. Calling the function to activate the set up.
grandParentsCooking();
setTimeout(function print() { console.log(promise.status) }, 6000); // status of promise seems to be no accessible from code, we'll see