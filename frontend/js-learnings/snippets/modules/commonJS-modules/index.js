// // parrot.cjs
//
// module.exports = {
//     name: 'Garry',
//     color: 'green',
//     age: 2
// }
//
// console.log(module.parent); // returns parent module that uses current module
// console.log(module.children); // returns current module child modules (empty array in this case)
// console.log(module.filename); // returns current module filename
// console.log(module.path); // returns current file path without the filename
//
const cat = require('./Owl/cat');
console.log(cat);