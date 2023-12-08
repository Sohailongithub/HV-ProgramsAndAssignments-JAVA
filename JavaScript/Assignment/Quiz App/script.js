const quizData = [
    {
      question: "What does HTML stand for?",
      a: "Hyper Text Markup Language",
      b: "High-level Text Manipulation Language",
      c: "High-level Text Manipulation Language",
      d: "Home Tool Markup Language",
      correct: "a"
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      a: "color",
      b: "text-color",
      c: "font-color",
      d: "foreground-color",
      correct: "a"
    },
    {
      question: "Which JavaScript keyword is used to declare a variable?",
      a: "variable",
      b: "var",
      c: "let",
      d: "const",
      correct: "b"
    },
    {
        question: "What is the purpose of the 'document.getElementById()' method in JavaScript?",
        a: "To get the value of an element",
        b:"To change the content of an element",
        c:"To retrieve an HTML element with a specified ID",
        d:"To create a new HTML element",
        correct: "c"
    },
    {
        question: "Which HTML tag is used to link an external CSS file?",
        a:"css",
        b:"style",
        c:"external",
        d:"link",
        correct: "d"
    }
];

const quiz= document.getElementById('quiz')
const answerEls= document.querySelectorAll('.answer')  
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn= document.getElementById('submit')

let currentQuiz = 0;
let score = 0;


loadQuiz()

function loadQuiz() {
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let selectedAnswer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.id;
        }
    });
    return selectedAnswer;
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++ 
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You Answered ${score}/${quizData.length} Questions correctly</h2>
<button onclick="location.reload()">Reload</button>`;

        }
    }
})