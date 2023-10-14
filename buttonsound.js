const audio = new Audio(src="zapsplat_multimedia_button_click_004_68776.mp3");
let buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener("click", playSound)
    });
;

function playSound(){
    audio.play();
}
//from https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48