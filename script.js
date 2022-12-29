var challengeContainer = document.querySelector("#challengeContainer");
var beginningScreen = document.querySelector("#beginningScreen");
var startButton = document.querySelector("#startButton");
var challengeScreen = document.querySelector("#challengeScreen");
var buttonUl = document.querySelector("#buttonUl");
var endOfGameScreen = document.querySelector("#endOfGameScreen");
var score = document.querySelector("#score");
var initialsInput = document.querySelector("#initialsInput");
var highScoreScreen = document.querySelector("#highScoreScreen");
var timeLeft = 5
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
    challengeScreen.style.display = "block";
});

// local storage - initials 
// timer - subtract from clock when answer incorrectly 
// make if statement for when timer hits 0 game is over?
// when answer a question, nmove onto the next question 


// function setCounterText() {
//     countEl.textContent = count;
    
//   }
//   function add(){
//     count++;
//     setCounterText()
  
//   }
//   function subtract(){
//     if(count > 0){
//     count--;}
//     setCounterText()
//   }
 
//   incrementEl.addEventListener("click", add);

// decrementEl.addEventListener("click", subtract);


// ___________________________________________________

// var count = localStorage.getItem("count");

// counter.textContent = count;

// addButton.addEventListener("click", function() {
//   if (count < 24) {
//     count++;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });

// subtractButton.addEventListener("click", function() {
//   if (count > 0) {
//     count--;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });


// event.prevent default
