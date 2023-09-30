1. commonJS.js
 - CommonJS is a system for organizing JS code. The require() function needs a module name or a path in it.
 - in CommonJS module, we import a module via the require() function (belongs only to CommonJS modules).
> A module imported via import - is an ECMAScript module. 
> We have to use only one module type.
<hr>
2. dogBark.js

- To export a function, a class, an object, a string, a number, an array, or a boolean from the module, use `module.exports`
- in CommonJS module .js extension is optional
- [Good Practice] - name the module same as the file or class name in it.

```
// Functions
module.exports = function divider(x, y) {
	return Math.ceil(x / y);
};

// Objs
module.exports = {
	name: 'Vivek',
	position: 'Space engineer',
};

// Strings and Numbers
module.exports = 'Hi';
module.exports = 4;

// Exporting existing class
class Student { name='VivekVishal' };
module.exports = new Student();
```
<hr>

CommonJS modules can have different file extensions:
- .js is a JavaScript file;
- .cjs is a JavaScript module file;
- .json is a JavaScript Object Notation file;
- .mjs is an ECMAScript module file.
> here first three extensions can be imported with require() and can be
> used like always in CommonJS, the fourth however( .mjs) is an ecmascript module 
> and would be imported other ways

``` 
// index.js
const parrot = require('./parrot.cjs');
const cat = require('./cat.json');
const tiger = require('./tiger.js');

console.log([
parrot,
cat,
tiger
]);

$ node index.js

# Output:

# [
#   { name: 'Garry', color: 'green', age: 2 },
#   { name: 'Jason', color: 'peach', age: 10 },
#   { name: 'David', color: 'orange', age: 15 }
# ]
```

// when using a package manager like `npm` can choose type of module ( any one only )
```

{
  "name": "commonjs-modules-practice",
  "version": "1.0.0",
  "main": "index.js",
  "type": "commonjs", /*the other type is "module", it will be ECMAScript.*/
  "scripts": {
    "test": "node index.js"
  }
}
```

Caution: While installing npm packages. 
If the project is based on CommonJS modules, be sure that the package downloaded can be imported as a CommonJS module via the require() function.

 ### Module object

- inside module, module object information(a filename, a path, parent modules, child modules, a module ID (fully resolved path in most cases), and a module path.) can be accessed.

```
// parrot.cjs

module.exports = {
	name: 'Garry',
	color: 'green',
	age: 2
}

console.log(module.parent); // returns parent module that uses current module
console.log(module.children); // returns current module child modules (empty array in this case)
console.log(module.filename); // returns current module filename
console.log(module.path); // returns current file path without the filename

```
> Shortcut
> module.exports.studentName = 'Ben' will return an object { studentName: 'Ben' }.
<details>
<summary> Recap </summary>

1. Modules can be imported and exported.
2. CommonJS has three main file extensions: .js, .cjs, and .json. 
3. A parent module can't be accessed from a child module (except for the module object data). However, you can access the module object and information about the current module, its children, and its parents.
4. Modules have to be reusable and encapsulated. Use modules to organize and structure code, Quite easy!

module.parent - returns parent module that uses current module
module.children - returns child modules of the current module (empty array in this case)
module.filename - returns current module filename
module.path - returns current file path without the filename

</details>

<details>
<summary> Questions</summary>

1. How to export a module which contains the following object?

{ <br>
age: 15 <br>
};
> answer -  module.exports.age = 15;

</details>