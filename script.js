var questions = document.querySelectorAll(".question");
var cursor = 0;
var endOfGameScreen = document.querySelector("#endOfGameScreen");
var score = document.querySelector("#score");
var initialsInput = document.querySelector("#initials");
var highScoreScreen = document.querySelector("#highScoreScreen");
var timeLeft = 75
var timerInput = document.querySelector("#timer");

var correctAnswers = ["3", "1", "2", "0", "2"];

var displayQuestion = function () {
    for (var question of questions) {
        if (question.dataset.index != cursor) {
            question.style.display = "none";
        } else {
            question.style.display = "block";
        }
    }
};

var advance = function (event) {
    var element = event.target;

    if (element.matches('.question button')) {
        if (cursor < questions.length - 1) {
        var answer = element.dataset.choice === correctAnswers
        [cursor];
            cursor++;
        }
        displayQuestion();
    }
};

document.addEventListener('click', advance);

displayQuestion();

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








