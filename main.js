const open_hi_hat = document.querySelector('.open-hi-hat');
const closed_hi_hat = document.querySelector('.closed-hi-hat');
const snare = document.querySelector('.snare');
const tom1 = document.querySelector('.tom1');
const tom2 = document.querySelector('.tom2');
const tom3 = document.querySelector('.tom3');
const bass = document.querySelector('.bass');
const crash = document.querySelector('.crash');
let sound;

const open_hi_hat_func = () => {
    sound = new Audio("sounds/open-hi-hat.wav");
    sound.play();
}
const closed_hi_hat_func = () => {
    sound = new Audio("sounds/closed-hi-hat.wav");
    sound.play();
}
const snare_func = () => {
    sound = new Audio("sounds/snare.mp3");
    sound.play();
}
const high_tom_func = () => {
    sound = new Audio("sounds/high-tom.wav");
    sound.play();
}
const mid_tom_func = () => {
    sound = new Audio("sounds/mid-tom.wav");
    sound.play();
}
const floor_tom_func = () => {
    sound = new Audio("sounds/floor-tom.mp3");
    sound.play();
}
const bass_func = () => {
    sound = new Audio("sounds/bass.mp3");
    sound.play();
}
const crash_func = () => {
    sound = new Audio("sounds/crash.mp3");
    sound.play();
}

open_hi_hat.addEventListener('click', open_hi_hat_func);
closed_hi_hat.addEventListener('click', closed_hi_hat_func);
snare.addEventListener('click', snare_func);
tom1.addEventListener('click', high_tom_func);
tom2.addEventListener('click', mid_tom_func);
tom3.addEventListener('click', floor_tom_func);
bass.addEventListener('click', bass_func);
crash.addEventListener('click', crash_func);