
const numDrumButtons = document.querySelectorAll(".drum").length;
const tom1 = new Audio("./sounds/tom-1.mp3");
const tom2 = new Audio("./sounds/tom-2.mp3");
const tom3 = new Audio("./sounds/tom-3.mp3");
const tom4 = new Audio("./sounds/tom-4.mp3");
const snare = new Audio("./sounds/snare.mp3");
const crash = new Audio("./sounds/crash.mp3");
const kickBass = new Audio("./sounds/kick-bass.mp3");

// play drums using keyboard
document.addEventListener("keydown", (e) => {
    playSound(e.key);
    animateButton(e.key);
});

// play drums using clicks
for (let i = 0; i < numDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        playSound(this.innerHTML);
        animateButton(this.innerHTML);
    });
}

function playSound(key) {
    switch (key) {
        case "w":
            crash.play();
            break;
        case "a":
            snare.play();
            break;
        case "s":
            tom1.play();
            break;
        case "d":
            tom2.play();
            break;
        case "j":
            tom3.play();
            break;
        case "k":
            tom4.play();
            break;
        case "l":
            kickBass.play();
            break;
        default:
            console.log(`${key} is not a valid key, use: w a s d j k l`);
            break;
    }
}

function animateButton(key) {
    let button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 250);
}


