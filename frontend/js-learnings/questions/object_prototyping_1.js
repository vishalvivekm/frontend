const world1 = {
    name: "Miley Cyrus",
    greet: function() {
        console.log(`Hello, this is ${this.name}!`);
    }
};

const world2 = Object.create(world1);
world2.name = "Harry Styles";
world2.greet();
