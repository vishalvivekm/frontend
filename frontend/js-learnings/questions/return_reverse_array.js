
// ways to do it:

function reverse(arr) {
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
