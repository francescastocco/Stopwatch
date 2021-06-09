let x;
let startstop = 0;

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hour = 0;

let millisecondsOut = 0;
let secondsOut = 0;
let minutesOut = 0;
let hourOut = 0;

function startStopwatch() {
    x = setInterval(timer, 10);
}

function stopStopwatch(counter) {
    clearInterval(x);
}

function resetStopwatch() {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hour = 0;

    document.getElementById("milliseconds").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
}

function addZero(i){
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function timer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hour++;
    }

    millisecondsOut = addZero(milliseconds);
    secondsOut = addZero(seconds);
    minutesOut = addZero(minutes);
    hourOut = addZero(hour);

    document.getElementById("milliseconds").innerHTML = millisecondsOut;
    document.getElementById("seconds").innerHTML = secondsOut;
    document.getElementById("minutes").innerHTML = minutesOut;
    document.getElementById("hour").innerHTML = hourOut;
}
