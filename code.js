//used get element by id method to manipulate
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("endQuiz");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("start");
var highscoreContainer = document.getElementById("highScore");
var highscoreDiv = document.getElementById("highScorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highScoreInitials");
var endGameBtns = document.getElementById("endGame");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("Score");
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
    question: "Use 'if' to specify a block of code to be executed if specified conditions is __.",
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
function generateQuestion(){
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
//function to hide begin button displaying first quiz question and also timer
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuestion();
    timeInterval = setInterval(function(){
        timeLeft--;
        quizTimer.textContent = "time left: " + timeLeft;
        if(timeLeft <= 0) {
            clearInterval(timeInterval);
            showScore();
        }
    }, 1000);
    quizBody.style.display = "block";
}
// function that dipslays score after quiz or when timer is runs out
function showScore(){
    quizBody.style.display= "none";
    gameoverDiv.style.display= "flex";
    clearInterval(timeInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + questions.length + " correct!";
}
//on click for the submit and pushing user score to the array and saving into the local storage.
submitScoreBtn.addEventListener("click", function highscore(){

    if(highscoreInputName.value === "") {
        alert("initials cannot be blank");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var cuurentHighscore = {
            name: currentUser,
            score : score
        };
        gameoverDiv.style.display= "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";

        savedHighscores.push(cuurentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscore();
    }
});
//funnction that generates saved scores and puts in high scores
function generateHighscore (){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var scores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i = 0; i <scores.length; i++) {
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
         newName.textContent = scores[i].name;
         newScore.textContent = scores[i].score;
         highscoreDisplayName.appendChild(newName);
         highscoreDisplayScore.appendChild(newScore);
    
}
};
//displayus highscores
function showHighscore(){
    startQuizDiv.style.display = "none";
    gameoverDiv.style.style = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";
    generateHighscore();
}

//clears score and intitals
function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}
//function to redo the quiz
function replayQuiz(){
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionI = 0;
}

//function that checks answers and if wrong will take of 20 sec of timer for penalty
function checkAnswer (answer){
    correct = questions[currentQuestionI].correctAnswer;

    if(answer === correct && currentQuestionI !== finalQuestionI){
        score++;
        currentQuestionI++;
        generateQuestion();
    }else if(answer !==correct && currentQuestionI !== finalQuestionI){
        currentQuestionI++;
        generateQuestion();
        timeLeft -=20
    }else{
        showScore();
    }
};


//added event listener to start quiz
startQuizButton.addEventListener("click", startQuiz)