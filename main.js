const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");
const homeLink = document.querySelector(".home-link");
const quizResultsLink = document.querySelector(".quiz-results-link");
const resultsHomeLink = document.querySelector(".results-home-link");

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
}

function showResults() {
    hideViews();
    results.classList.remove("hide");
}

function showResultsFromQuiz() {
    // Aquí se llamaría a la función que procesa los resultados del quiz
    showResults();
}

homeLink.addEventListener("click", showQuiz);
resultsHomeLink.addEventListener("click", showHome);
quizResultsLink.addEventListener("click", showResultsFromQuiz);

// Mostrar la página de inicio al cargar la página
showHome();