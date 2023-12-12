const salary = 25000;

function getSalary(expenses) {
    let remainingSalary = expenses.reduce((salary, expense) =>{

        return salary - expense;
    }, salary);
    console.log(remainingSalary);
}
getSalary([1000, 1050])

function calculateExp(numbers){
    let result = numbers.reduceRight((x,y) => y**x)
    console.log(result);

}
calculateExp([2,1,2])
calculateExp([2,2,1])


/*
* guess the output:
* let array = [1,4,7];
*
* let division1 = array.reduce((num1, num2) => {
* return num1/num2;
* }); 1/4/7
*
* let division2 = numbers.reduceRight((num1, num2) => {
    return num1 / num2;
}); 7/4/1
*
* let numbers = [2, 4, 8];

let answer = numbers.reduceRight((x, y) => x / y, 1); x = intialvalue =1, and num2 starts from numbers[0]

console.log(answer); // 1/8/4/2 i.e. 1/64
* */

//reduceRight() - reduces the array from right to left
// reduce() - reduces the array from left to right

// empty array can't be reduced, - typeError
// let arr = [];
//
// let sum = arr.reduce(function(x, y) {
//     return x + y;
// });

/*
* let numbers = [200, 500, 900];

let difference = numbers.reduce(
  (accumulator, currentValue) => accumulator - currentValue
);

console.log(difference); // 200-500-900
* the accumulator starts with the first value of the array (In this case it is a positive value and the current values in each iteration will be subtracted).
*
*
let languages = ["cpp", "javascript", "python", "kotlin"];

let langLength = languages.reduce(function(first, second) {
  return first + second.length;
}, 0);

console.log(langLength); // guess?
*
*
*/