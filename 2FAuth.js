//Declaring sound
const audio = new Audio(src="zapsplat_multimedia_button_click_004_68776.mp3");

let buttons = document.querySelectorAll("div.btn-group button");//selects all buttons
//initialize counts
let buttonClicked = 0;
let tryCount = 3;

const patternNumber = 4;

//create a Set which is a collection of 4 unique numbers
let nums = new Set();
while (nums.size != patternNumber) 
{
    nums.add(Math.floor(Math.random() * 16) + 1);
}
//initialize a constant and new Set to evaluate later on
const areSetsEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value));
let buttonInputs = new Set();
//On each button click run buttonClick function
buttons.forEach(button => {
    button.addEventListener("click", buttonClick)
});

console.log(nums); //TO DO remove me
console.log(buttonInputs);

function buttonClick(event){
    buttonClicked++;//increase count of the amount of buttons we clicked
    audio.play(); //audio plays on click
    event.currentTarget.disabled = true; //sets the current box to disabled so that we cant click the same one aain
    buttonInputs.add(Number(event.currentTarget.id)); //Adds a number type variable to set

    console.log(buttonInputs);

    if(buttonClicked === 4){ //after 4 button clicks check for the solution
        checkSolution(buttonInputs);
    }
}

function checkSolution(buttonInputs){
    buttons.forEach(button => { //reenable all the boxes
        if (button.disabled == true){
            button.disabled = false;
        }
    })
    buttonInputs = Array.from(buttonInputs);
    nums = Array.from(nums);
    if(buttonInputs[0] != nums[0] || buttonInputs[1] != nums[1] || buttonInputs[2] != nums[2] || buttonInputs[3] != nums[3]){ //evaluates if the sets are equals to each other
        reset();
    }
    else{
        window.location.replace("./HomePage.html");//if they are equal than congrats you can go to the homepage
    }
}

//Reset buttons 
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGrid);
let showText = document.getElementById("centering")//text for amount of tries we have left
function resetGrid(){
    buttons.forEach(button => { //again set all the buttons to enabled
        if (button.disabled == true){
            button.disabled = false;
        }
    })
    //reset the Set and amount of button clicks
    buttonClicked = 0; 
    buttonInputs = new Set();
}
function reset(){
    tryCount-= 1; //amount of tries -1 because we just failed
    resetGrid();
    showText.style.visibility = "visible" //shows the text that says how many tries we have left
    showText.innerText="Solution was incorrect. You have " +tryCount+ " tries remaining."
    if(tryCount === 0)
    {
        showText.style.visibility = "hidden"
        failedLogin(); //call function to restart the 2FA with new values and solution because they failed their 3 attemps
    }
}
function failedLogin(){
    //Makes a new solution to the 2FA
    alert("Sorry, you used up your 3 tries. Please wait 10 seconds and we'll send you a new solution.")
    buttons.forEach(button => { //set all buttons to disabled
        button.disabled = true;
        });
        resetButton.disabled = true;
    setTimeout(function(){
        resetButton.disabled = false;
        nums = new Set(); 
        while (nums.size != patternNumber) 
        {
            nums.add(Math.floor(Math.random() * 16) + 1);
        }
        tryCount = 3; //resets to default options
        buttons.forEach(button => { //set all buttons to disabled
            button.disabled = false;
            });
        console.log(nums);
    }, 10000);
}

document.addEventListener("DOMContentLoaded", openTab());
function openTab() {
    window.open("./Solution.html", "_blank");
}

//Audio playing from https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48