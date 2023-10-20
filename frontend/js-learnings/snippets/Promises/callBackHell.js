


const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')


const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    setTimeout(()=> {
        first.style.color = 'red'
        setTimeout(()=> {
            second.style.color = 'blue'
            setTimeout(()=> {
                third.style.color = 'green'
            }, 2000)
        }, 3000)
    }, 1000)

});





// This code effectively demonstrates the concept of chaining setTimeout functions to create timed sequences of actions.







// Clearing Dobuts:
// which one is correct?

// btn.addEventListener('click', () => {
//     setTimeout(()=> first.style.color = 'red', 1000);
// });

// btn.addEventListener('click', setTimeout(()=> first.style.color = 'red', 1000));
// );

//The second code snippet is not correct because it passes the result of the
// setTimeout function (which is a timer ID) as the second argument to addEventListener ( Event Listener Function).
// This is not the intended behavior, and it won't work as expected because the setTimeout function will
// execute immediately when the event listener is added, rather than waiting for the button click event.
// Same as what John talked about in callBack.js ;)
