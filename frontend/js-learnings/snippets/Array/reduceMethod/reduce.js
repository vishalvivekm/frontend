// reduce() reduces the elements in an array to a single value by executing reducer functions on the element it contains

// let example = arr.reduce(callBack, initialValue);
//
// reduce(cb, initialvalue) :
// cb: mandatory arg,
// reduce( callback(accumulator, currentValue, CurrentIndex(Optional), array(optional), initialvalue)
/* if no initialvalue is given : the accumulator starts from array[0] and the callback starts from array[1]
   if an initialvalue is given, then the accumulator starts from initialvalue and execution starts with the array[0]
*
* */

const arr = [1,2,3,4,5];

const  addition= arr.reduce((sum, number)=> {
console.log(sum)
    // console.log(sum+number);
          return sum+number;
}, )
console.log(addition)

const avg = arr.reduce((sum, number, currentIndex, arr)=> {
   sum += number
   if ( currentIndex == arr.length-1) {
       return sum / arr.length;
   } else {
       return sum;
   }
})
// console.log(avg)

const  addition1= arr.reduce((sum, number)=> {
    return sum+number;
},20 );

// console.log(addition1); // expected 35
