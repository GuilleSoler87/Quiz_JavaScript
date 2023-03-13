const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");
const homeLink = document.querySelector(".home-link");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const quizResultsLink = document.querySelector(".quiz-results-link");
const resultsHomeLink = document.querySelector(".results-home-link");
const API_URL = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple";

function hideViews() {
  home.classList.add("hide");
  quiz.classList.add("hide");
  results.classList.add("hide");
}

function showHome() {
  hideViews();
  home.classList.remove("hide");
}

function showQuiz() {
  hideViews();
  quiz.classList.remove("hide");
  getQuestions();
}

function showResults() {
  hideViews();
  results.classList.remove("hide");
}

async function getQuestions() {
  try {
    const response = await axios.get(API_URL);
    questions = response.data.results;
    console.log (questions)
    
  } catch (error) {
    console.error(error);
    alert("No se pudieron obtener las preguntas del quiz. Inténtalo de nuevo más tarde.");
    showHome();
  }
}


homeLink.addEventListener("click", showQuiz);
quizResultsLink.addEventListener("click", showResults);
resultsHomeLink.addEventListener("click", showHome);

