const audio = new Audio(src="zapsplat_multimedia_button_click_004_68776.mp3");
let button1 = document.getElementById("row1col1");
button1.addEventListener("click", playSound);
function playSound(){
    alert("played!");
    audio.play();
}
//from https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48