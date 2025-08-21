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
  },
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
  },
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
  },
  {
    question: {
      en: "What is Monkey D. Luffy's ultimate goal?",
      fr: "Quel est le but ultime de Monkey D. Luffy ?"
    },
    choices: {
      en: ["To become the Pirate King", "To find the All Blue", "To defeat the Marines", "To protect his crew"],
      fr: ["Devenir le Roi des Pirates", "Trouver l'All Blue", "Vaincre les Marines", "Protéger son équipage"]
    },
    answer: {
      en: "To become the Pirate King",
      fr: "Devenir le Roi des Pirates"
    }
  },
  {
    question: {
      en: "Which ship replaced the Going Merry?",
      fr: "Quel navire a remplacé le Going Merry ?"
    },
    choices: {
      en: ["Thousand Sunny", "Red Force", "Moby Dick", "Flying Lamb"],
      fr: ["Thousand Sunny", "Red Force", "Moby Dick", "Flying Lamb"]
    },
    answer: {
      en: "Thousand Sunny",
      fr: "Thousand Sunny"
    }
  },
  {
    question: {
      en: "Who is the swordsman of the Straw Hat crew?",
      fr: "Qui est le sabreur de l'équipage du Chapeau de Paille ?"
    },
    choices: {
      en: ["Roronoa Zoro", "Sanji", "Usopp", "Brook"],
      fr: ["Roronoa Zoro", "Sanji", "Usopp", "Brook"]
    },
    answer: {
      en: "Roronoa Zoro",
      fr: "Roronoa Zoro"
    }
  },
  {
    question: {
      en: "Which Devil Fruit did Portgas D. Ace eat?",
      fr: "Quel Fruit du Démon Portgas D. Ace a-t-il mangé ?"
    },
    choices: {
      en: ["Mera Mera no Mi", "Gomu Gomu no Mi", "Hie Hie no Mi", "Yami Yami no Mi"],
      fr: ["Mera Mera no Mi", "Gomu Gomu no Mi", "Hie Hie no Mi", "Yami Yami no Mi"]
    },
    answer: {
      en: "Mera Mera no Mi",
      fr: "Mera Mera no Mi"
    }
  },
    {
    question: {
      en: "What is the name of Naruto's signature jutsu?",
      fr: "Quel est le nom du jutsu emblématique de Naruto ?"
    },
    choices: {
      en: ["Rasengan", "Chidori", "Shadow Clone", "Amaterasu"],
      fr: ["Rasengan", "Chidori", "Clone de l'Ombre", "Amaterasu"]
    },
    answer: {
      en: "Rasengan",
      fr: "Rasengan"
    }
  },
  {
    question: {
      en: "Who is the original wielder of the Sharingan?",
      fr: "Qui est le porteur originel du Sharingan ?"
    },
    choices: {
      en: ["Madara Uchiha", "Sasuke Uchiha", "Itachi Uchiha", "Kakashi Hatake"],
      fr: ["Madara Uchiha", "Sasuke Uchiha", "Itachi Uchiha", "Kakashi Hatake"]
    },
    answer: {
      en: "Madara Uchiha",
      fr: "Madara Uchiha"
    }
  },
  {
    question: {
      en: "What beast is sealed inside Naruto?",
      fr: "Quel démon est scellé en Naruto ?"
    },
    choices: {
      en: ["Nine-Tails", "Eight-Tails", "Ten-Tails", "One-Tail"],
      fr: ["Kurama (Neuf-Queues)", "Gyūki (Huit-Queues)", "Jūbi (Dix-Queues)", "Shukaku (Une-Queue)"]
    },
    answer: {
      en: "Nine-Tails",
      fr: "Kurama (Neuf-Queues)"
    }
  },
  {
    question: {
      en: "Who is Naruto's father?",
      fr: "Qui est le père de Naruto ?"
    },
    choices: {
      en: ["Minato Namikaze", "Jiraiya", "Kakashi", "Hiruzen Sarutobi"],
      fr: ["Minato Namikaze", "Jiraiya", "Kakashi", "Hiruzen Sarutobi"]
    },
    answer: {
      en: "Minato Namikaze",
      fr: "Minato Namikaze"
    }
  },
  {
    question: {
      en: "Which organization does Itachi Uchiha join?",
      fr: "Quelle organisation Itachi Uchiha rejoint-il ?"
    },
    choices: {
      en: ["Akatsuki", "Anbu", "Konoha Police", "Sound Four"],
      fr: ["Akatsuki", "Anbu", "Police de Konoha", "Les Quatre du Son"]
    },
    answer: {
      en: "Akatsuki",
      fr: "Akatsuki"
    }
  },
    {
    question: {
      en: "Who is the Dragon Slayer that uses fire magic?",
      fr: "Qui est le Chasseur de Dragons qui utilise la magie du feu ?"
    },
    choices: {
      en: ["Natsu Dragneel", "Gray Fullbuster", "Laxus Dreyar", "Gajeel Redfox"],
      fr: ["Natsu Dragneel", "Gray Fullbuster", "Laxus Dreyar", "Gajeel Redfox"]
    },
    answer: {
      en: "Natsu Dragneel",
      fr: "Natsu Dragneel"
    }
  },
  {
    question: {
      en: "What is Lucy Heartfilia's magic type?",
      fr: "Quel type de magie utilise Lucy Heartfilia ?"
    },
    choices: {
      en: ["Celestial Spirit Magic", "Requip Magic", "Ice-Make Magic", "Transformation Magic"],
      fr: ["Magie des Esprits Stellaires", "Magie de Rééquipement", "Magie de Glace", "Magie de Transformation"]
    },
    answer: {
      en: "Celestial Spirit Magic",
      fr: "Magie des Esprits Stellaires"
    }
  },
  {
    question: {
      en: "Which guild is the main focus of the series?",
      fr: "Quel est le nom de la guilde principale de la série ?"
    },
    choices: {
      en: ["Fairy Tail", "Sabertooth", "Blue Pegasus", "Lamia Scale"],
      fr: ["Fairy Tail", "Sabertooth", "Blue Pegasus", "Lamia Scale"]
    },
    answer: {
      en: "Fairy Tail",
      fr: "Fairy Tail"
    }
  },
  {
    question: {
      en: "Who is the Ice-Make mage in Fairy Tail?",
      fr: "Qui est le mage de Glace dans Fairy Tail ?"
    },
    choices: {
      en: ["Gray Fullbuster", "Erza Scarlet", "Juvia Lockser", "Freed Justine"],
      fr: ["Gray Fullbuster", "Erza Scarlet", "Juvia Lockser", "Freed Justine"]
    },
    answer: {
      en: "Gray Fullbuster",
      fr: "Gray Fullbuster"
    }
  },
  {
    question: {
      en: "What is Erza Scarlet known for?",
      fr: "Pourquoi Erza Scarlet est-elle célèbre ?"
    },
    choices: {
      en: ["Requip Magic", "Healing Magic", "Celestial Magic", "Dragon Slayer Magic"],
      fr: ["Magie de Rééquipement", "Magie de Guérison", "Magie Stellaire", "Magie de Chasseur de Dragons"]
    },
    answer: {
      en: "Requip Magic",
      fr: "Magie de Rééquipement"
    }
  },
    {
    question: {
      en: "What is the name of the power system in My Hero Academia?",
      fr: "Quel est le nom du système de pouvoirs dans My Hero Academia ?"
    },
    choices: {
      en: ["Quirks", "Nen", "Stands", "Devil Fruits"],
      fr: ["Alters", "Nen", "Stands", "Fruits du Démon"]
    },
    answer: {
      en: "Quirks",
      fr: "Alters"
    }
  },
  {
    question: {
      en: "Who is the Symbol of Peace?",
      fr: "Qui est le Symbole de la Paix ?"
    },
    choices: {
      en: ["All Might", "Endeavor", "Deku", "Aizawa"],
      fr: ["All Might", "Endeavor", "Deku", "Aizawa"]
    },
    answer: {
      en: "All Might",
      fr: "All Might"
    }
  },
  {
    question: {
      en: "What is Izuku Midoriya's hero name?",
      fr: "Quel est le nom de héros d'Izuku Midoriya ?"
    },
    choices: {
      en: ["Deku", "Green Flash", "One For All", "Hero Zero"],
      fr: ["Deku", "Éclair Vert", "One For All", "Héros Zéro"]
    },
    answer: {
      en: "Deku",
      fr: "Deku"
    }
  },
  {
    question: {
      en: "Which villain leads the League of Villains?",
      fr: "Quel méchant dirige la Ligue des Vilains ?"
    },
    choices: {
      en: ["Tomura Shigaraki", "Stain", "Dabi", "Overhaul"],
      fr: ["Tomura Shigaraki", "Stain", "Dabi", "Overhaul"]
    },
    answer: {
      en: "Tomura Shigaraki",
      fr: "Tomura Shigaraki"
    }
  },
  {
    question: {
      en: "What is the civilian name of all might ?",
      fr: "Quel est le nom de civil de all might ?"
    },
    choices: {
      en: ["Toshinori Yagi", "Akagami sozu", "Jin dojima", "Azuriya aoi"],
      fr: ["Toshinori Yagi", "Akagami sozu", "Jin dojima", "Azuriya aoi"]
    },
    answer: {
      en: "Toshinori Yagi",
      fr: "Toshinori Yagi"
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




