"use strict";

let username = "Horizon";
let email = "davydav1919@gmail.com";
let password = "1234";
let usernameBox = document.getElementById("username");
let emailBox = document.getElementById("email");
let passwordBox = document.getElementById("password");
let form = document.getElementById("submissionForm");
function CheckPassword(event)
{
    if(passwordBox.value != password || emailBox.value != email || usernameBox.value != username)//if any of them are incorrect
    {
        alert("Incorrect information. Please review username, email and password."); //make wrong field empty 
        event.preventDefault();   //prevent form submission
    }
}
form.addEventListener("submit", CheckPassword);
