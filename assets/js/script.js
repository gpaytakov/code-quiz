var questionBank = [
    {
        question: "What is a factory function?",
        choices: ["A function that takes an object as an argument and modifies it", "A function that returns an array of objects", "A function that returns an onject", "A function that returns a string of objects"],
        answer: "A function that returns an onject"
    },
    {
        question: "Which of the following Object methods can be used to copy all of the properties of an object into a new object?",
        choices: ["Object.assign()", "Object.keys()", "Object.entries()", "myObject.hasOwnProperty()"],
        answer: "Object.assign()"
    },
    {
        question: "What is a method?",
        choices: ["A method is property with a function as its value.", "A method is a general term used to describe how to create objects.", "A metod is a function that takes an object as its parameter.", "A method is a function can be called directly by its name."],
        answer: "A method is property with a function as its value."
    },
    {
        question: "What is a globally scoped variable?",
        choices: ["A variable that is accessible to any part of the program.", "A variable that is accessible in a block, and only inside a block.", "A variable that is defined in a function.", "A variable that is also a parameter."],
        answer: "A variable that is accessible to any part of the program."
    },
    {
        question: "Which best defines a variable with block scope?",
        choices: ["A variable that is available outside of a block.", "A variable that is accessible in a block, and only inside a block.", "A variable that is available throughout a program.", "A variable that is available within a function."],
        answer: "A variable that is accessible in a block, and only inside a block."
    }
];
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var introInfo = document.querySelector(".start-quiz");
var questionPrompt = document.querySelector(".question-prompt");
var choice1 = document.getElementById('c1');
// var choice2 = document.querySelector(".c2");
// var choice3 = document.querySelector(".c3");
// var choice4 = document.querySelector(".c4");
var timeLeft = 60

function startTimer() {
    // display time
    if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // execute a function to end the game
        showResult();
      }
}

function getQuestion() {
    for (var i = 0; i < questionBank.length; i++) {
        questionPrompt.innerHTML = questionBank[i].question;
        choice1.innerHTML = questionBank[i].choices[0];
        // choice2.textContent = questionBank[i].choices[1];
        // choice3.textContent = questionBank[i].choices[2];
        // choice4.textContent = questionBank[i].choices[3];
    }
}

function showResult() {

}

// create a function to start a quiz
function startQuiz() {
    // hide class to the inroInfo element
    introInfo.classList.add("hide");
    // start the timer
    var quizTimer = setInterval(startTimer, 1000);
    
    // make the first question appear
    getQuestion();
}

startBtn.addEventListener("click", startQuiz)


