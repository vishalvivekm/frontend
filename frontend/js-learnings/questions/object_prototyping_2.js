// Create a parent object, named car, with the brand 'Toyota' and year '2019'. Then, create a prototyping instance of the car object, named 'myCar', with the properties 'type' set to 'automobile', 'name' set to 'Camry', and 'color' set to 'silver'.
const car = {
    brand: "Toyota",
    year: 2019,
}
const myCar = Object.assign({}, car, {
    type: "automobile",
    name: "Camry",
    color: "silver",
})
console.log(`Brand: ${myCar.brand}`);
console.log(`Year: ${myCar.year}`);
console.log(`Type: ${myCar.type}`);
console.log(`Name: ${myCar.name}`);
console.log(`Color: ${myCar.color}`);