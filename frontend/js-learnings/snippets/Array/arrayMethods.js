const items = [
{ name: 'Bike', price: 100},
{ name: 'TV', price: 200},
{ name: 'Album', price: 10},
{ name: 'Book', price: 5},
{ name: 'Phone', price: 500},
{ name: 'Computer', price: 1000},
{ name: 'Keyboard', price: 25}
];

// filter() method: returns a new array, doesn't modify original one
const filteredItems = items.filter((item) => {
 return item.price <= 100; // a condition to filter out
});

console.log(items);
console.log(filteredItems);

// map(),to get a all the names 
const itemNames = items.map((item) => {
return item.name
})
console.log(itemNames);
 
const foundItem = items.find((item) => {
 return item.name === 'Book'
})

console.log(foundItem);

items.forEach((item) => {
console.log(item)
});

// some(), if for even one time the condition is true, the entire thing returns true, opposite method: every(), returns true if condition comes out to be true everytime
const hasInexpensiveItems  = items.some((item) => {
return item.price <= 100
});
console.log(hasInexpensiveItems);

 /* console.log(items.some((item) => {
return item.price <= 0
}));*/ // false, cuz nothing in the array returns true for the condition.

 
const total = items.reduce((currentTotal, item) => {
 return item.price + currentTotal
}, 0)

console.log(total);




// includes()

const items1 = [1,2,3,4,5];

const includesTwo = items1.includes(2)

console.log(includesTwo);


