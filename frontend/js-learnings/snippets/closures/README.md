<details>
<summary>more on Closures </summary>
<code>function greeting(name) {
    const text = "Hello, " + name;
    return function() {
        console.log(text);
    }
}
const greetingVivek = greeting("Vivek");
greetingVivek(); // output: "Hello, Vivek"
console.log(text) // ReferenceError: text is not defined</code>
<br>
<details><summary>Text: </summary>
> The function definition is the same. What is different is that the function creates a variable text, which is accessed by the inner anonymous function. In the end, we return the anonymous function.

> In this example, the inner anonymous function uses a variable outside of its scope. Nothing unusual here because the access is granted by the scoping rules in JavaScript. What we're interested in is the fact that this variable can be used even after we ran the outer function greeting(), but not accessed directly (via calling console.log).

> The inner function maintains the reference to its lexical environment, and our variable exists within it. For that reason, when we call greeting("Vivek"), our variable text is still available to use, and it passes "Hello, Vivek" to console.log. That is closure, the inner function "encloses" the data in its environment and has access to it even after that data isn't available within that scope. Notice that we can't access the variable directly. It means that the variable is private to our inner function, and we can only access this variable through it.
</details>



Qn1: "What we're interested in is the fact that this variable can be used even after we ran the outer function greeting(), but not accessed directly (via calling console.log)." and " That is closure, the inner function "encloses" the data in its environment and has access to it even after that data isn't available within that scope. " 

ChatGPT


>    Variable used even after running the outer function:

    In the given code, when you call const greetingVivek = greeting("Vivek");, the greeting function is executed. Inside the greeting function, a variable text is created and assigned the value "Hello, Vivek". Then, the function returns another function (an inner anonymous function). This inner function, when assigned to greetingVivek, still retains access to the text variable, even though the outer greeting function has finished executing.

    However, you cannot directly access the text variable outside of the greeting function, like when you try console.log(text). This is because the text variable is local to the greeting function's scope. It's not directly accessible outside of that scope. Despite this, the inner function has a reference to the environment in which it was created, and it keeps that reference even after the outer function has completed. This behavior is known as closure.

>    Closure and Enclosing Data:

    The concept of closure is when a function "closes over" or "encloses" its lexical scope, meaning it retains access to the variables in that scope even after the outer function has finished executing. In the example, the inner function (the one returned by greeting) is a closure because it retains access to the text variable, even though greeting has completed.

    So, when greetingVivek() is called, the inner function still has access to the text variable within its scope, and it can use that variable to log "Hello, Vivek" to the console. The inner function "encloses" or "captures" the text variable and can refer to it even though the greeting function has finished its execution, and text is not directly accessible in the global scope.

> In summary, closure in JavaScript allows inner functions to retain access to the variables of their outer functions, even after the outer functions have completed execution. This can be a powerful feature, enabling the creation of private variables and the preservation of data across different stages of a program's execution.

</details>
