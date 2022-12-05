var nextEl = document.querySelector("#next");
var questions = document.querySelectorAll(".question"); 
var cursor = 0;

var questions = [
    "How much wood could a woodchuck chuck?", 
    "Did you have your break today?", 
    "Do you like ice cream?", 
    "What's your favorite pizza topping?"
];

var displayQuestion = function () {
    for (var question of questions) {
        console.log(question);
    }
};

var advance = function() {
    if (cursor < questions.length - 1){
        cursor++;
        displayQuestion();
    }
};

displayQuestion();

// nextEl.addEventListener("click", advance);