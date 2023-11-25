// input: [ 'red', 'green', 'blue' ]
// output:
// RED
// GREEN
// BLUE

function upCase(str) {
    console.log(str.toUpperCase());
}
function yourFunction(arr) {
    arr.forEach((item, index) => {
        upCase(arr[index]);
    })
}

// function upCase(str) {
//     console.log(str.toUpperCase());
// }
// function yourFunction(arr) {
//     arr.forEach(upCase);
// }
