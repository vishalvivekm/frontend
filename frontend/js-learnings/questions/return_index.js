// a function receiving an array, return index of first 3 ( if exists), otherwise return -1

function three(arr) {
    //write your code here
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 3) {
        return i
    }
}
    return -1
}
// console.log(three([ 1, 2, 4 ]))




// return arr.indexOf(3)
// return arr.fineIndex(ele => ele === 3);

/* for ( let index in arr ) {
if (arr[index] === 3) { return index;}
return -1 ;
}
*/



/* for ( const [index, item] of arr.entries()) {
if ( item === 3 ) {
    return index;
}
}
return -1;
}*/


// entries()