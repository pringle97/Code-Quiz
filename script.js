let gameStarted = false
//building the questions part of quiz
const questions = [
  {
    question: "Arrays in Javascript can be used to store ____.",
    answers: [
      { text: "numbers", correct: false },
      { text: "booleans", correct: false },
      { text: "strings", correct: false },
      { text: "all of the above", correct: true }
    ]
  },
  {
    question: "Which of the following is NOT a JavaScript Data Type?",
    answers: [
      { text: "string", correct: false },
      { text: "const", correct: true },
      { text: "undefined", correct: false },
      { text: "object", correct: false }
    ]
  },
  {
    question: "What does === operator do?",
    answers: [

      { text: "converts two operands to become the same", correct: false },
      { text: "assign a number to a variable", correct: false },
      { text: "returns true if operands are not equal}", correct: false },
      { text: "returns true when the two operands have the same value without conversion", correct: true }
    ]
  }
]

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

//this makes the questions random, and the index to know which question we are on
let shuffledQuestions, currentQuestionIndex
//clicking the start game moves through the index to the next question

//incrementing to next question
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  console.log(currentQuestionIndex)
  if (shuffledQuestions.length === currentQuestionIndex) {
    endQuiz()
  }
  setNextQuestion()

})

let timeleft = 60;
const timer = () => {
  if (!gameStarted) {
    return;
  }
  document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp" + "seconds remaining";
  timeleft -= 1;
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Time is up!"
  }
}
let downloadTimer = setInterval(timer, 1000)
startButton.addEventListener('click', startGame)

//making startgame actually start the quiz, hides start button and removing hide shows the questions
function startGame() {
  gameStarted = true
  startButton.classList.add('hide')
  // shuffles questions to get a random one 
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
//setting what next question will do
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//displays questions and checks if selected answer is correct on click
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
//this gets rid of previous questions and answers
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
      (answerButtonsElement.firstChild)
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

//allowing user to pick an answer and it actually doing something
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (!correct) {
    timeleft = timeleft - 5;
  }
  nextButton.classList.remove('hide')
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function endQuiz() {
  document.getElementById('scores').classList.remove('hide')
  clearInterval(downloadTimer)
  question.classList.add('hide')
}

const submitScore = document.getElementById('submitScore') 
  document.getElementById('submitScore').addEventListener('click', event => {
    event.preventDefault()
    let username = document.getElementById('username')
    localStorage.setItem('username', username.value)
    localStorage.setItem('score', timeleft)
    let displayScores = document.getElementById('displayScores')
    let highscoreElem = document.createElement(`div`)
    let score = JSON.parse(localStorage.getItem('score')) || []
    highscore.innerHTML = `
    <h1>${username.value}</h1>
    <h1>${score}</h1>
    `
    displayScores.classList.remove('hide')
    })
  

//before using localstorage.setItem, you add the new values to the arrays and change your submit score function to add your scores to the existing arrays
//then .setItem saves the array instead of the score itself
//push
//let scores = JSON.parse(localStorage.getItem('scores')) || [];
//let usernames = JSON.parse(localStorage.getItem('usernames')) || [];

