const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");
const homeLink = document.querySelector(".home-link");
const resultsButton = document.getElementById("result-btn");
const resetButton = document.getElementById("reset-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resetButtonLink = document.querySelector(".quiz-reset-link");
const quizResultsLink = document.querySelector(".quiz-results-link");
const resultsHomeLink = document.querySelector(".results-home-link");
const finalResults = document.getElementById("finalResults")
const API_URL = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple";
let currentQuestionIndex;
let score = 0;
let buttons = [];
let attempt = 0;
let totalScores = []
let questions = []
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
  resetButton.classList.remove("hide");
  score = 0
  localStorage.setItem("score", score)
  questions = []
  questionElement.innerHTML = ""
  answerButtonsElement.innerHTML = ""
  updateGrafic();
}
// función que trae las preguntas del API
async function getQuestions() {
  try {
    const response = await axios.get(API_URL);
    questions = response.data.results;
    let currentQuestionIndex = 0;

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
        questionElement.innerHTML = "<h4>No hay más preguntas.</h4>";
        answerButtonsElement.innerHTML = "";
        resultsButton.classList.remove("hide")
        resetButton.classList.add("hide");

      }
    }
    // función que pinta las preguntas y los botones de las posibles respuestas
    function showQuestion(question, shuffledAnswers, correctAnsw) {
      questionElement.innerHTML = `<h4>${question}</h4>`;

      answerButtonsElement.innerHTML = "";


      shuffledAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer;
        button.classList.add("btn", "btn-primary", "d-block", "mt-3", "btn-lg");
        if (answer === correctAnsw) {
          button.dataset.correct = true;

        }

        button.addEventListener("click", () => {
          revealAnswers()
          if (button.dataset.correct) {
            score++
            localStorage.setItem('score', score)
          }
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
// esta función colorea los botones, verde correcta, y rojas incorrectas todas a la vez
function revealAnswers() {
  buttons.forEach((button) => {
    if (button.dataset.correct) {
      button.classList.add("btn-success");
    } else {
      button.classList.add("btn-danger");
    }
    // cuando seleccionas una opción, se bloquean todas y no te permite cambiar
    button.disabled = true;
  })
}

// randomiza coge todo el contenido de un array, y devuelve otro array con el mismo contenido pero en posiciones diferentes aleatorias
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
  getQuestions();
  quiz.classList.remove("hide");
}

// traerá del local Storage la suma de todos los valores recogidos durante el último Quiz, un array historial de todos los realizados
function showResults() {
  hideViews();
  finalResults.innerHTML = localStorage.getItem('score')
  results.classList.remove("hide");
  totalScores = JSON.parse(localStorage.getItem("scores")) || [];
  totalScores.push(score)
  localStorage.setItem("scores", JSON.stringify(totalScores));
}


homeLink.addEventListener("click", showQuiz);
resetButtonLink.addEventListener("click", showHome);
quizResultsLink.addEventListener("click", showResults);
resultsHomeLink.addEventListener("click", showHome);

//funcion del grafico
let graficWigth = JSON.parse(localStorage.getItem('scores'))
const graficLength = graficWigth.slice(-10);
const grafic = document.getElementById('grafica')

const myGrafic = new Chart(grafic, {
  type: 'line',
  data: {
    labels: graficLength,
    datasets: [{
      label: 'Puntuacion',
      data: graficLength,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1.5
    }]
  }
})

function updateGrafic() {
  // Recuperar el array del localStorage y convertirlo a un objeto
  let graficWigth = JSON.parse(localStorage.getItem('scores'));
  const graficLength = graficWigth.slice(-10);
  
  // Actualizar los datos del gráfico y las etiquetas
  myGrafic.data.labels = graficLength.map((_, index) => `Elemento ${index + 1}`);
  myGrafic.data.datasets[0].data = graficLength;
  
  // Actualizar el gráfico en el navegador
  myGrafic.update();
}