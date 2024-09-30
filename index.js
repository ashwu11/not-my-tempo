
const numDrumButtons = document.querySelectorAll(".drum").length;
const tom1 = new Audio('./sounds/tom-1.mp3');
const tom2 = new Audio('./sounds/tom-2.mp3');
const tom3 = new Audio('./sounds/tom-3.mp3');
const tom4 = new Audio('./sounds/tom-4.mp3');
const snare = new Audio('./sounds/snare.mp3');
const crash = new Audio('./sounds/crash.mp3');
const kickBass = new Audio('./sounds/kick-bass.mp3');




for (var i = 0; i < numDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        snare.play();
    });
}


