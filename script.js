var nextEl = document.querySelector("#next");
var question = document.getElementById("question");
var cursor = 0;
var questions = [
    "How much wood could a woodchuck chuck?",
    "Did you have your break today?",
    "Do you like ice cream?",
    "What's your favorite pizza topping?"
];
var displayQuestion = function () {
    question.textContent = questions[cursor]; 
    advance()
};
var advance = function () {
    if (cursor < questions.length) {
        cursor++;
        // displayQuestion();
    }
    else { 
        endofgame()
    }
};
// displayQuestion();
// nextEl.addEventListener("click", advance);

var endofgame = function () {
    question.textContent = "game over";
};

localStorage.setItem("highscore", JSON.stringify())

// nextEl.addEventListener("click", advance);
document.getElementById("btn").addEventListener("click", displayQuestion);
