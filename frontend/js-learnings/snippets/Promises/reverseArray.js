// // pending: either rejected or fullfilled
// // inside the contructor we're passing a function to which we are again passing two args, res and rej which
// // are again functions
// const promise = new Promise((res, rej) => {
// //res("Hi I'm the value");
// rej(new Error("errror"))
// })
//
// console.log(promise);

// function upCase(str) {
//     console.log(str.toUpperCase());
// }
// function yourFunction(arr) {
//     //write your code here
//     const str = [ 'red', 'green', 'blue' ];
//     str.forEach((item, index, str)=>{
//         upCase(str[index])
//     })
// }
// yourFunction()

// function upCase(str) {
//     console.log(str.toUpperCase());
// }
// function yourFunction(arr) {
//     //write your code here
//     arr.forEach((item, index, arr)=>{
//         upCase(arr[index])
//     })
// }
// yourFunction([ 'red', 'green', 'blue' ])
// console.log("-------")
//
//
// const array = ["str",, "vivek",,]
//
// console.log("---------   for... in   ----")
// for (let i in array) {
//     console.log(array[i]);
// }
// console.log("--------- simple loop ----")
// for ( let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// console.log("---------  forEach  ----")
// array.forEach((element)=>{
//     console.log(element)
// })
// console.log("---------  for..of  ----")
//
// for(item of array) {
//     console.log(item)
// }
//
// // let myarray = [];
// // myarray[1] = 'Hello';
// // myarray[4] = 'World';
// //
// // myarray.forEach(function (item) {
// //     console.log(item);
// // });
// // output: hello world
// //
//
// //

function reverse(arr) {
    //write your code here
    let reversedArr = []
    // reversedArr = arr.forEach((e, index, reversedArr)=>{
    //     reversedArr.unshift(e)
    // })
    // forEach returns undefined, this is silly to assign forEach to the reversedArr here

    arr.forEach((e)=>{
        reversedArr.unshift(e)
    })
    return reversedArr
}
console.log(reverse([1,3,4,5]))


function reversed(...arr) {
    return arr.reverse()
}
console.log(reversed(1,2,3,5))