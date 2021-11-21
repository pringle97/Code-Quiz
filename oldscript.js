//timer
document.getElementById("gameStart").addEventListener("click", function () {
  let timer = 60;

  let downloadTimer = setInterval(function function1() {
    document.getElementById("countdown").innerHTML = timer +
      "&nbsp" + "seconds remaining";

    timer -= 1;
    if (timer <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!"
    }
  }, 1000);

  console.log(countdown);
});

const myQuestions = [
  {
    question: "Arrays in Javascript can be used to store ____.",
    answers: {
      a: "numbers",
      b: "other arrays",
      c: "booleans",
      d: "strings",
      e: "all of the above",
    },
    correctAnswer: "e"
  },
  {
    question: "Which of the following is NOT a JavaScript Data Type?",
    answers: {
      a: "string",
      b: "const",
      c: "undefined",
      d: "object",
    },
    correctAnswer: "b"
  },
  {
    question: "What does === operator do?",
    answers: {
       "converts two operands to become the same",
       "assign a number to a letiable",
      "returns true if operands are not equal",
      d: "returns true when the two operands have the same value without conversion",
    },
    correctAnswer: "d"
  }
];
let score = 0;
let downloadTimer
const quizEnd() => {
  clearInterval(timer)
}
const submitBtn = document.getElementById("submitButton");
const startBtn = document.getElementById("startButton");


let savedScores = JSON.parse(localStorage.getItem('highScore')) || []
function saveScore() {
  let username = document.querySelector('usernameInitials').value 

  highscore.push({
    username: username,
    score: score + countdownTimer
  })

  localStorage.setItem("score", JSON.stringify(highscore))
}