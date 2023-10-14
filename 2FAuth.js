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
        //CHECK SOLUTION
    }
    audio.play();
    if (buttonClicked <= 4){
        event.currentTarget.disabled = true;
    }
}

//Reset buttons 
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetButtons);
function resetButtons(){
    buttonClicked = 0;
    buttons.forEach(button => {
        if (button.disabled == true){
            button.disabled = false;
        }
    })
}


//from https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48