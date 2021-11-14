const question = document.querySelector("#question");
const choices = Arry.from(document.querySelector(".choice-Text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");


let currentQuestion = {}
let acceptinganswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {question: 'What is 2 + 2',
    choiceA: "1",
    choiceA: "2",
    choiceA: "3",
    choiceA: "4",
    answer: 4,
}
]