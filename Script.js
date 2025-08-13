const questions = [
  {
    question: "What is Kaneki's favorite book?",
    choices: ["The Black Goat's Egg", "Crime and Punishment", "Tokyo Ghoul", "Kafka on the Shore"],
    answer: "The Black Goat's Egg"
  },
  {
    question: "Who is the leader of Aogiri Tree?",
    choices: ["Touka Kirishima", "Rize Kamishiro", "Eto Yoshimura", "Shuu Tsukiyama"],
    answer: "Eto Yoshimura"
  },
  {
    question: "What type of ghoul is Kaneki after transformation?",
    choices: ["Bikaku", "Koukaku", "Rinkaku", "Ukaku"],
    answer: "Rinkaku"
  },
  {
    question: "What is the name of the coffee shop where ghouls gather?",
    choices: ["Anteiku", "Café de Ghoul", "Ghoul Beans", "Tokyo Roast"],
    answer: "Anteiku"
  },
  {
    question: "Who gave Kaneki his iconic mask?",
    choices: ["Uta", "Yomo", "Nishiki", "Hide"],
    answer: "Uta"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";
  nextBtn.style.display = "none"; // Hide next button at start

  currentQuestion.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choice-btn");
    button.onclick = () => selectAnswer(button, choice);
    choicesEl.appendChild(button);
  });
}

function selectAnswer(button, choice) {
  const correct = questions[currentQuestionIndex].answer;
  const buttons = document.querySelectorAll(".choice-btn");

  buttons.forEach(btn => btn.disabled = true); // Disable all buttons

  if (choice === correct) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.style.display = "none";
  choicesEl.style.display = "none";
  nextBtn.style.display = "none";
  scoreEl.style.display = "block";
  scoreEl.textContent = `You scored ${score} out of ${questions.length}!`;
}

// Start the quiz
showQuestion();