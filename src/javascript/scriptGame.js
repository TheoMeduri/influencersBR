const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnVlt = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnVlt.addEventListener("click", () => {
    window.location.href = "../../";
    content.style.display = "flex";
    contentFinish.style.display = "none";
    currentIndex = 0;
    questionsCorrect = 0;
});

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    textFinish.textContent = `Você acertou ${questionsCorrect} de ${questions.length}.`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.textContent = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.textContent = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");
        div.innerHTML = `<button class="answer" data-correct="${answer.correct}">${answer.option}</button>`;
        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();
