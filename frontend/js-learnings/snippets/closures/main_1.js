function greeting(name) {
    const text = "Hello, " + name;

    console.log(text);
}

greeting("Vivek");  // output: "Hello, Vivek"

console.log(text)  // ReferenceError: text is not defined
