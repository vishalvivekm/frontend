everything to the right of the equals sign is evaluated first
var sum = 3+3;

1. write variables names in JavaScript in camelCase
var  myFirstName;

2.  unlike var, when you use let, a variable with the same name can only be declared once.
3. const : read only
variable assigned using const are constant value which cant
be reassigned or redeclared
let can be reassigned but not redeclared.
var can be reassigned and redeclared.

4. Devs use uppercase variable identifiers - immutable values lowercase/camelCase - mutable values (objects and arrays)

5.  The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.

6. Escaping Literal Quotes in Strings
in java script there's this fact that i am just doing random bullshit
Escape character \ backslash
in Js a string can be enclosed in either double quotes or single quotes. but the quotes type must be the same at the beginning and end

+ using as concatenation operator
+ = in the end
appending variables to a string :-
length of String value by writing 
stringName.length
starting counting at 0 - zero-bases indexing
String are immutable in JS. means they cant be altered once created. 
// let myStr = "Bob"; and then myStr[0] = "J"; isnt allowed
immutability doesn't mean the myStr couldnt be re-assigned.
// let myStr = "Bob"; and then myStr = "Job"; is allowed and assignes myStr with a new value "Job"
getting Nth character of String using [N-1] 
let myStr = "Hello"; myStr[0] is H and myStr[myStr.length-1] is o
Nth - to - Last character in a String = [StringName.length-N]

                            STARTING OUT with JS Arrays.
const myArray = ["Vivek Vishal", 2140124]; 1-D
const myArray = [["vivek",24],["adarsh", 25]]; 2-D arrays
Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const i,e,
const ourArray = [50, 40, 30];
ourArray[0] = 15;          // no spaces in arrayname and sq brcts
ourArray now has the value [15, 40, 30]. 

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], and element has the value 11 .

append data to end of array using push() function. >=1 parameters.
const myArray = [1,3,4, "Hello"];
myArray.push(5); // now myArray is [1,3,4,"Hello",5]
myArray.push( [ "Hi", 9]); // myArray is  [ 1, 3, 4, 'Hello', 5, [ 'Hi', 9 ] ]

.pop() removes last element from an array and returns that element . any type of entry can be popped off of an array be it strings, numbers, even nested arrays.
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myA
rray.pop();
console.log(myArray) // [ [ 'John', 23 ] ]

* shift method array.shift(); // removes the first
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift(); // "Stimpson
ourArray // ["J", ["cat"]]

* unshift method // add elements in front of the array works just like push except that it adds ele at the begining of array.
 const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // result array : ["J", "cat"]
ourArray.unshift("Happy"); //  ["Happy", "J", "cat"];

*function // reusable Entities
function functionName() {
  console.log("Hello World");
}
// function calling 
// parameters : are variables that act as placeholders for the values that are to be input to a function when it's called.
//The actual values that are input ( or "passed") into a function when it's called are known as arguments
// return statements : can be used to send a value back out of a function.
// Global scope and function
scope : refers to visibility of variables. ( variables outside fun block have global scope i.e, visible everywhere )
- variables w/o let or constant - automatically global scope ( always declare variables with let or const for avoiding unintended consequences)

Qn : Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
Solution : 
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;


}
*Local Scope and functions
Variables declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function

function myTest() {
  const loc = "foo"; // local variable
  console.log(loc);
}

myTest(); // prints foo
console.log(loc); // gives reference error as loc isnt defined outta function

// global vs local scope in function : when they are with same name, local variable takes precedence over the global precedence
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
here myFun will return the string Head cuz the local version variable is present

when a function with no return statement is called, the function processes the inner code but the returned values is undefined
// Assignment with a Returned Values
• everything to the right of the equal sign is resolved before the value is assigned * 
• 
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  item = arr.shift(); // first shifts ( removes frm start) the ele then assigns the value to the item
  return item;
  // Only change code above this line
}
// Setup
let testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//JSON.stringify to stringy JS objects and array

// boolean data types - true (on) and false (off) 
these can also be returned from the function
// 
• comparison with the Equality Operator 
== ( equality operator) not to be confused with assigmnt op =

== e.op returns true ) if equivalent values, otherwise false
Type Coercision :
1   ==  1  // true
1   ==  2  // false
1   == '1' // true // first converts one type to another then compares 
"3" ==  3  // true

=== ( Strict equality) , a counterpart of == but it doesnt do type conversion
3 ===  3  // true
3 === '3' // false // values being diff types are considered unequal , and === returns false

Summary : 
If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other

typeof operator ( to determine type of a variable or a value )
typeof 3   // returns the string "number"
typeof '3' // returns the string "string"

* Inequality operator ( opp to equality op == ) and performs type conversion before compararision for diff data type vaiables or values
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

!== ( the Strict inequality operator ) - logical opposite of the strict equality operator. ( doesn't convert data types)
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

greater than operator(>), greater than or equal to operator(>=) ,  less than operator (<),  less than or equal to operator (<=) // does the data conversion while comparing

logical and operator ( &&) - returns if all condns true
 the logical or operator (||) - returns true if any of the condsn true ( two pipe symbols)

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes"; 
// returns Yes only if num is b/w [ 5,10]
if ( num > 10 || num < 5) {
return "No"
}
return "Yes";
//order of logic :  Top to Bottom the function is executed : 
if () {
}
else if () {
}
else {
}
// swtich-case statement
case values are tested with strict equality ( ===). The break tells JS to stop executing statement. If the break is omitted, the next statement will be executed ( fall through) 
example 
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case 1:
   answer = "alpha";
   break;
  case 2:
   answer = "beta";
   break; 
  case 3:
   answer = "gamma";
   break;
  case 4:
   answer = "delta";
   break;
default :   // default statement should be the last case.
// statement
 break;
}


  // Only change code above this line
  return answer;
}

caseInSwitch(1);
// using switch statement when having multiple input with same output
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";     //
    break;
  case 4:
    result = "4 alone";
}

 // the chained if/else if statements can be changed into a switch statement. //
i.e, 
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
// returning boolean values from fucntions
equality operator returns true or falsse
so instead of doing
 function isEqual (a,b) {
if ( a===b) { return true; } else { return false;}
}
we can do like function isEqual {
return a ===b; // does the same
}
// when a return statement is reached the execution of current fun stops and control returns to calling function

Objects in javascript
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

properties can be numbers too like
5: "five",

we can omit quotes for single-word strings properties
const cat = {
  name" "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"]
};

However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

accessing property of object
1. dot notation
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

2. bracket notation []
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
this notation can also be used as dot one


const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"]; // USS Enterprise

property names with spaces must be in '" or ""

Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
The string Doberman would be displayed in the console.

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy coder"

Add New Properties to a JavaScript Object
You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";
or

ourDog["bark"] = "bow-wow";


Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
// Idea: Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

.hasOwnProperty() method
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false

Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.
ans: 
function checkObj(obj, checkProp) {

  return obj.hasOwnProperty(checkProp)? obj[checkProp]: "Not Found";
 
}
Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
  "artist": "Arijit Singh",
  title: "Love Songs",
  release_year: 2012,
  formats: [
    "CD",
    "DVD",
    "BlueRay"
  ]
}
];
// myMusic[1] =
// {
//   "artist": "Arijit Singh",
//   title: "Love Songs",
//   release_year: 2012,
//   formats: [
//     "CD",
//     "DVD",
//     "BlueRay"
//   ]
// }








## regex start:
1.  literal match  , .text() method ( limited to only one pattern)
finding Code in freeCodeCamp

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
The test method here returns true. ( not if testRegex has values code or CODE)

2. You can search for multiple patterns using the alternation or OR operator: |
3. Flags: appending to the regex
 /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

4. extract the actual match with .mathch() method
// syntax opposite of .test() method i.e.
'string'.match(/regex/);
/regex/.test('string'); // syntax of .match

"Hello, World!".match(/Hello/); // returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // returns ["expressions"]








