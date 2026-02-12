let seconds = 0;
let timer;
const workTime = 25;
const breakTime = 5;
let minutes = workTime;
let m;
let isRunning = false;
let count = 1;
let longBreakTime = 15;

const minuteDisplay = document.getElementById("minutes");
const secondDisplay = document.getElementById("seconds");

const alarm = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");

function updateDisplay() {
    minuteDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
}

function startTimer() {

    if (isRunning) return;

    isRunning = true;

    m = minutes;

    timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            isRunning = false;
            alarm.play();
            alarm.loop = true;
            alarm.play();
            alert("Time's UP!");
            alarm.pause();
            alarm.currentTime = 0;
            switchTime();
            startTimer();
            return;
        }

        seconds--;

        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }


        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTime() {
    clearInterval(timer);
    isRunning = false;
    minutes = workTime;
    seconds = 0;
    updateDisplay();
}

// Initial display update
updateDisplay();

function switchTime() {
    if (m == workTime && count % 3 != 0) {
        minutes = breakTime;
    }

    else if (m == workTime && count % 3 == 0) {
        minutes = longBreakTime;
    }

    else {
        minutes = workTime;
        count++;
    }
}