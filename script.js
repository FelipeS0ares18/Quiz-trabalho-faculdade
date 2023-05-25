const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
// Selecionando o botão Reiniciar pelo id
const btnRestart = document.querySelector("#btnRestart");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
 content.style.display = "flex";
 contentFinish.style.display = "none";

 currentIndex = 0;
 questionsCorrect = 0;
 loadQuestion();
};

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
 textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
 content.style.display = "none";
 contentFinish.style.display = "flex";
}

function loadQuestion() {
 spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
 const item = questions[currentIndex];
 answers.innerHTML = "";
 question.innerHTML = item.question;

 item.answers.forEach((answer) => {
 const div = document.createElement("div");

 div.innerHTML = `
 <button class="answer" data-correct="${answer.correct}">
 ${answer.option}
 </button>
 `;

 answers.appendChild(div);
 });

 document.querySelectorAll(".answer").forEach((item) => {
 item.addEventListener("click", nextQuestion);
 });
}

loadQuestion();

// Código para o modal
// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém o botão que abre o modal
var btn = document.getElementById("myBtn");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abra o modal 
btn.onclick = function() {
modal.style.display = "block";
}

// Quando o usuário clica em <span> (x), feche o modal
span.onclick = function() {
modal.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
