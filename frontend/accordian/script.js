const plusIcon = document.getElementsByClassName("icon");
const questionDiv = document.getElementsByClassName("tags")




const toggleVisibility = (icon) => {
    let answer = icon.nextElementSibling;
    if (answer.style.display === "none") {
        answer.style.display = "block";
        icon.innerHTML = "-"
    } else {
        answer.style.display = "none";
        icon.innerHTML = "+"
    }
}
