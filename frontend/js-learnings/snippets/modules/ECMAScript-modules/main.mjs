import sayHi, { printName } from './library.mjs'

const name = `John Doe`;
sayHi();
printName(name);

// was getting error: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

// I changed .js to /mjs in both files, main and library and it worked well.

// To import the entire module using the * symbol.
// import * as myLib from './library.js';

// rename an imported function using the as keyword.

// // main.js
// import { myBestFunction as myFunction } from './lib
// myBestFunction();

// default keyword // only one default export in a file

// We use modules for classes, constants, and so on.
// A module is a single file with independent code that can be downloaded from another file.
// We write the export keyword before the function name
// when it is created and write the import keyword when we import it to another file.