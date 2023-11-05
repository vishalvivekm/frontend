// const people = [
//     {
//         name: "Alex",
//         age: 21,
//         position: "student"
//     },
//     {
//         name: "Bob",
//         age: 18,
//         position: "designer"
//     },
//     {
//         name: "anna",
//         age: 30,
//         position: "the boss"
//     },
//     {
//         name: "John",
//         age: 49,
//         position: "intern"
//     }
// ];
// // returns a new array
// // doesn't change the size of original array ( unlike filter)
// // uses values from original array when making new one
//
// const ages = people.map((person) => {
//     console.log(person);
// })


const people = [
    {
        name: "Alex",
        age: 21,
        position: "student"
    },
    {
        name: "Bob",
        age: 18,
        position: "designer"
    },
    {
        name: "anna",
        age: 30,
        position: "the boss"
    },
    {
        name: "John",
        age: 49,
        position: "intern"
    }
];
// returns a new array
// doesn't change the size of original array ( unlike filter)
// uses values from original array when making new one
// map used to iterate through the js array's elements
// const ages = people.map((person) => {
//     console.log(person);
// return "hello world"
// })
// console.log(ages)

// .map(cb function)

// const ages = people.map((person) => person.age * 2);
const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
    return {
        firstName:item.name.toUpperCase(),
        oldAge:item.age +20
    }
});
console.log(newPeople);
// returns [ { firstName: 'ALEX', oldAge: 41 },
//   { firstName: 'BOB', oldAge: 38 },
//   { firstName: 'ANNA', oldAge: 50 },
//   { firstName: 'JOHN', oldAge: 69 } ] // so map function always returns a new array

const names = people.map((person) => `<h2>${person.name}</h2`);
// .innerHTML = names.join('');