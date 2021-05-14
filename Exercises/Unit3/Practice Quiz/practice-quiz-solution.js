"use strict";

let questions = [
  {
    question: "What is the collective noun for a group of unicorns?",
    answers: {
      a: "A blessing",
      b: "A union",
      c: "A cloud",
    },
    correct: "a",
  },
  {
    question: "What is the most common color of toilet paper in France?",
    answers: {
      a: "White",
      b: "Blue",
      c: "Pink",
    },
    correct: "c",
  },
  {
    question: "What were the first ice hockey pucks made out of?",
    answers: {
      a: "Smashed cans",
      b: "Frozen cow dung",
      c: "Slab of salami",
    },
    correct: "b",
  },
  {
    question: "Who invented the word vomit?",
    answers: {
      a: "Mark Twain",
      b: "D.H. Lawrence",
      c: "William Shakespeare",
    },
    correct: "c",
  },
  {
    question: "Where was the fortune cookie invented?",
    answers: {
      a: "Shanghai",
      b: "San Francisco",
      c: "Singapore",
    },
    correct: "b",
  },
];

function createQuiz() {
  const quiz = document.querySelector(".quiz");
  const button = document.querySelector("button");
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
  console.log(quizText);

  quiz.insertAdjacentHTML("afterbegin", quizText);
}

createQuiz();

const form = document.forms[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  new FormData(form);
});

form.addEventListener("formdata", (event) => {
  const data = event.formData;
  const entries = [...data.entries()];
  let h2 = '';
  let totalScore = 0;

  entries.forEach((current, index) => {

    h2 = document.querySelector(`h2:nth-of-type(${index + 1})`);
    
    if (current[1] === questions[index].correct) {
        totalScore += 1;
        h2.style.color = 'green';
        h2.classList.add('yes');
    } else {
        h2.style.color = "red";
        h2.classList.add('no');
    }

  });

  document.querySelector('span').innerHTML = `${totalScore}/${questions.length}`;
  console.log(totalScore);
});
