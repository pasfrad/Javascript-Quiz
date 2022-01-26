var questions = ["Commonly used data types do not include:", "The condition in an if/else statement is enclosed within", "Arrays in JavaScript can be used to store:", "When being assigned to variables, string values must be enclosed within:"]
var answers01 = ["<button onclick=qi(1)> strings</button>", "<button onclick=qi(2)> quotes</button>", "<button onclick=qi(3)> numbers and strings</button>", "<button onclick=endScreen(true)> quotes</button>"]
var answers02 = ["<button onclick=qi(1)> booleans</button>", "<button onclick=qi(2)> curly brackets</button>", "<button onclick=qi(3)> other arrays</button>", "<button onclick=endScreen()> curly brackets</button>"]
var answers03 = ["<button onclick=qc(1)> alerts</button>", "<button onclick=qc(2)> parenthesis</button>", "<button onclick=qi(3)> booleans</button>", "<button onclick=endScreen()> commas</button>"]
var answers04 = ["<button onclick=qi(1)> numbers</button>", "<button onclick=qi(2)> square brackets</button>", "<button onclick=qc(3)> all of the above</button>", "<button onclick=endScreen()> parenthesis</button>"]
var startButton = document.querySelector(".start-button");
var correctAnswer = "Right!"
var wrongAnswer = "Nope!"
var showTimer = document.querySelector(".timerDisplay")
var oneMinute = 60
var timer = 0
var score = 0
var highScores = []
var interval

display = document.querySelector('#time');
startButton.addEventListener("click", startGame);

function startGame() {
    hide.innerHTML = "";
    document.getElementById("hide").disabled = true;
    setQuestion(0)
    timerCount = 10
    startTimer(oneMinute, display);
    score = 0
  }

  function qc(questionNumber) {
    answer.innerHTML = correctAnswer
    setTimeout(() => {answer.innerHTML=""}, 1500)
        A.innerHTML = "" 
        B.innerHTML = ""
        C.innerHTML = ""
        D.innerHTML = ""
        setQuestion(questionNumber)
        score = score + 1
        scoreNumber.innerHTML = score
  }

  function qi(questionNumber) {
    answer.innerHTML = wrongAnswer
    setTimeout(() => {answer.innerHTML=""}, 1500)
        A.innerHTML = "" 
        B.innerHTML = ""
        C.innerHTML = ""
        D.innerHTML = ""
        setQuestion(questionNumber)
        timer = timer - 20
  }

  function setQuestion(questionNumber) {
    question.innerHTML = questions[questionNumber];
    A.innerHTML = answers01[questionNumber]
    B.innerHTML = answers02[questionNumber]
    C.innerHTML = answers03[questionNumber]
    D.innerHTML = answers04[questionNumber]
  }

  function endScreen(result) {
      question.innerHTML = "Game over!"
        A.innerHTML = "" 
        B.innerHTML = ""
        C.innerHTML = ""
        D.innerHTML = ""
        // time.innerHTML = "0:00"
        if (result === true) {
            score = score + 1
            scoreNumber.innerHTML = score
        }
        highScores.push(score)
        highScores.sort()
        highscores.innerHTML = highScores
        clearInterval(interval)
        hide.innerHTML = "Start"
        document.getElementById("hide").disabled = false;
  }

  function startTimer(duration, display) {
    timer = duration;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval)
            endScreen()
        }
    }, 1000);
}