
// what will be the result value of the following promise:

const a = 25;
const b = 13;
const c = 37;

// new Promise(function(resolve, reject) {
//     const value = a + b - c;
//     if (value > 0) {
//         resolve(value);
//     } else {
//         reject(-value);
//     }
//     console.log(2); // the code is executed but it is not what the promise actually return.
// });

// output: 2
// result value will be : value in executed resolve(value), i.e. 1
// give the result of the promise, not the output of the program.

// resolve is called in case of success, reject is called in case of failure

// What is a promise in js : An object that allows getting the function value later
// you create new Object using new Operator ( Remember what type of entity we create with keyword 'new')
// new Promise()
// new Array()
// new Car()

// Declare a promise named checkingText that resolves "Your text is correct" in case of success.

// soln:
const isCorrectText = false;
// write your function here
const checkingText = new Promise(function (resolve, reject) {
    isCorrectText ? resolve("Your text is correct") : reject(new Error("Your text is not correct"));
});
function knowTheResult() {
    checkingText.then(
        function(result) {
            console.log(`The result is: ${result}`)
            return result;
        },
        function (error) {
            console.log("error")
        return error;
        }
    );
}
knowTheResult();