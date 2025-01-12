let homeScoreTextAreaEl = document.getElementById("homeScoreTextArea")
let awayScoreTextAreaEl = document.getElementById("awayScoreTextArea")

let homeScore = 0;
let awayScore = 0;

function addOnePoint(homeOrAway) {
    console.log(homeOrAway)
    if (homeOrAway === "home") {
        console.log("HERE")
        homeScore += 1
        updateScore(homeScore, homeOrAway)
    } else {
        awayScore += 1
        updateScore(awayScore, homeOrAway)
    }
}

function addTwoPoints(homeOrAway) {
    if (homeOrAway === "home") {
        homeScore += 2
        updateScore(homeScore, homeOrAway)
    } else {
        awayScore += 2
        updateScore(awayScore, homeOrAway)
    }
}

function addThreePoints(homeOrAway) {
    if (homeOrAway === "home") {
        homeScore += 3
        updateScore(homeScore, homeOrAway)
    } else {
        awayScore += 3
        updateScore(awayScore, homeOrAway)
    }
}

function updateScore(score, team) {
    if (team === "home") {
        console.log("HERE2")
        homeScoreTextAreaEl.textContent = score;
    } else {
        awayScoreTextAreaEl.textContent = score;
    }
}