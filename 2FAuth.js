//Playing sound on click for audio cues
const audio = new Audio(src="zapsplat_multimedia_button_click_004_68776.mp3");
let buttons = document.querySelectorAll("div.btn-group button");
let buttonClicked = 0;
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener("click", playSoundDisable)
    });
;

function playSoundDisable(event){
    buttonClicked++;
    if (buttonClicked > 4){
        checkSolution();
    }
    audio.play();
    if (buttonClicked <= 4){
        event.currentTarget.disabled = true;
    }
}

function checkSolution(){
    toggleErrorMessage();
}

//Reset buttons 
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetButtons);
function resetButtons(){
    toggleErrorMessage();
    buttonClicked = 0;
    buttons.forEach(button => {
        if (button.disabled == true){
            button.disabled = false;
        }
    })
}

//toggles messages
window.onload = function() {
    window.setTimeout(fadeout, 4000); //4 second fade out
}

let text = document.getElementById("toggleText");
function toggleErrorMessage() {
    if (text.style.display === "none") {
      text.style.display = "block";
    } 
    else {
      text.style.display = "none";
    }
}


//from https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48