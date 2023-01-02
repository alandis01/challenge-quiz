var endOfGameScreen = document.querySelector("#endOfGameScreen");
var score = document.querySelector("#score");
var initialsInput = document.querySelector("#initials");
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








