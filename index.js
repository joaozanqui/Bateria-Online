/* Buttons */

/* Click */
var numDrums = document.querySelectorAll(".drums").length;

for(var i=0; i<numDrums; i++) {
    document.querySelectorAll(".drums")[i].addEventListener("click", clicked);
}

function clicked() {
    makeSound(this.innerHTML);
    animation(this.innerHTML);
}

/* Press */

document.addEventListener("keydown", pressed);

function pressed(event) {
    makeSound(event.key);
    animation(event.key);
}
    
function makeSound(key) {
    switch(key.toLowerCase()) {
        case 'q': var audio = new Audio('sounds/Chimbal-Pé.wav');
                            audio.play();
                            break;
        case 'w': var audio = new Audio('sounds/Chimbal-Aberto.mp3');
                            audio.play();
                            break;
        case 'e': var audio = new Audio('sounds/Chimbal.wav');
                            audio.play();
                            break;
        case 'r': var audio = new Audio('sounds/PratoL.wav');
                            audio.play();
                            break;
        case 't': var audio = new Audio('sounds/PratoR.wav');
                            audio.play();
                            break;
        case 'a': var audio = new Audio('sounds/Bumbo.mp3');
                            audio.play();
                            break;
        case 's': var audio = new Audio('sounds/Caixa.wav');
                            audio.play();
                            break;
        case 'd': var audio = new Audio('sounds/ton1.mp3');
                            audio.play();
                            break;
        case 'f': var audio = new Audio('sounds/ton2.mp3');
                            audio.play();
                            break;
        case 'g': var audio = new Audio('sounds/ton3.mp3');
                            audio.play();
                            break;
    }
}

/* Animação quando pressionado */
function animation(key) {
    document.querySelector("." + key.toLowerCase()).classList.add("drums-active");
    setTimeout(function() {
        document.querySelector("." + key.toLowerCase()).classList.remove("drums-active");
    }, 50);
}

/* Copiar texto */
function copyPaste() {
  var copyText = "jpzanqui@hotmail.com";
  navigator.clipboard.writeText(copyText);
  document.querySelector("#btn-copy").innerHTML = "Copiado !";
  }