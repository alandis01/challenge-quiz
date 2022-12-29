var challengeContainer = document.querySelector("#challengeContainer");
var beginningScreen = document.querySelector("#beginningScreen");
var startButton = document.querySelector("#startButton");
var challengeScreen = document.querySelector("#challengeScreen");
var buttonUl = document.querySelector("#buttonUl");
var endOfGameScreen = document.querySelector("#endOfGameScreen");
var score = document.querySelector("#score");
var initialsInput = document.querySelector("#initialsInput");
var highScoreScreen = document.querySelector("#highScoreScreen");

      
var timer = function () {
};

var displayQuestion = function () {
};

var 
egsgdg

startButton.addEventListener("click", function() {
    timer();
    displayQuestion();
    var sections = document.querySelectorAll("setion");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    challengeScreen.style.display = "block";
});

