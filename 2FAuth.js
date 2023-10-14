//Playing sound on click for audio cues
const audio = new Audio(src="zapsplat_multimedia_button_click_004_68776.mp3");
let buttons = document.querySelectorAll("div.btn-group button");
let buttonClicked = 0;
const patternNumber = 4;
const dummyArrayLength = 16;
let number = 0;
let generatedPattern = [patternNumber];
let dummyArray = [dummyArrayLength]
let buttonClickId = [patternNumber];
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener("click", playSoundDisable)
    });
;

function playSoundDisable(event){
    
    buttonClicked++;
    checkSolution(event.currentTarget.id);
    
    audio.play();
    if (buttonClicked < 4){
        event.currentTarget.disabled = true;
    }
}

function checkSolution(clickedButtonId)
{
    for (let i = 0; i < buttonClickId.length; i++)
    {
        buttonClickId[i] = clickedButtonId
        console.log(clickedButtonId)
        console.log(buttonClickId)
    }

    for (let i = 0; i < nums.size; i++)
    {

    }
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




const nums = new Set();
while (nums.size !== patternNumber) 
{
    nums.add(Math.floor(Math.random() * 16) + 1)
}



//from https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48