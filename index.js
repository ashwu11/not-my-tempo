const tom1 = new Audio("./sounds/tom-1.mp3");
const tom2 = new Audio("./sounds/tom-2.mp3");
const tom3 = new Audio("./sounds/tom-3.mp3");
const tom4 = new Audio("./sounds/tom-4.mp3");
const snare = new Audio("./sounds/snare.mp3");
const crash = new Audio("./sounds/crash.mp3");
const kickBass = new Audio("./sounds/kick-bass.mp3");

const title = document.getElementsByTagName("h1")[0];
const numDrumButtons = document.querySelectorAll(".drum").length;
const setPattern = document.getElementById("set");
const playPattern = document.getElementById("play");
let pattern = [];
let attempt = [];
let active = false;

// play drums using keyboard
document.addEventListener("keydown", (e) => {
    playSound(e.key);
    animateButton(e.key);
    buildPattern(e.key);
    winScenario();
});

// play drums using clicks
for (let i = 0; i < numDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        animateButton(this.innerHTML);
        buildPattern(this.innerHTML);
        winScenario();
    });
}

// set the pattern
setPattern.addEventListener("click", function () {
    if (active) {
        setPattern.innerHTML = "tempo set!";
        
        setTimeout(() => {
            setPattern.innerHTML = "reset tempo";
        }, 2000);

    } else {
        title.innerHTML = "🥁 Not my tempo!";
        setPattern.innerHTML = "finish";
        pattern = [];
        attempt = [];
    }

    active = !active;
});

// play the set pattern out loud
playPattern.addEventListener("click", function () {
    if (pattern.length == 0) alert("Tempo has not been set!");

    // TODO play sounds in order...
    for (let i = 0; i < pattern.length; i++) {
        setTimeout(() => {
            playSound(pattern[i])
        }, 250)
    }
    
    attempt = [];
});

// FUNCTIONS ===================

function buildPattern(key) {
    if (active) {
        pattern.push(key);
    } else {
        attempt.push(key);
    }
}

function winScenario() {
    if (checkAttempt(attempt)) {
        title.innerHTML = "Welcome to the band 🥁"
    }
}

function checkAttempt(attempt) {
    if (!pattern || !attempt) return false;
    if (attempt.length != pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (attempt[i] != pattern[i]) return false;
    }

    return true;
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


