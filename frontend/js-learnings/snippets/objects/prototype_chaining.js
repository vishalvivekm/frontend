const fairytale = {
    title: "Snow White and the Seven Dwarfs"
};

const details = Object.create(fairytale);
details.mainCharacter = "princess";
details.place = "castle";

details.opening = function() {
    console.log(`In "${this.title}", there was a ${this.mainCharacter} living in a ${this.place}.`);
};

const snowWhite = Object.create(details);
snowWhite.name = "Snow White";
snowWhite.enemy = "The Evil Queen";
snowWhite.place = "forest";

snowWhite.keyInfo = function() {
    console.log(`${this.name} was forced to escape into a ${this.place} by ${this.enemy}.`);
};

snowWhite.keyInfo(); // Snow White was forced to escape into a forest by The Evil Queen.


/*
*When one prototype object is set as the prototype of another prototype object, a hierarchical inheritance structure
* is also established across objects. In the following code, snowWhite inherits a property from details along with fairytale.
* Additionally, details also inherits values from fairytale. This results in a chain of prototype objects starting from
* the immediate prototypes and extending all the way up the chain.
* It's worth mentioning that prototyping built-in properties from Object.prototype are also involved in each step
* of the chain.
* */
/*
* question:
* why is the Object.create() a preferable choice over the __proto__ property when creating prototype objects?
ans: The __proto__ property, although widely supported, was not standardized until ECMAScript 6 and is considered a non-standard feature.
* With Object.create(), you can explicitly define the prototype object for the newly created object and have direct control over the prototype chain.
*
* prototyping is used to inherit properties and methods from other objects
*
*
* how can we establish a protoype relationship with a object? ans: using __proto__ property and Object.create()
*
* What is the ultimate parent object in JavaScript? : Object.prototype
* What is the prototype of Object.prototype?: null
* * */