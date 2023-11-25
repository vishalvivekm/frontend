let person = {
    firstName: "Vivek",
    lastName: "Vishal",
    greeting() {
        console.log("Hey, ", this.firstName)
    }, // shortened way of writing function as property
    printFullName() {
        return this.firstName + " " + this.lastName
    },
// fullName: this.firstName + " " + this.lastName // this will say undefined undefined see *
}
person.greeting()
console.log(person.printFullName())
// console.log(person.fullName)


// When used in an object method, this refers to the object.
// 
// In the example on top of this page, this refers to the person object.

/*
* let user { ... } is the moment of instantiation
So if you try to instantiate at the same time
firstName: "Elliot",
lastName: "Alderson",
fullName: firstName + " " + lastName
and then
console.log(user.fullname)
it will result in an 'not defined' error.
You can see it more clearly using
fullName: this.firstName + " " + this.lastName
console.log(fullName)
which will result in undefined undefined
The function ( printFullName and greeting ) when being called however has access to the already instantiated object
*
*
* */

// https://www.w3schools.com/JS/js_this.asp