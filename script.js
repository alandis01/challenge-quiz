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
    const section = document.createElement('section')
    section.innerHTML = `<h2 id="next">What is the square root of 64?</h2>
    <button data-choice="0">a. 32</button>
    <button data-choice="1">b. 16</button>
    <button data-choice="2">c. 64</button>
    <button data-choice="3">d. 8</button>`

    questionContainer.append(section)
};

displayQuestion();

var advance = function (event) {
    var element = event.target;

    if (element.matches('.question button')) {
        if (cursor < questions.length - 1) {
            var answer = element.dataset.choice === correctAnswers
            [cursor];
            cursor++;
        }
        // if () - want to say if correctAnswer = true prompt correct else prompt incorrect 
        displayQuestion();
    }
};

// start.addEventListener('click', function() {
// timer();
// displayQuestion();
// });

document.addEventListener('click', advance);


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








