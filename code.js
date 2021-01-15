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
    ]
