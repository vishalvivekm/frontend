function makeUppercase(value) {
    console.log(value.toUpperCase());

}
//makeUppercase('peter');

function handleName(name, cb) {
    const fullName = `${name} smith`
    cb(fullName)
}

function reverseString(value) {
    console.log(value.split('').reverse().join('').toUpperCase());
}
handleName('peter', makeUppercase); // just don't invoke it here x ()
handleName('peter', reverseString);

//1. ust don't invoke it here x ()
//2. can do like this too

handleName('susan', function (value) {
    console.log(value);
})
//handleName('susan', (value) => console.log(value))




// array methods, setTimeout, event listener etc