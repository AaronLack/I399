//Aaron Lack I399 SP21 Project 3
'use strict'

//Algorithm
//When a user hits submit, display when the question was right or wrong.
//update the score, but display this at the end. 
//when user hits the submit button, display the next question
//Update the index tracker. 
//Should be using displayQuestions to show next question, but dynamically created, then will add it underneath instead of thext page. So you need to clear text content. 

//Quiz Questions: as an array, about myself
let questions = [
    {
      question: "Where was Aaron born?",
      answers: {
        a: "Chicago, IL",
        b: "Indianapolis, IN",
        c: "Scottsdale, AZ",
      },
      correct: "c",
    },
    {
      question: "What is Aaron's favorite chain reasturant?",
      answers: {
        a: "Lou Malnati's Deep Dish Pizza",
        b: "Noodles & Co",
        c: "Chipolte",
      },
      correct: "a",
    },
    {
      question: "What is the farthest distance Aaron has biked?",
      answers: {
        a: "50 miles",
        b: "104 miles",
        c: "82 miles",
      },
      correct: "b",
    },
    {
      question: "What comapny is Aaron interning at this summer?",
      answers: {
        a: "ServiceNow",
        b: "Eli Lily",
        c: "PwC",
      },
      correct: "a",
    },
    {
      question: "What is Aaron's favorite dessert?",
      answers: {
        a: "Ice Cream",
        b: "Cookies",
        c: "Cake",
      },
      correct: "b",
    },
  ];

//Function taken from class in the quiz activity
function createQuiz() {
    const quiz = document.querySelector(".quiz");
    let quizText = "";
    for (let [index, question] of questions.entries()) {
        quizText += `<h2>${question.question}</h2>`;
        for (const property in question.answers) {
            quizText += `<p>
                    <input type="radio" name="Q${index}" id="choice_${property}" value="${property}">
                    <label for="choice_${property}">${question.answers[property]}</label>
                </p>`;
        }
    }
    quiz.insertAdjacentHTML("afterbegin", quizText);
}

createQuiz();

//Udates the score and circle based on what the user puts in
let totalScore = 0;
function checkAnswer() {
    let current = questions[indexTracker];
    let allInputs = document.querySelectorAll('input');
    for(const element of allInputs) {
        if(element.checked) {
            if(element.value === current.correct)  {
                console.log("Got the Right Answer");
                totalScore++;
                console.log(totalScore);
                //Change the styles of the circles to be green
                document.getElementById(`${indexTracker}`).style.backgroundColor = 'green';
            }
            else {
                console.log("Wrong Answer");
                console.log(current.correct);
                console.log("What user answers ", element.value);
                //Change the styles of the circles to be red
                document.getElementById(`${indexTracker}`).style.backgroundColor = 'red';
            }
        }
    }
    console.log(`checkAnswer${indexTracker}`);
    document.querySelector('span').innerHTML = `${totalScore}/${questions.length}`;
}

//This method lets us see the questions one at a time
const quiz = document.querySelector(".quiz");
let indexTracker = 0;
function displayQuestions() {
    clearText(); //Clears the text before the next question
    let quizText = ""; //This has to stay in the function
    let current = questions[indexTracker];
    // console.log(current);
    // console.log(current.question);
    quizText += `<h2>${current.question}</h2>`;
    for (const property in current.answers) {
        quizText += `<p>
            <input type="radio" name="Q${indexTracker}" id="choice_${property}" value="${property}">
            <label for="choice_${property}">${current.answers[property]}</label>
            </p>`;
    }
    quiz.insertAdjacentHTML("afterbegin", quizText);
}

//Adds event listeners to the button
const submitButton = document.querySelector(".submit");
submitButton.addEventListener('click', nextQuestion);

//Helps with seeing one quesition at a time
function clearText() {
    quiz.innerHTML = "";
}

//A function to help move onto the next question
function nextQuestion() {
    checkAnswer();
    //If the quiz is finished: hide buttons, stop clock 
    if(indexTracker === questions.length-1) {
        //Building up the playagain button in JS instead of hmtl. 
        quiz.innerHTML = `<p><button type="button" class="restart"> Play Again? </button></p>`;
        let restart = document.querySelector('.restart');
        restart.addEventListener('click', playAgain);
        //Stop the watch and hide the submit button
        stopWatch();
        submitButton.style.display='none';
        document.getElementById('time').style.display='flex';     

    }
    else {
        indexTracker++;
        displayQuestions();
        // console.log("index tracker", indexTracker);
    }
}

//A function to reset the game once played again
function playAgain() {
    //When the again button is clicked, reset index tracker to 0.
    indexTracker = 0;
    document.querySelector('span').innerHTML='';
    totalScore = 0;
    submitButton.style.display='flex';
    document.querySelector('.restart').style.display='none';
    displayQuestions();
    //Resets all the circles to be white
    for(let i = 0; i<5; i++) {
        document.getElementById(`${i}`).style.backgroundColor = 'white'
    }
    //timer methods
    //I used this link to help me display time on correctly: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
    resetWatch();
    timeInterval = setInterval(startWatch, 10);
    window.onload = timeInterval;
}
  
//Timer methods, copied and pasted from the stop watch activity from class. 
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let time = 0;
let totalTime = 0;
let countTimer;
let timeInterval;

function startWatch() {
    time++;
    totalTime = Math.floor(time/100);

    minutes = Math.floor(totalTime/60);
    seconds = totalTime % 60;
    milliseconds = time % 60;

    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    if(milliseconds < 10) {
        milliseconds = '0' + milliseconds;
    }

    //Update HTML
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;
    document.querySelector(".milliseconds").textContent = milliseconds;
    document.getElementById('time').style.display='none';
}

function stopWatch() {
    clearInterval(timeInterval);
    console.log(minutes.seconds,milliseconds);
}

function resetWatch() {
    clearInterval(timeInterval);
    document.querySelector(".minutes").textContent = "00";
    document.querySelector(".seconds").textContent = "00";
    document.querySelector(".milliseconds").textContent = "00";
    time = 0;
}

//Run the program
displayQuestions();
//Starts the timer
timeInterval = setInterval(startWatch, 10);
window.onload = timeInterval;
//I used this link to help with onload:  https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload