const audio = new Audio();
const buttons = document.querySelectorAll(button.btn-group);

buttons.ForEarch(button => {
    button.addEventListener ("click", () =>{
        audio.play();
    });
});


//from https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48