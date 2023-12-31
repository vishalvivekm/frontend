// In JS, every object comes with default properties, all of which are inherited from a special object named Object.prototype
// Object.prototype: the top-level base object (the ultimate parent object for all other objects.)
/*
*  Prototyping is a useful mechanism in JavaScript for creating flexible and reusable object blueprints.
*  Prototypes act as base functions for multiple instance objects. Every JavaScript object has an ancestor object called Object.prototype.
*  Inheritance of properties can be achieved through the __proto__ property, or even better, using Object.create().
*  Properties can be manipulated by assigning new values to those properties within child objects. By setting one prototype object as the prototype of another,
*  we can construct prototype chains that create a hierarchical inheritance structure among objects.
* */
const fairytale = {
    title: "Snow White and the Seven Dwarfs"
};
const details = {
    __proto__: fairytale, // a special property that allows access to and setting of properties of the parent object(s), known as prototype properties.
    mainCharacter: "princess",
    place: "castle",
    opening() {
        console.log(`In "${this.title}", there was a ${this.mainCharacter} living in a ${this.place}.`);
    }
};

details.opening(); //In "Snow White and the Seven Dwarfs", there was a princess living in a castle.
// Object.creat()

const details1 = Object.create(fairytale) // pass prototype object's name (fairtytale here) as argument to Object.create() method
details1.mainCharacter = "princess";
details1.place = "castle";
details1.opening = function() {
    console.log(`In "${this.title}", there was a ${this.mainCharacter} living in a ${this.place}.`);
};

details1.opening(); //In "Snow White and the Seven Dwarfs", there was a princess living in a castle.
console.log(typeof details1)


// overriding value of prototype object's inherited property:

const snowWhite = Object.create(details);
snowWhite.name = "Snow White";
snowWhite.enemy = "The Evil Queen";
snowWhite.place = "forest"; // it was castle in protoype object 'details'

snowWhite.keyInfo = function() {
    console.log(`${this.name} was forced to escape into a ${this.place} by ${this.enemy}.`);
};

snowWhite.keyInfo(); // Snow White was forced to escape into a forest by The Evil Queen.

/*
*optionally, updating prototype properties in child objects created via the __proto__ property
* const snowWhite = {
  __proto__: details,
  name: "Snow White",
  enemy: "The Evil Queen",
  place: "forest",

  keyInfo() {
    console.log(`${this.name} was forced to escape into a ${this.place} by ${this.enemy}.`);
  }
};

snowWhite.keyInfo(); // Snow White was forced to escape into a forest by The Evil Queen.
* */