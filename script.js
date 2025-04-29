const questions = [
  {
    question: "What is Curlycal’s real name?",
    choices: ["Jamal Anderson", "Jayden Avelino", "Jayden Anderson", "Jamal Avelino"],
    answer: "Jayden Avelino"
  },
  {
    question: "What’s my favorite color?",
    choices: ["Blue", "Green", "Red", "Black"],
    answer: "Red"
  },
  {
    question: "What’s my biggest fear?",
    choices: [
      "Getting jumped while taking a piss",
      "The dark",
      "Spiders",
      "Being rejected"
    ],
    answer: "Getting jumped while taking a piss"
  },
  {
    question: "If I had an orange cat what would I name it? (male):",
    choices: ["Ale", "Timmy", "Cory", "Tamale"],
    answer: "Ale"
  },
  {
    question: "What’s my favorite movie?",
    choices: ["Star Wars", "A Minecraft Movie", "The Truman Show", "Spider Verse Movie Series"],
    answer: "Spider Verse Movie Series"
  },
  {
    question: "When is my birthday?",
    choices: ["6/20", "9/25", "12/12", "6/25"],
    answer: "6/25"
  },
  {
    question: "If I had a million dollars, what’s the first thing I would buy?",
    choices: ["Cat", "House", "PC", "Food"],
    answer: "PC"
  },
  {
    question: "If I could have any superpower, which one would I pick?",
    choices: ["Super speed", "Teleportation", "Flight", "Super Strength"],
    answer: "Teleportation"
  },
  {
    question: "What's one thing we always do together?",
    choices: ["Play Roblox", "Goon", "Goon", "Goon"],
    answer: "Play Roblox"
  },
  {
    question: "What’s my favorite fast food place?",
    choices: ["Wendys", "Burger King", "Arbys", "McDonalds"],
    answer: "McDonalds"
  },
  {
    question: "Am I more of a cat person or a dog person?",
    choices: ["Cat", "Dog"],
    answer: "Cat"
  },
  {
    question: "Would I rather live in the city or the countryside?",
    choices: ["City", "Country"],
    answer: "City"
  },
  {
    question: "What’s one thing I hate doing?:",
    choices: [
      "Going to school",
      "Walking by myself somewhere",
      "Drawing",
      "Talking to sped people"
    ],
    answer: "Walking by myself somewhere"
  },
  {
    question: "What’s my favorite ice cream flavor?",
    choices: ["Strawberry", "Mango mango mango mango", "Chocolate", "Vanilla"],
    answer: "Mango mango mango mango"
  },
  {
    question: "If I could meet one celebrity, who would it be?",
    choices: ["Drake", "The Rock", "Kendrick Lamar", "Ice Spice"],
    answer: "Kendrick Lamar"
  },
  {
    question: "Do I like horror movies, yes or no?",
    choices: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "What’s my biggest pet peeve?",
    choices: [
      "Being late",
      "Slow Drivers",
      "Dishes in the sink",
      "Chewing with mouth open/Loud chewers"
    ],
    answer: "Chewing with mouth open/Loud chewers"
  },
  {
    question: "What app do I spend the most time on?",
    choices: ["Instagram", "Youtube", "Discord", "Roblox"],
    answer: "Instagram"
  },
  {
    question: "What’s my favorite holiday?",
    choices: ["Christmas", "Halloween", "Easter", "Thanksgiving"],
    answer: "Halloween"
  },
  {
    question: "Would I rather be super rich or super famous?",
    choices: ["Super Rich", "Super Famous"],
    answer: "Super Rich"
  },
  {
    question: "What’s my favorite type of music?",
    choices: ["K-pop", "Rap/Hip Hop", "Trill", "Pop"],
    answer: "Rap/Hip Hop"
  },
  {
    question: "Favorite Sport?",
    choices: ["Volleyball", "Soccer", "Basketball", "American Football"],
    answer: "Basketball"
  },
  {
    question: "Favorite Chocolate?",
    choices: ["M&Ms", "KitKat", "Snickers", "Hersheys"],
    answer: "Hersheys"
  },
  {
    question: "Do I like spicy food?",
    choices: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Are you my favorite person in the world and do ily?",
    choices: ["Yes, No", "Yes, Yes", "No, Yes", "No, No"],
    answer: "Yes, Yes"
  }
];
let currentQuestion = -2;
let score = 0;
let selectedAnswer = null;

const quizContainer = document.getElementById("quiz-container");

function renderStartPage() {
  quizContainer.innerHTML = `
    <h1>The Curlycal Quiz</h1>
    <p>Are you a real or a fake: the ultimate question..</p>
    <button onclick="nextQuestion()">Start</button>
  `;
}

function renderQuestion() {
  const q = questions[currentQuestion];
  quizContainer.innerHTML = `
    <h2>Question ${currentQuestion + 1} of ${questions.length}</h2>
    <p>${q.question}</p>
    <div class="choices">
      ${q.choices
        .map(
          (choice, index) => `
        <button onclick="selectAnswer('${choice}')">${choice}</button>
      `
        )
        .join("")}
    </div>
    <button onclick="confirmAnswer()">Continue</button>
  `;
}

function renderResults() {
  const percent = ((score / questions.length) * 100).toFixed(2);
  let rank = "";

  if (score >= 21) rank = "Real One";
  else if (score >= 16) rank = "Bestie";
  else if (score >= 11) rank = "Solid Friend";
  else if (score >= 6) rank = "Kinda Know Me";
  else rank = "Stranger";

  quizContainer.innerHTML = `
    <h2>Results</h2>
    <p>You got ${score} out of ${questions.length} correct.</p>
    <p>That's ${percent}%</p>
    <h3>Rank: ${rank}</h3>
    <p>
      Thanks for playing and now we can play roblox or watch me play ultrakill, 
      but now instead of you telling me, “You pick” instead.. You are picking.
    </p>
    <button onclick="renderFinalQuestion()">Continue</button>
  `;
}

function renderFinalQuestion() {
  quizContainer.innerHTML = `
    <h1 style="color:red; font-family:monospace;">FINAL QUESTION</h1>
    <p style="color:red;">Choose now.</p>
    <div class="choices">
      <button onclick="finalChoice()">Roblox</button>
      <button onclick="finalChoice()">Ultrakill</button>
    </div>
  `;
}

function finalChoice() {
  quizContainer.innerHTML = `<h2 style="color:lime; font-size: 2em;">OK ^_^</h2>`;
  setTimeout(() => {
    document.body.style.background = "black";
    quizContainer.innerHTML = "";
  }, 15000);
}

function selectAnswer(choice) {
  selectedAnswer = choice;
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach((btn) => {
    btn.style.background = btn.textContent === choice ? "#4CAF50" : "#333";
  });
}

function confirmAnswer() {
  if (currentQuestion >= 0 && selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].answer) {
      score++;
    }
  }
  selectedAnswer = null;
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < 0) {
    renderStartPage();
  } else if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    renderResults();
  }
}

// Initial launch
renderStartPage();

