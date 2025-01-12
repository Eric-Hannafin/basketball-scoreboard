let homeScoreTextAreaEl = document.getElementById("homeScoreTextArea")
let awayScoreTextAreaEl = document.getElementById("awayScoreTextArea")
let timeEl = document.getElementById('timer')


let homeScore = 0;
let awayScore = 0;
let home = "home"

function addOnePoint(homeOrAway) {
    console.log(homeOrAway)
    if (homeOrAway === home) {
        homeScore += 1
        updateScore(homeScore, homeOrAway)
    } else {
        awayScore += 1
        updateScore(awayScore, homeOrAway)
    }
}

function addTwoPoints(homeOrAway) {
    if (homeOrAway === home) {
        homeScore += 2
        updateScore(homeScore, homeOrAway)
    } else {
        awayScore += 2
        updateScore(awayScore, homeOrAway)
    }
}

function addThreePoints(homeOrAway) {
    if (homeOrAway === home) {
        homeScore += 3
        updateScore(homeScore, homeOrAway)
    } else {
        awayScore += 3
        updateScore(awayScore, homeOrAway)
    }
}

function updateScore(score, team) {
    if (team === home) {
        homeScoreTextAreaEl.textContent = score;
    } else {
        awayScoreTextAreaEl.textContent = score;
    }
}

class Timer {
    constructor(initialMinutes = 12, initialSeconds = 0) {
        this.minutes = initialMinutes;
        this.seconds = initialSeconds;
        this.timerInterval = null;
        this.initialMinutes = initialMinutes;
        this.initialSeconds = initialSeconds;
    }

    start() {
        if (this.timerInterval) return;

        this.timerInterval = setInterval(() => {

            const formattedMinutes = this.minutes.toString().padStart(2, '0');
            const formattedSeconds = this.seconds.toString().padStart(2, '0');
            document.getElementById('timer').textContent = `${formattedMinutes}:${formattedSeconds}`;

            this.seconds--;

            if (this.seconds < 0 && this.minutes > 0) {
                this.minutes--;
                this.seconds = 59;
            }

            if (this.minutes <= 0 && this.seconds <= 0) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
                document.getElementById('timer').textContent = "00:00";
            }
        }, 1000);
    }

    pause() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    reset() {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        this.minutes = this.initialMinutes;
        this.seconds = this.initialSeconds;
        document.getElementById('timer').textContent = `${this.initialMinutes.toString().padStart(2, '0')}:${this.initialSeconds.toString().padStart(2, '0')}`;
    }
}
const myTimer = new Timer();

document.getElementById('startButton').addEventListener('click', () => myTimer.start());
document.getElementById('pauseButton').addEventListener('click', () => myTimer.pause());
document.getElementById('resetButton').addEventListener('click', () => myTimer.reset());
