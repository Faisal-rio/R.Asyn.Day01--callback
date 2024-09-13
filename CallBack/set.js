let countdown = 3; // starting point for countdown
let timer = document.getElementById("sec");
timer.innerHTML = countdown;

const countdownInterval = setInterval(() => {
    countdown--;
    timer.innerHTML = countdown;
    if (countdown === 0) {
        clearInterval(countdownInterval); // stop the countdown
        document.getElementById("timer-content").style.display = "none";
        document.getElementById("wishes-content").style.display = "block";
    }
}, 1000); // runs every 1 second (1000 milliseconds)
