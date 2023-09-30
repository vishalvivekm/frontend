// examples of printing type of objects ( typeof operator ) 

```const items = ["an apple", 631, 9.3];
items.forEach(e => console.log(typeof e));

console.log(typeof("an apple"));
console.log(typeof(631));
console.log(typeof(9.3));

console.log(`
${typeof "an apple"}
${typeof 631}
${typeof 9.3}
`);

const printType = x => console.log(typeof x);
printType("an apple");
printType(631);
printType(9.3);
```
