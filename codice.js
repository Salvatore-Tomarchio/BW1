/* let punteggio = 0
let domanda = 0

function domandaAttuale() {
    if (domanda < questions.lenght) {
        const domandaNuova = questions[domanda];
        console.log(domandaNuova.question)
        // per mescolare le risposte
        const risposte = [domandaNuova.correct_answer, ...domandaNuova.incorrect_answers]
        risposte.sort(() => Math.random() - 0.5)
        risposte.forEach((risposta, index) => {
            console.log(`${index + 1}.${risposta}`);
        })
        const answerUtente = prompt("scegli la risposta (1-4):")
        verificaRisposta(answerUtente, domandaNuova.correct_answer, risposte)
    } else {
        console.log(` il tuo punteggio finale è: ${punteggio}/${questions.length}`);
    }
}
function verificaRisposta(answerUtente, correct_answer, risposte) {
    if (risposte[answerUtente - 1] === correct_answer) {
        console.log("corretto!\n")
        punteggio++;
    } else {
        console.log("sbagliato!\n")
    }
    domanda++;
    domandaAttuale()
}
domandaAttuale();*/
const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
  let currentQuestion = 0;

  function showQuestion() {
    const questionData = question[currentQuestion];
    const questionBox = document.querySelector(".question-box");

    document.querySelector("h1.hightlight").innerHTML = questionData.question;

    questionBox.innerHTML = ""; //serve a togliere le vecchie opzioni
    let allAnswer = [...questionData.incorrect_answers];
    allAnswer.splice(Math.floor(Math.random() * (allAnswer.length + 1)), 0, questionData.correct_answer)

    allAnswer.forEach((Option) => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.onclick = () => checkAnswer(option);
        questionBox.appendChild(button);
    });
  }

  function checkAnswer(selectAnswer) {
    const questionData = questions[currentQuestion];
    if (selectAnswer === questionData.correct_answer) {
        alert("Risposta corretta");
    } else {
        alert("Risposta sbagliata. Riprova");
    }

    currentQuestion++;
    if(currentQuestion < questions.length) {
        showQuestion();
    } else {
        alert("Quiz completato")
        // qui aggiungere una funzione per mostrare i risultati
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const duration = 30;
    const progressCircle = document.querySelector(".progress-circle");
    const timerText = document.querySelector(".seconds");

    const radius = progressCircle.releasePointerCapture.baseVal.value;
    const circumference = 2 *Math.Pi * radius;
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = "0";

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
    }
    let remainingTime = duration;

    function updateTimer() {
        remainingTime--;
        timerText.textContent = remainingTime;
        const percentage = (remainingTime / duration) * 100;
        setProgress(percentage);
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
        }
    }

    timerText.textContent = duration;
    setProgress(100);
    const timerInterval = setInterval(updateTimer, 1000);
    showQuestion(); //mostra la prima domanda quando la pagina è caricata
  });