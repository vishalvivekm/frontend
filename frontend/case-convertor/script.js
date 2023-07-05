let upperCaseBtn = document.getElementById("upper-case");
let lowerCaseBtn = document.getElementById("lower-case");
let properCaseBtn = document.getElementById("proper-case");
let sentenceCaseBtn = document.getElementById("sentence-case");

let textarea = document.querySelector("textarea");




upperCaseBtn.addEventListener("click", convertToUpperCase);
lowerCaseBtn.addEventListener("click", convertToLowerCase);
properCaseBtn.addEventListener("click", convertToProperCase);
sentenceCaseBtn.addEventListener("click", convertToSentenceCase)
document.getElementById("save-text-file").addEventListener("click", function() {
    let filename = 'text.txt';
    let text = textarea.value;
    download(filename, text);
});

function convertToUpperCase() {
    textarea.value = textarea.value.toUpperCase();
}

function convertToLowerCase() {
    textarea.value = textarea.value.toLowerCase();
}

function convertToProperCase() {
    let stringsArray = textarea.value.trim().split(" ");
    for ( let i=0; i< stringsArray.length; i++) {
        if (stringsArray[i] != "") {
            stringsArray[i] = stringsArray[i].trim()[0].toUpperCase() + stringsArray[i].trim().toLowerCase().slice(1);
        } else {
            continue;
        }
    }

    textarea.value = stringsArray.join(" ");
}

function convertToSentenceCase() {
    let stringsArray = textarea.value.trim().split(".");
    for (let i = 0; i < stringsArray.length; i++) {
        if (stringsArray[i] != "") {
            stringsArray[i] = stringsArray[i].trim()[0].toUpperCase() + stringsArray[i].trim().toLowerCase().slice(1);
        } else {
            continue;
        }
    }
    textarea.value = stringsArray.join(". ").trim();
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
