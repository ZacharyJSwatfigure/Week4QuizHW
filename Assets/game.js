const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [

    {
        question: 'How fast was the first perosn convicted of a speeding violation going?',
        choice1: "35mph",
        choice2: "103mph",
        choice3: "26mph",
        choice4: "8mph",
        answer: 4,
    },

    {
        question: 'How many chemicals make up that New Car Smell?',
        choice1: "2",
        choice2: "50+",
        choice3: "14",
        choice4: "30",
        answer: 2,
    },

    {
        question: 'How much trash does the world produce of food per year approximately?',
        choice1: "1Mil Lbs",
        choice2: "2Tril lLbs",
        choice3: "1Bil Lbs",
        choice4: "6Mil Lbs",
        answer: 4,
    },

    {
        question: 'What is 2 + 2',
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 4,
    },

    {
        question: 'Unknown to many, Easter Egg Island heads have...',
        choice1: "Bodies",
        choice2: "Hair",
        choice3: "Feint Mustaches and beards",
        choice4: "Toes",
        answer: 4,
    },
]

const scorePoints = 100
const maxQuestions = 5

startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {

        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("/end.html")

    }

    questionCounter++

    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`

    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]

    })

    availableQuestions.splice(questionsIndex, 1)
    
    acceptingAnswer = true
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswer) return

        acceptingAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" :
            "incorrect"

        if (classToApply === "correct") {
            incrementScore(scorePoints)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)

})
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startQuiz()
