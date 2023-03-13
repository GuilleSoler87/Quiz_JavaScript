const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");
const homeLink = document.querySelector(".home-link");
const nextButton = document.getElementById("next-btn");
const resultsButton = document.getElementById("result-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resetButtonLink = document.querySelector(".quiz-reset-link");
const quizResultsLink = document.querySelector(".quiz-results-link");
const resultsHomeLink = document.querySelector(".results-home-link");
const API_URL = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple";
let currentQuestionIndex;

// funciones de visibilidad de navegación 

function hideViews() {
  home.classList.add("hide");
  quiz.classList.add("hide");
  results.classList.add("hide");
  resultsButton.classList.add("hide");
}

function showHome() {
  hideViews();
  home.classList.remove("hide");
}
// función que trae las preguntas del API
async function getQuestions() {
  try {
    const response = await axios.get(API_URL);
    const questions = response.data.results;
    let currentQuestionIndex = 0;
    let score = 0;
    // funcíón que llama a la siguiente pregunta
    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        const nextQuestionObj = questions[currentQuestionIndex];
        const nextQuestion = nextQuestionObj.question;
        const nextCorrectAnsw = nextQuestionObj.correct_answer;
        const nextFalseAnsw = nextQuestionObj.incorrect_answers;
        const nextAllAnswers = [...nextFalseAnsw, nextCorrectAnsw];
        const nextShuffledAnswers = shuffleArray(nextAllAnswers);

        showQuestion(nextQuestion, nextShuffledAnswers, nextCorrectAnsw);
      } else {
        // no hay más preguntas, mostrar mensaje final y guardar puntuación
        questionElement.innerHTML = "<p>No hay más preguntas.</p>";
        answerButtonsElement.innerHTML = "";
        nextButton.classList.add("hide");

        localStorage.setItem("score", score);

      }
    }
    // función que pinta las preguntas y los botones de las posibles respuestas
    function showQuestion(question, shuffledAnswers, correctAnsw) {
      questionElement.innerHTML = `<h4>${question}</h4>`;

      answerButtonsElement.innerHTML = "";
      const buttons = [];

      shuffledAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer;
        button.classList.add("btn", "btn-primary", "d-block", "my-3", "mt-4","btn-lg");
        if (answer === correctAnsw) {
          button.dataset.correct = true;
        }

        button.addEventListener("click", () => {
          buttons.forEach((button) => {
            if (button.dataset.correct) {
              button.classList.add("btn-success");
              // si aprietas respuesta correctAnsw, sumas 1 al local storage
              score++;
            } else {
              button.classList.add("btn-danger");
            }
            // cuando seleccionas una opción, se bloquean todas y no te permite cambiar
            button.disabled = true;
          });
          // cuando ya has seleccionado la respuesta y se bloquean todas a los 2 segundos pasa a la siguiente pregunta
          setTimeout(() => {
            nextQuestion();
          }, 2000);
        });

        answerButtonsElement.appendChild(button);
        buttons.push(button);
      });


    }
    // muestra las preguntas de forma aleatoria, gracias la función que hay debajo shuffleArray
    showQuestion(questions[0].question, shuffleArray([...questions[0].incorrect_answers, questions[0].correct_answer]), questions[0].correct_answer);
  } catch (error) {
    console.error(error);
  }
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// funciones de vista de navegación trae la función principal de mostrar las preguntas con getQuestions
function showQuiz() {
  hideViews();
  quiz.classList.remove("hide");
  getQuestions();
}

// traerá del local Storage la suma de todos los valores recogidos durante el
function showResults() {
  hideViews();
  results.classList.remove("hide");
}


homeLink.addEventListener("click", showQuiz);
resetButtonLink.addEventListener("click", showHome);
quizResultsLink.addEventListener("click", showResults);
resultsHomeLink.addEventListener("click", showHome);

