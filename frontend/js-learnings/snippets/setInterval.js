// const intervalId = setInterval(() => console.log("Hi, There!"), 3000);
// clearInterval(intervalId); // clear interval, same is done to clear Time out too
// diff between setTimeout and setInterval:
// setTimeout method allows to launch the function once while setInterval allows doing it several times.

//What will be the output of the following code snippet?

console.log(5);

function printOne() {
    console.log(1);
}

console.log(9);

function printFour() {
    console.log(4);
}

setTimeout(printSix, 3000)
setTimeout(printOne, 0)
setTimeout(printFour, 0)
setTimeout(printSeven, 2000)

function printSix() {
    console.log(6);
}

function printSeven() {
    console.log(7);
}
///console.log("xxx") // https://hyperskill.org/learn/step/9688#comment

// for (let number = 5; number < 9; number++) {
//     setTimeout(() => console.log(number), 1);
// }  // what would be the output

