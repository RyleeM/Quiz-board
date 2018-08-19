var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function buildQuiz(){
  var output=[];
  myQuestions.forEach(currentQuestion, questionNumber) => {
  });
  var answers = [];
  for(letter in currentQuestion.answers){
    answers.push(
         `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
       );
     }
     output.push(
       `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join('')} </div>`
     );
   }
 );
 quizContainer.innerHTML = output.join('');
}

}
buildQuiz();

function displayResults(){
  }
submitButton.addEventListener('click', displayResults);

var myQuestions = [
  {
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the best site ever created?",
    answers: {
      a: "SitePoint",
      b: "Simple Steps Code",
      c: "Trick question; they're both the best"
    },
    correctAnswer: "c"
  },
  {
    question: "Where is Waldo really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Sitting in a tree",
      d: "Minding his own business, so stop asking"
    },
    correctAnswer: "d"
  }
];
