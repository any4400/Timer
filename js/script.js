//Timer fildes

const hoursElement = document.querySelector('.hours');
const minsElement = document.querySelector('.mins');
const secsElement = document.querySelector('.secs');
const msecsElement = document.querySelector('.msecs');


// Buttons

const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');

//Listeners

startButton.addEventListener('click',() => {
    clearInterval(interval);
    interval = setInterval( startTimer, 10);
});

pauseButton.addEventListener('click', () => {
    clearInterval(interval);
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    hours = 0;
    mins = 0;
    secs = 0;
    msecs = 0;
    hoursElement.textContent = '00';
    minsElement.textContent = '00';
    secsElement.textContent = '00';
    msecsElement.textContent = '00';
    msecsElement.classList.remove('yellow');
    secsElement.classList.remove('green');
    minsElement.classList.remove('pink');
    hoursElement.classList.remove('blue');
    opYellow = 0;
    opGreen = 0.4;
    opPink = 0.4;
    opBlue = 0.4;
    msecsElement.style.opacity = 1;
    secsElement.style.opacity = 1;
    minsElement.style.opacity = 1;
    hoursElement.style.opacity = 1;
});

// Variables
let hours = 0;
let mins = 0;
let secs = 0;
let msecs = 0;
let interval;
let opYellow = 0;
let opGreen = 0.4;
let opPink = 0.4;
let opBlue = 0.4;



function startTimer() {
    msecs++;
    msecsElement.classList.add("yellow");
    msecsElement.style.opacity = opYellow;
    opYellow += 0.01;
    if (msecs < 9) {
        msecsElement.innerText = '0'+ msecs;
    }
    if (msecs > 9) {
        msecsElement.innerText = msecs;
    }
    if (msecs > 99) {
        secs++;
        opGreen += 0.01;
        secsElement.classList.add('green');
        secsElement.style.opacity = opGreen;

        secsElement.innerText = '0'+ secs;
        msecs = 0;
        msecsElement.innerText = '0'+ msecs;
    }


    if (secs > 9) {
        secsElement.innerText = '0'+ secs;
    }
    if (secs > 9) {
        secsElement.innerText = secs;
    }
    if (secs > 59) {
        mins++;
        opPink += 0.01;
        minsElement.classList.add('pink');
        minsElement.style.opacity = opPink;

        minsElement.innerText = '0'+ mins;
        secs = 0;
        secsElement.innerText = '0'+ secs;
    }


    if (mins > 9) {
        minsElement.innerText = '0'+ mins;
    }
    if( mins > 9) {
        minsElement.innerText = mins;
    }
    if (mins > 59) {
        hours++;
        opBlue += 0.01;
        hoursElement.classList.add('blue');
        hoursElement.style.opacity = opBlue;

        hoursElement.innerText = '0'+ hours;
        mins = 0;
        minsElement.innerText = '0'+ mins;
    }

    if (hours < 9) {
        hoursElement.innerText = '0'+ hours;
    }
    if (hours > 9) {
        hoursElement.innerText = hours;
    }
        
    }

