const dataLoader = new Promise((res, rej) => {
    rej("An error occurred")
})
dataLoader.catch((err) => console.log(err)
)
// let dataLoader = new Promise((resolve, reject) => reject("An error occurred"));

function passingExam (myPoints) {
    return new Promise(function(resolve, reject) {
        if ( myPoints >= 90 ) { resolve("You are enrolled!")}
        else {
            reject("Sorry, you haven't passed the Math exam")
        }
    }).then((res) => console.log(res),
        (err) =>console.log(err)
    );
}
passingExam(97)