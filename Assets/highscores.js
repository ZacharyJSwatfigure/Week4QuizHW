const highScoresList = document.querySelector("#highScoresList")
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML = 
highscores.map(scores => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")