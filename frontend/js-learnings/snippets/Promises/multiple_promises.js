let condition1 = true;
let condition2 = false;

let promise1 = new Promise(function(resolve, reject) {
    if(condition1) {
        resolve('Promise1 resolved!');
    } else {
        reject('Error in promise1! Condition1 was not met.');
    }
});

let promise2 = new Promise(function(resolve, reject) {
    if(condition2) {
        resolve('Promise2 resolved!');
    } else {
        reject('Error in promise2! Condition2 was not met.');
    }
});

// Promise.all([promise1, promise2]).then(console.log("alert")).catch(console.log("alert")); // won't work in ide as alert is not defined here
Promise.all([promise1, promise2])
    .then(alert => console.log(alert))
    .catch(alert => console.log(alert));

/*
* Promise.all() will return an arr of resolve values if all promises resolved // [ 'Promise1 resolved!', 'Promise2 resolved!' ]
otherwise Promise.all() will return first rejection value
* */