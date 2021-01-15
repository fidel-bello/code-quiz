//used get element by id method to manipulate
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("endQuiz");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("start");
var highscoreContainer = document.getElementById("highscore");
var highscoreDiv = document.getElementById("highScorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highScoreInitials");
var endGameBtns = document.getElementById("endGame");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//question and asnwer array
var questions = [{
    question : "The console.log method is used for __.",
    answerA : "Looping",
    answerB : "Debugging",
    answerC: "Event Listening",
    answerD: "implementing css",
    correctAnswer: "b"},
    {
    question: "Javascript is a __language.",
    answerA: "foreign",
    answerB: "Html",
    answerC: "programming",
    answerD: "arithmatic",
    correctAnswer: "c"},
    {
    question: "Strings can be used in __",
    answerA: "double or single quotes",
    answerB: "brackets",
    answerC: "comments",
    answerD: "parenthesis",
    correctAnswer: "a"},
    {
    question: "Math.Random with math.floor can be be used to retun a random ___",
    answerA: "letter",
    answerB: "function",
    answerC: "variable",
    answerD: "integer",
    correctAnswer: "d"},
    {
    question: "Use if to specify a block of code to be executed if specified conditions is __.",
    answerA: "true",
    answerB: "false",
    answerC: "fake",
    answerD: "real",
    correctAnswer: "a"},
];
    //global variables
    var finalQuestionI = questions.length;
    var currentQuestionI = 0;
    var timeLeft = 76;
    var timeInterval;
    var score = 0;
    var correct;
    //fucntion to cycle through question array and generate the questions and answers
function generateQuestion () {
    gameoverDiv.style.display = "none";
    if (currentQuestionI === finalQuestionI) {
        return showScore();
    }
    var currentQuestion = questions[currentQuestionI];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.answerA;
    buttonB.innerHTML = currentQuestion.answerB;
    buttonC.innerHTML = currentQuestion.answerC;
    buttonD.innerHTML = currentQuestion.answerD;
}; 
//function to hide start button displaying first quiz question and also timer
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuestion();
    timeInterval = setInterval(function(){
        timeLeft--;
        quizTimer.textContent = "time left: " + timeLeft;
        if(timeLeft === 0) {
            clearInterval (timeInterval);
            showScore();
        }
    },1000);
}
//added event listener to start quiz
startQuizButton.addEventListener("click", startQuiz)


