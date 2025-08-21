const uiText = {
  title: {
    en: "Quiz Time!",
    fr: "C'est l'heure du quiz !"
  },
  next: {
    en: "Next",
    fr: "Suivant"
  },
  loading: {
    en: "Loading question...",
    fr: "Chargement de la question..."
  },
  language: {
    en: "Language:",
    fr: "Langue :"
  },
  restart: {
    en: "Restart Quiz",
    fr: "Recommencer le quiz"
  }
};

const questions = [
  {
    question: {
      en: "What is Kaneki's favorite book?",
      fr: "Quel est le livre préféré de Kaneki ?"
    },
    choices: {
      en: ["The Black Goat's Egg", "Crime and Punishment", "Tokyo Ghoul", "Kafka on the Shore"],
      fr: ["L'Œuf de la Chèvre Noire", "Crime et Châtiment", "Tokyo Ghoul", "Kafka sur le rivage"]
    },
    answer: {
      en: "The Black Goat's Egg",
      fr: "L'Œuf de la Chèvre Noire"
    }
  },
  {
    question: {
      en: "Who is the leader of Aogiri Tree?",
      fr: "Qui est le chef de l'Arbre Aogiri ?"
    },
    choices: {
      en: ["Touka Kirishima", "Rize Kamishiro", "Eto Yoshimura", "Shuu Tsukiyama"],
      fr: ["Touka Kirishima", "Rize Kamishiro", "Eto Yoshimura", "Shuu Tsukiyama"]
    },
    answer: {
      en: "Eto Yoshimura",
      fr: "Eto Yoshimura"
    }
  },
  {
    question: {
      en: "What type of ghoul is Kaneki after transformation?",
      fr: "Quel type de goule est Kaneki après sa transformation ?"
    },
    choices: {
      en: ["Bikaku", "Koukaku", "Rinkaku", "Ukaku"],
      fr: ["Bikaku", "Koukaku", "Rinkaku", "Ukaku"]
    },
    answer: {
      en: "Rinkaku",
      fr: "Rinkaku"
    }
  },
  {
    question: {
      en: "What is the name of the coffee shop where ghouls gather?",
      fr: "Quel est le nom du café où les goules se réunissent ?"
    },
    choices: {
      en: ["Anteiku", "Café de Ghoul", "Ghoul Beans", "Tokyo Roast"],
      fr: ["Anteiku", "Café de Ghoul", "Ghoul Beans", "Tokyo Roast"]
    },
    answer: {
      en: "Anteiku",
      fr: "Anteiku"
    }
  },
  {
    question: {
      en: "Who gave Kaneki his iconic mask?",
      fr: "Qui a donné à Kaneki son masque emblématique ?"
    },
    choices: {
      en: ["Uta", "Yomo", "Nishiki", "Hide"],
      fr: ["Uta", "Yomo", "Nishiki", "Hide"]
    },
    answer: {
      en: "Uta",
      fr: "Uta"
    }
  },
  {
    question: {
      en: "Who gave Luffy his hat?",
      fr: "Qui a donné son chapeau à Luffy ?"
    },
    choices: {
      en: ["Nami", "Zorro", "Rogers", "Shanks"],
      fr: ["Nami", "Zorro", "Rogers", "Shanks"]
    },
    answer: {
      en: "Shanks",
      fr: "Shanks"
    }
  };
   {
    question: {
      en: "What is luffy ultimate goal in life ?",
      fr: "Quel est le but ultime de luffy dans la vie ?"
    },
    choices: {
      en: ["To become handsome", "To find zorro sword", "To get shanks recognition", "To become the pirate king"],
      fr: ["Devenir beau", "Trouver l'épée de zorro", "Obtenir la reconnaissance de shanks", "Devenir le roi des pirates"]
    },
    answer: {
      en: "To become the pirate king",
      fr: "Devenir le roi des pirates"
    }
  };
 {
    question: {
      en: "What is the name of the ship used by the straw hat pirates afer the going merry ?",
      fr: "Quel est le nom du navire utilisé par l'équipage au chapeau de paille aprés le going marrry ?"
    },
    choices: {
      en: ["Thousand sunny", "Red force", "Moby dick", "Straw hat arroww"],
      fr: ["Thousand sunnny", "Force rouge", "Moby dick", "La flèche du chapeau de paille"]
    },
    answer: {
      en: "Thousand sunny",
      fr: "Thousand sunny"
    }
  }
];

let currentQuestionIndex = 0;
let score = 0;
let currentLang = "en";

const quizTitle = document.getElementById("quiz-title");
const nextBtn = document.getElementById("next-btn");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");
const langSelect = document.getElementById("lang-select");
const langLabel = document.getElementById("lang-label");
const restartBtn = document.getElementById("restart-btn");

function updateUITexts() {
  if (quizTitle) quizTitle.textContent = uiText.title[currentLang];
  if (nextBtn) nextBtn.textContent = uiText.next[currentLang];
  if (langLabel) langLabel.textContent = uiText.language[currentLang];
  if (restartBtn) restartBtn.textContent = uiText.restart[currentLang];
}

if (langSelect) {
  langSelect.value = currentLang;
  langSelect.onchange = function() {
    currentLang = langSelect.value;
    resetQuiz();
    updateUITexts();
  };
}

function showQuestion() {
  updateUITexts();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.style.display = "block";
  choicesEl.style.display = "block";
  questionEl.textContent = currentQuestion
    ? currentQuestion.question[currentLang]
    : uiText.loading[currentLang];
  choicesEl.innerHTML = "";
  nextBtn.style.display = "none";
  if (restartBtn) restartBtn.style.display = "none";

  if (currentQuestion) {
    currentQuestion.choices[currentLang].forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.classList.add("choice-btn");
      button.onclick = () => selectAnswer(button, choice);
      choicesEl.appendChild(button);
    });
  }
}

function selectAnswer(button, choice) {
  const correct = questions[currentQuestionIndex].answer[currentLang];
  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (choice === correct) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
    buttons.forEach(btn => {
      if (btn.textContent === correct) btn.classList.add("correct");
    });
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
  scoreEl.textContent = currentLang === "fr"
    ? `Vous avez obtenu ${score} sur ${questions.length} !`
    : `You scored ${score} out of ${questions.length}!`;
  if (restartBtn) {
    restartBtn.style.display = "inline-block";
  }
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreEl.style.display = "none";
  if (restartBtn) restartBtn.style.display = "none";
  showQuestion();
}

if (restartBtn) {
  restartBtn.onclick = () => {
    resetQuiz();
    updateUITexts();
  };
}

// Initial UI text setup
updateUITexts();
showQuestion();


