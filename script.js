"use strict";

let username = "Horizon";
let email = "davydav1919@gmail.com";
let password = "W3lc0me@Bell-Hackathon";
let usernameBox = document.getElementById("username");
let emailBox = document.getElementById("email");
let passwordBox = document.getElementById("password");
let form = document.getElementById("submissionForm");
function CheckPassword(event)
{
    if(passwordBox.value != password || emailBox.value != email || usernameBox.value != username)
    {
        alert("Incorrect information. Please review username, email and password."); //make wrong field empty 
        event.preventDefault();   
    }
    else{
        window.location.replace("./2factorauth.html");
    }
}
form.addEventListener("submit", CheckPassword);
