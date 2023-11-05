// pending: either rejected or fullfilled
// inside the contructor we're passing a function to which we are again passing two args, res and rej which
// are again functions

// consume/use promises
// const promise = new Promise((resolve, reject) => {
//     // resolve([1,3,3])
//     reject("there was an error");
// })
// console.log(promise);
// promise.then((data) => console.log(data)).catch((err) => console.log(err))


const value = 2

const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 3)
    console.log(random)
    random == value ? resolve('you guessed correctly') : reject('wrong number');
})

console.log(promise)

promise.then((result) => console.log(result)).catch((err) => console.log(err));