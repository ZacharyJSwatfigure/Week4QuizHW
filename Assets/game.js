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

    {
        question: 'How fast was the first perosn convicted of a speeding violation going?',
        choiceA: "35mph",
        choiceA: "103mph",
        choiceA: "26mph",
        choiceA: "8mph",
        answer: 4,
    },

    {
        question: 'How many chemicals make up that New Car Smell?',
        choiceA: "2",
        choiceA: "50+",
        choiceA: "14",
        choiceA: "30",
        answer: 2,
    },

    {
        question: 'How much trash does the world produce of food per year approximately?',
        choiceA: "1Mil Lbs",
        choiceA: "2Tril lLbs",
        choiceA: "1Bil Lbs",
        choiceA: "6Mil Lbs",
        answer: 4,
    },

    {
        question: 'What is 2 + 2',
        choiceA: "1",
        choiceA: "2",
        choiceA: "3",
        choiceA: "4",
        answer: 4,
    },

    {
        question: 'Unknown to many, Easter Egg Island heads have...',
        choiceA: "Bodies",
        choiceA: "Hair",
        choiceA: "Feint Mustaches and beards",
        choiceA: "Toes",
        answer: 4,
    },
]

const scorePoints = 100
const maxQuestions = 5

startQuiz = () => {
    questionCounter = 0
    score = 0
    avaialbleQuestions = [...questions]
}

