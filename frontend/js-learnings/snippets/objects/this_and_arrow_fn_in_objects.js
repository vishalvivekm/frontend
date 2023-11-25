/*
Arrow functions cannot bind this. In other words, the arrow functions do not have their own this.

If we use this inside an arrow function, its value is taken from an external function declared the usual way:

* */
// for example:

let movie = {
    name: "Joker",
    year: 2019,
    getInfo() {
        let arrow = () => console.log("The movie " + this.name + " was shot in " + this.year);
        arrow();
    },
    printMovieName : () => {
        console.log(this.name) // undefined, console.log(movie.name) would work, not best practise, changing the name of object, will have to change the name of the arrow function
    }


};

movie.getInfo(); // The movie Joker was shot in 2019
movie.printMovieName()



/*
*
*

A quick tip that I follow to use arrow functions.

    Use non-arrow functions for methods that will be using object.method() syntax. (Those are functions that will receive meaningful this value from their caller.)
    Use arrow function for almost everything else.


* */