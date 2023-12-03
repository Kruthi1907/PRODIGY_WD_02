let stopwatch;
let isRunning = false;
let lapCount = 1;

function startStopwatch() {
    if (!isRunning) {
        stopwatch = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(stopwatch);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatch);
    isRunning = false;
    lapCount = 1;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('lapList').innerHTML = '';
}

function lapTime() {
    const currentTime = document.getElementById('display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${currentTime}`;
    document.getElementById('lapList').appendChild(lapItem);
    lapCount++;
}

function updateTime() {
    const timeDisplay = document.getElementById('display');
    const currentTime = timeDisplay.textContent;
    const timeArray = currentTime.split(':');
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    let seconds = parseInt(timeArray[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;

            if (hours === 24) {
                hours = 0;
            }
        }
    }

    timeDisplay.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
