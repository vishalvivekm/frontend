const btn = document.querySelector(".btn");




btn.addEventListener("click", ()=> {
 addColor(".first", 5000, "green" ).then(()=> {
     console.log("successful")
 })
    .catch(() => console.log("Error"))
    addColor(".second", 4000, "red" )
})

const addColor = (selector, time, color ) => {
    const element = document.querySelector(selector);
    const promise = new Promise((resolve, reject) => {
        if ( element) {
            resolve(setTimeout(() => {
                element.style.color = color;
            }, time))
        }
        else {
            reject("Wrong selector received")
        }
    })
 return promise;
}