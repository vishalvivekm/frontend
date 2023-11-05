function hasDownloaded (value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve("Now you can watch the video!");
        } else {
            reject("Oops! An error occurs");
        }
    });

    return promise
    //     .then((val) => console.log(val), (error) => console.log(error));
}
// hasDownloaded("true")

hasDownloaded(true)
.then(function(val){
    console.log("Now you can watch the video!");
})
.catch(function(error){
    console.log("Oops! An error occurs");
});