const body = document.body;
const requestListener = () => {
    const responseText = JSON.parse(request.responseText);
    console.log(typeof responseText
    );
    display(responseText);
}
function display(responseText) {
    const Div = document.createElement('div');
    Div.className = "mainContainer";
    const {title, first, last} = responseText.results[0].name;
    const fullName = `${title} ${first} ${last}`;
    const dob = responseText.results[0].dob.date;
    const date = dob.split("-");
    const imageURL = responseText.results[0].picture.large;
    console.log(imageURL)
    Div.innerHTML += `<div class="image"><img src="${imageURL}" alt="image"/></div>
<div class="details">
<div class="namediv"><h2 class='name'> ${fullName} </h2></div>
                         <div class="otherdetails">
                         <div class="firstinfo"><p class="email"><b>Email:</b> ${responseText.results[0].email}</p>
                          <p class="password"><b>Password:</b> ${responseText.results[0].login.password}</p>
                          <p class="location"><b>Location: </b> ${responseText.results[0].location.city}, ${responseText.results[0].location.country} </p></div>
                          <div class="secondinfo"><div class="last"><p class="gender"><b>Gender:</b> ${responseText.results[0].gender} </p>
                          <p class="phone"><b>Phone:</b> ${responseText.results[0].phone} </p>
                          <p class="birthday"><b>Birthday:</b> ${date[2].substring(0, 2)}/${date[1]}/${date[0]}</p></div></div>

        `


    body.append(Div);
}

function sendReq() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://randomuser.me/api/");

    request.addEventListener("load", function () {
        if (request.status === 200) {
            const responseText = JSON.parse(request.responseText);
            display(responseText);
        } else {
            console.error(`Error: ${request.status}`);
        }
    });

    request.send();
}
window.addEventListener('load', sendReq);

// const request = new XMLHttpRequest();
// request.addEventListener("load", requestListener);
// request.open("GET", "https://randomuser.me/api/")
// request.send();
// const getUserBtn = document.getElementById("get-user-button");


// faulty
// function sendReq() {
//     const request = new XMLHttpRequest();
//     request.open("GET", "https://randomuser.me/api/")
//     request.send();
//     if (request.status == 200) {
//         display(JSON.parse(request.responseText));
//     }
//     else {
//         console.log(`Error: ${request.status}`)
//     }
// }



// function requestListener () {
//     console.log(this.responseText);
//     //  area.innerHTML = this.responseText;
//     document.body.innerHTML = this.responseText;
// }
