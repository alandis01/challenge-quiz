var challengeContainer = document.querySelector("#challengeContainer");
var beginningScreen = document.querySelector("#beginningScreen");
var startButton = document.querySelector("#startButton");
var section = document.querySelector("section");
// var question1 = document.querySelector("#question1");
// var question2 = document.querySelector("#question2");
// var question3 = document.querySelector("#question3");
// var question4 = document.querySelector("#question4");
// var question5 = document.querySelector("#question5");
var buttonUl = document.querySelector("#buttonUl");
var endOfGameScreen = document.querySelector("#endOfGameScreen");
var score = document.querySelector("#score");
var initialsInput = document.querySelector("#initialsInput");
var highScoreScreen = document.querySelector("#highScoreScreen");
var timeLeft = 75
var timerInput = document.querySelector("#timer");
      
var timer = function () {
    var timerInterval = setInterval(() => {
       timeLeft --;
       timerInput.textContent ="Time Left " + timeLeft + "s";
       console.log(timeLeft);
       if (timeLeft <= 0) {
        clearInterval(timerInterval)
       }
    }, 1000);  
};

var displayQuestion = function () {
};

startButton.addEventListener("click", function() {
    timer();
    displayQuestion();
    var sections = document.querySelectorAll("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    // section.style.display = "block";
    question1.style.display = "block";
    beginningScreen.setAttribute("class", "hide");
});

function handleChoice(event) {
    var button = event;
    console.log("button", button);
    // console.log(this.getAttribute (value));
    console.log("button.value", button.value);
    if (button.value !== "correct") {
        alert ("incorrect");
    } else {
        alert ("correct");
    }
}


// subtractButton.addEventListener("click", function() {
//   if (count > 0) {
//     count--;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });


// event.prevent default
