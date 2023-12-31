// const fairytale = {
//     title: "Snow White and the Seven Dwarfs"
// };
//
// const details = Object.create(fairytale);
// details.mainCharacter = "princess";
// details.place = "castle";
//
// details.opening = function() {
//     console.log(`In "${this.title}", there was a ${this.mainCharacter} living in a ${this.place}.`);
// };
//
// const snowWhite = {
//     __proto__: details,
//     name: "Snow White",
//     enemy: "The Evil Queen",
//     place: "forest",
//
//     keyInfo() {
//         console.log(`${this.name} was forced to escape into a ${this.place} by ${this.enemy}.`);
//     }
// };
//
// snowWhite.keyInfo(); // Snow White was forced to escape into a forest by The Evil Queen.
// console.log(details)

// What's wrong in this code to give output: Name: Jane Smith, Age: 25, Major: Computer Science

/*
*const person = {
  name: 'Jane Smith',
  age: 25,
};

const student = Object.create(person) {
  major: 'Computer Science',
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
  }
};

student.getDetails();
* */

const person = {
    name: 'Jane Smith',
    age: 25,
};

const student = {
    __proto__: person,
    major: 'Computer Science',
        getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
    }
};

student.getDetails();
// or,
const student1 = Object.create(person)
student1.major = "Computer Science"
student1.getDetails = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
}
student1.getDetails()


const student2 = Object.assign(person, {
    major: 'Computer Science',
    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
    }
}); // this one is going to modify and add the properies of parent prototype object , person too, to avoid that do this:
// object.assign({}, person, {
// major: 'Computer Science'
// ..
// }
//};
// here {}, an empty object acts as an target and parent and the third {} act as source

student2.getDetails();
console.log(person) // {
// name: 'Jane Smith',
//     age: 25,
//     major: 'Computer Science',
//     getDetails: [Function: getDetails]
// }


// Object.assign(target, source1, source2, /* …, */ sourceN)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
