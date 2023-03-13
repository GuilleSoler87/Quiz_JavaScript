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
let currentQuestionIndex;


function hideViews() {
  home.classList.add("hide");
  quiz.classList.add("hide");
  results.classList.add("hide");
}

function showHome() {
  hideViews();
  home.classList.remove("hide");
}

async function getQuestions() {
  try {
    const response = await axios.get(API_URL);
    const questions = response.data.results[0].question;
    const correctAnsw = response.data.results[0].correct_answer;
    const falseAnsw = response.data.results[0].incorrect_answers;
    const allAnswers = [...falseAnsw, correctAnsw];
    const shuffledAnswers = shuffleArray(allAnswers);

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    questionElement.innerHTML = `<p>${questions}</p>`

    shuffledAnswers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer;
      if (answer === correctAnsw) {
        button.dataset.correct = true;
      }
      
     // button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);

    });
    currentQuestionIndex = 0;
    nextButton.classList.add("hide");

    // function setStatusClass(element) {
    //   if (element.dataset.correct) {
    //     element.classList.add("correct");
    //   } else {
    //     element.classList.add("wrong");
    //   }
    // }
    
    // function setNextQuestion() {
    //   resetState();//limpia la pregunta que había
    //   showQuestion(questions[currentQuestionIndex]);//llamamos la función y le pasamos la pregunta actual
    // }
    
    // function selectAnswer() {
    //   Array.from(answerButtonsElement.children).forEach((button) => {
    //     setStatusClass(button);
    //   });

    //   if (questions.length > currentQuestionIndex + 1) {// si quedan preguntas muestra el btn next
    //     nextButton.classList.remove("hide");
    //   } else {//no quedan preguntas entonces muestra el boton restart (que es el btn start)
    //     nextButton.innerText = "Resultados";
    //     nextButton.classList.remove("hide");
    //   }
    // }

  } catch (error) {
    console.error(error);
    alert("No se pudieron obtener las preguntas del quiz. Inténtalo de nuevo más tarde.");
    showHome();
  }
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


homeLink.addEventListener("click", showQuiz);
quizResultsLink.addEventListener("click", showResults);
resultsHomeLink.addEventListener("click", showHome);

