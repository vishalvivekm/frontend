// pending: either rejected or fullfilled
// inside the contructor we're passing a function to which we are again passing two args, res and rej which
// are again functions
const promise = new Promise((res, rej) => {
//res("Hi I'm the value");
rej(new Error("errror"))
})

console.log(promise);