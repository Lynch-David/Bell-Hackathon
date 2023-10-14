//Playing sound on click for audio cues
const audio = new Audio(src="zapsplat_multimedia_button_click_004_68776.mp3");

let buttons = document.querySelectorAll("div.btn-group button");
let buttonClicked = 0;

const patternNumber = 4;


let nums = new Set();
while (nums.size != patternNumber) 
{
    nums.add(Math.floor(Math.random() * 16) + 1);
}

const areSetsEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value));
let buttonInputs =new Set();

buttons.forEach(button => {
    button.addEventListener("click", buttonClick)
});

console.log(nums);
console.log(buttonInputs);

function buttonClick(event){
    buttonClicked++;
    audio.play();
    event.currentTarget.disabled = true;
    buttonInputs.add(Number(event.currentTarget.id));

    console.log(buttonInputs);

    if(buttonClicked === 4){
        checkSolution(buttonInputs);
    }
}

function checkSolution(buttonInputs){
    buttons.forEach(button => {
        if (button.disabled == true){
            button.disabled = false;
        }
    })
    if(!areSetsEqual(buttonInputs,nums)){
        alert('Please try again');
        reset();
    }
    else{
        window.location.replace("./HomePage.html");
    }
}

//Reset buttons 
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

function reset(){
    buttons.forEach(button => {
        if (button.disabled == true){
            button.disabled = false;
        }
    })
    buttonClicked = 0;
    buttonInputs = new Set()
    
}
//from https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48