const array1 = ['a', 'b', 'c'];
array1.Stringproperty = "a";

for (const element of array1) {
  console.log(element);
}

console.log(array1);

    

/* array1.Stringproperty = "a";: This line adds a property named Stringproperty to the array1 object. However, it's important to note that arrays in JavaScript are also objects, and you can add properties to them just like any other object.

    for (const element of array1) { console.log(element); }: This is a for...of structure that iterates over the elements of array1. It prints each element to the console.

    console.log(array1);: This prints the entire array1 object to the console.

Now, the interesting part is that even though Stringproperty was added to array1, it won't be included in the iteration by the for...of loop.
This loop only iterates over the numeric indices of the array, not over additional properties.

When you run the code, you will see the elements 'a', 'b', 'c' printed by the loop, and the console.log(array1); statement will output the array as expected. However, the Stringproperty won't be part of the iteration; it's a property attached to the array object but not considered as a regular array element.
*/

for (let i in array1) {
  console.log(i, array1[i]); 
}

/*
for in doesn't ignore non-numeric properties
and will print stringProperty too here, but this structure is avoided to iterate through arrays.
*/


// which ones print undefined element too

function upCase(str) {
    console.log(str.toUpperCase());
}
function yourFunction(arr) {

    arr.forEach((item, index, arr)=>{
        upCase(arr[index])
    })
}
yourFunction([ 'red', 'green', 'blue' ])
console.log("-------")


const array = ["str",, "vivek",,]

console.log("---------   for... in   ----")
for (let i in array) {
    console.log(array[i]);
}
console.log("--------- simple loop ----")
for ( let i = 0; i < array.length; i++) {
    console.log(array[i])
}
console.log("---------  forEach  ----")
array.forEach((element)=>{
    console.log(element)
})
console.log("---------  for..of  ----")

for(item of array) {
    console.log(item)
}

// let myarray = [];
// myarray[1] = 'Hello';
// myarray[4] = 'World';
//
// myarray.forEach(function (item) {
//     console.log(item);
// });
// output: hello world
//

// 
