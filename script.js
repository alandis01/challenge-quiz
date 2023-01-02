var startScreen = document.querySelectorAll("#startScreen");
var start = document.querySelectorAll("#start");
var questionContainer = document.getElementById("questionContainer");
var currentQuestion = 0;
var endOfGameScreen = document.querySelector("#endOfGameScreen");
var score = document.querySelector("#score");
var initialsInput = document.querySelector("#initials");
var highScoreScreen = document.querySelector("#highScoreScreen");
var timeLeft = 75
var timerInput = document.querySelector("#timer");


var questions = [
    {
        question: "What is the square root of 64?",
        answers: { a: 32, b: 16, c: 64, d: 8 },
        correct: 'd'
    },
    {
        question: "Which of the following is a Moonshine Distillery in Gatlinburg, TN?",
        answers: { a: "Moonshine ++", b: "Sugarlands", c: "Living on the hedge", d: "Find your wild" },
        correct: 'b'
    },
    {
        question: "Which of the following is a brewery in Charlotte, NC?",
        answers: { a: "Red Oak", b: "Bricktree", c: "OMB", d: "Hoptown" },
        correct: 'c'
    },
    {
        question: "What year did Jeep unveil the new JL model versus the previous JK model Wrangler?",
        answers: { a: "2017", b: "2021", c: "2006", d: "2019" },
        correct: 'a'
    },
    {
        question: "How many years are there between Avatar 1 and 2?",
        answers: { a: 10, b: 12, c: 13, d: 11 },
        correct: 'c'
    }]

var displayQuestion = function () {
    console.log(currentQuestion)
    questionContainer.innerHTML=''

    const section = document.createElement('section')
    section.innerHTML = `<h2>${questions[currentQuestion].question}</h2>
    <button class="answer-button" data-choice="0">a. ${questions[currentQuestion].answers.a}</button>
    <button class="answer-button" data-choice="1">b. ${questions[currentQuestion].answers.b}</button>
    <button class = "answer-button" data-choice="2">c. ${questions[currentQuestion].answers.c}</button>
    <button class="answer-button" data-choice="3">d. ${questions[currentQuestion].answers.d}</button>`

    questionContainer.append(section)

    butttonsCollection = document.getElementsByClassName('answer-button')
    buttonsArray = Array.from(butttonsCollection)

    buttonsArray.forEach((button) => {
        button.addEventListener('click', advance)
    })
};

displayQuestion();

function advance() {
    if (currentQuestion < questions.length -1){
        currentQuestion++;
        displayQuestion()
    } else endGame()
};

function endGame () {
    questionContainer.classList.add("hide")
    endOfGameScreen.classList.remove("hide")
}
// start.addEventListener('click', function() {
// timer();
// displayQuestion();
// });


var timer = function () {
    var timerInterval = setInterval(() => {
        timeLeft--;
        timerInput.textContent = "Time Left " + timeLeft + "s";
        console.log(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval)
        }
    }, 1000);
};








