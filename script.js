var startScreen = document.querySelector("#startScreen");
var start = document.querySelector("#start");
var questionContainer = document.getElementById("questionContainer");
var currentQuestion = 0;
var endOfGameScreen = document.querySelector("#endOfGameScreen");
var scoreElement = document.querySelector("#score");
var initialsInput = document.querySelector("#initials");
var highScoreScreen = document.querySelector("#highScoreScreen");
var timeLeft = 75
var timerInput = document.querySelector("#timer");

var score = 0;

start.addEventListener('click', function () {
    questionContainer.classList.remove("hide")
    startScreen.classList.add("hide")
    displayQuestion();
    timerInput.classList.remove("hide")
    timerInput.textContent = "Time Left " + timeLeft + "s";
    timer();
    scoreElement.classList.remove("hide")
})


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

function displayQuestion() {
    questionContainer.innerHTML = ''

    const section = document.createElement('section')
    section.innerHTML = `<h2>${questions[currentQuestion].question}</h2>
    <button class="answer-button" data-choice="a">a. ${questions[currentQuestion].answers.a}</button>
    <button class="answer-button" data-choice="b">b. ${questions[currentQuestion].answers.b}</button>
    <button class = "answer-button" data-choice="c">c. ${questions[currentQuestion].answers.c}</button>
    <button class="answer-button" data-choice="d">d. ${questions[currentQuestion].answers.d}</button>`

    questionContainer.append(section)

    butttonsCollection = document.getElementsByClassName('answer-button')
    buttonsArray = Array.from(butttonsCollection)

    buttonsArray.forEach((button) => {
        button.addEventListener('click', advance)
    })
};

function advance(e) {
    if (e.target.dataset.choice === questions[currentQuestion].correct) {
        score += 20;
        scoreElement.textContent = `Score: ${score}`
    }
    else {
        timeLeft -= 10;
        if (timeLeft <= 0) endGame()
    }
    console.log(score)
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion()
    } else endGame()
};

function endGame() {
    questionContainer.classList.add("hide")
    endOfGameScreen.classList.remove("hide")
    timerInput.classList.add("hide")
    scoreElement.classList.add("hide")
    document.getElementById("scoreFinal").textContent = score
    populateTable()
}

function timer() {
    var timerInterval = setInterval(() => {
        timeLeft--;
        timerInput.textContent = "Time Left " + timeLeft + "s";
        if (timeLeft <= 0) {
            clearInterval(timerInterval)
            endGame()
        }
    }, 1000);
};

document.getElementById('scoreInput').addEventListener('submit', () => {
    // putting in local storage
    const initials = document.getElementById('initials').value
    const allScoresArray = JSON.parse(localStorage.getItem('allScoresArray'))
    if (!allScoresArray) {
        const newArray = [{ initials, score }]
        localStorage.setItem('allScoresArray', JSON.stringify(newArray))
    } else {
        allScoresArray.push({ initials, score })
        localStorage.setItem('allScoresArray', JSON.stringify(allScoresArray))
    }
    populateTable()
})

function populateTable() {
    const allScoresArray = JSON.parse(localStorage.getItem('allScoresArray'))
    console.log(allScoresArray)
    if (allScoresArray.length) {
        document.getElementById('tableBody').innerHTML = ''
        for (let i = 0; i < allScoresArray.length; i++) {
            const tableRow = document.createElement('tr')
            const initialsTD = document.createElement('td')
            initialsTD.textContent = allScoresArray[i].initials
            const scoreTD = document.createElement('td')
            scoreTD.textContent = allScoresArray[i].score
            tableRow.append(initialsTD, scoreTD)
            document.getElementById('tableBody').append(tableRow)
            console.log(allScoresArray[i])
        }
    }
}

