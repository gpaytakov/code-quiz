var questionBank = [
    {
        question: "1What is a factory function?",
        choices: [["A function that takes an object as an argument and modifies it", false], ["A function that returns an array of objects", false], ["A function that returns an onject", true], ["A function that returns a string of objects", false]]
    },
    {
        question: "2What is a factory function?",
        choices: [["A function that takes an object as an argument and modifies it", false], ["A function that returns an array of objects", false], ["A function that returns an onject", true], ["A function that returns a string of objects", false]]
    },
    {
        question: "3What is a factory function?",
        choices: [["A function that takes an object as an argument and modifies it", false], ["A function that returns an array of objects", false], ["A function that returns an onject", true], ["A function that returns a string of objects", false]]
    },
    {
        question: "4What is a factory function?",
        choices: [["A function that takes an object as an argument and modifies it", false], ["A function that returns an array of objects", false], ["A function that returns an onject", true], ["A function that returns a string of objects", false]]
    }
    // {
    //     question: "Which of the following Object methods can be used to copy all of the properties of an object into a new object?",
    //     choices: ["Object.assign()", "Object.keys()", "Object.entries()", "myObject.hasOwnProperty()"],
    //     answer: "Object.assign()"
    // },
    // {
    //     question: "What is a method?",
    //     choices: ["A method is property with a function as its value.", "A method is a general term used to describe how to create objects.", "A metod is a function that takes an object as its parameter.", "A method is a function can be called directly by its name."],
    //     answer: "A method is property with a function as its value."
    // },
    // {
    //     question: "What is a globally scoped variable?",
    //     choices: ["A variable that is accessible to any part of the program.", "A variable that is accessible in a block, and only inside a block.", "A variable that is defined in a function.", "A variable that is also a parameter."],
    //     answer: "A variable that is accessible to any part of the program."
    // },
    // {
    //     question: "Which best defines a variable with block scope?",
    //     choices: ["A variable that is available outside of a block.", "A variable that is accessible in a block, and only inside a block.", "A variable that is available throughout a program.", "A variable that is available within a function."],
    //     answer: "A variable that is accessible in a block, and only inside a block."
    // }
];
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var introInfo = document.querySelector(".start-quiz");
var questionPrompt = document.querySelector(".question-prompt");
var choice1 = document.getElementById("c-1");
var choice2 = document.getElementById('c-2');
var choice3 = document.getElementById('c-3');
var choice4 = document.getElementById('c-4');
var initialsInput = document.querySelector("#initials");
var resultsButton = document.querySelector("#results");
var olEl = document.getElementById("answers-to-choose");

var timeLeft = 60;
var quizTimer;
var runTimer = false;
function startTimer() {
    // display time
    if (runTimer) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(quizTimer);
        // execute a function to end the game
        showResult();
      }
}

// currentQuestionIndex = cQI
var cQI = 0;

function getQuestion() {
    const el = document.querySelector("#quiz-quest");
    console.log(el);
        if (timeLeft === 0 || cQI >= questionBank.length) {
            runTimer = false;
            el.classList.add("hide")
            showResult();
        } else {
            el.classList.remove("hide")
            questionPrompt.innerHTML = questionBank[cQI].question;
            choice1.innerHTML = questionBank[cQI].choices[0][0];
            choice2.innerHTML = questionBank[cQI].choices[1][0];
            choice3.innerHTML = questionBank[cQI].choices[2][0];
            choice4.innerHTML = questionBank[cQI].choices[3][0];
        } 
}
// resultsButton.addEventListener("click", function(event) {
//     event.preventDefault();

//     var quizTaker = {
//         initials: initialsInput.value.trim()
//     }
// });

function showResult() {
    console.log("Show Result");   
}

// create a function to start a quiz
function startQuiz() {
    // hide class to the inroInfo element
    introInfo.classList.add("hide");
    // start the timer
    runTimer = true;
    quizTimer = setInterval(startTimer, 1000);
    
    // make the first question appear
    getQuestion();
}

function olAnswerClick(event) {
    var index = parseInt(event.target.id.split("-")[1])-1;
    console.log(questionBank[cQI].choices[index][1]);
    var tf = questionBank[cQI].choices[index][1];
    cQI++;
        if (!tf) {
        timeLeft = timeLeft-10;
        timerEl.textContent = timeLeft;
    }
    getQuestion()
    //displayCorrectOrWrong();
    //setTimeout(remove correct or wrong, 500);
}

startBtn.addEventListener("click", startQuiz);
olEl.addEventListener("click", olAnswerClick);



