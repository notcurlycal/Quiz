
const quizData = [
    {
        question: "What is Curlycal’s real name?",
        answers: ["Jamal Anderson", "Jayden Avelino", "Jayden Anderson", "Jamal Avelino"],
        correct: 1
    },
    {
        question: "What’s my favorite color?",
        answers: ["Blue", "Green", "Red", "Black"],
        correct: 2
    },
    {
        question: "What’s my biggest fear?",
        answers: ["Getting jumped while taking a piss", "The dark", "Spiders", "Being rejected"],
        correct: 0
    },
    {
        question: "If I had an orange cat what would I name it? (male):",
        answers: ["Ale", "Timmy", "Cory", "Tamale"],
        correct: 0
    },
    {
        question: "What’s my favorite movie?",
        answers: ["Star Wars", "A Minecraft Movie", "The Truman Show", "Spider Verse Movie Series"],
        correct: 3
    },
    {
        question: "When is my birthday?",
        answers: ["6/20", "9/25", "12/12", "6/25"],
        correct: 3
    },
    {
        question: "If I had a million dollars, what’s the first thing I would buy?",
        answers: ["Cat", "House", "PC", "Food"],
        correct: 2
    },
    {
        question: "If I could have any superpower, which one would I pick?",
        answers: ["Super speed", "Teleportation", "Flight", "Super Strength"],
        correct: 1
    },
    {
        question: "What's one thing we always do together?",
        answers: ["Play Roblox", "Goon", "Goon", "Goon"],
        correct: 0
    },
    {
        question: "What’s my favorite fast food place?",
        answers: ["Wendys", "Burger King", "Arbys", "McDonalds"],
        correct: 3
    },
    {
        question: "Am I more of a cat person or a dog person?",
        answers: ["Cat", "Dog"],
        correct: 0
    },
    {
        question: "Would I rather live in the city or the countryside?",
        answers: ["City", "Country"],
        correct: 0
    },
    {
        question: "What’s one thing I hate doing?:",
        answers: ["Going to school", "Walking by myself somewhere", "Drawing", "Talking to sped people"],
        correct: 1
    },
    {
        question: "What’s my favorite ice cream flavor?",
        answers: ["Strawberry", "Mango mango mango mango", "Chocolate", "Vanilla"],
        correct: 1
    },
    {
        question: "If I could meet one celebrity, who would it be?",
        answers: ["Drake", "The Rock", "Kendrick Lamar", "Ice Spice"],
        correct: 2
    },
    {
        question: "Do I like horror movies, yes or no?",
        answers: ["Yes", "No"],
        correct: 0
    },
    {
        question: "What’s my biggest pet peeve?",
        answers: ["Being late", "Slow Drivers", "Dishes in the sink", "Chewing with mouth open/Loud chewers"],
        correct: 3
    },
    {
        question: "What app do I spend the most time on?",
        answers: ["Instagram", "Youtube", "Discord", "Roblox"],
        correct: 0
    },
    {
        question: "What’s my favorite holiday?",
        answers: ["Christmas", "Halloween", "Easter", "Thanksgiving"],
        correct: 1
    },
    {
        question: "Would I rather be super rich or super famous?",
        answers: ["Super Rich", "Super Famous"],
        correct: 0
    },
    {
        question: "What’s my favorite type of music?",
        answers: ["K-pop", "Rap/Hip Hop", "Trill", "Pop"],
        correct: 1
    },
    {
        question: "Favorite Sport?",
        answers: ["Volleyball", "Soccer", "Basketball", "American Football"],
        correct: 2
    },
    {
        question: "Favorite Chocolate?",
        answers: ["M&Ms", "KitKat", "Snickers", "Hersheys"],
        correct: 3
    },
    {
        question: "Do I like spicy food?",
        answers: ["Yes", "No"],
        correct: 0
    },
    {
        question: "Are you my favorite person in the world and do ily?",
        answers: ["Yes, No", "Yes, Yes", "No, Yes", "No, No"],
        correct: 1
    }
];

const finaleQuestion = {
    question: "FINAL QUESTION",
    answers: ["Roblox", "Ultrakill"],
    creepy: true
};

const container = document.getElementById("quiz-container");

let currentQuestion = -1;
let selectedAnswer = null;
let score = 0;

function renderStart() {
    container.innerHTML = `
        <h1>The Curlycal Quiz</h1>
        <p>Are you a real or a fake: the ultimate question..</p>
        <button onclick="nextQuestion()">Start</button>
    `;
}

function renderQuestion() {
    const q = quizData[currentQuestion];
    const choices = q.answers.map((choice, index) => 
        \`<button onclick="selectAnswer(\${index})" id="choice-\${index}">\${choice}</button>\`
    ).join("");

    container.innerHTML = \`
        <h2>\${q.question}</h2>
        <div class="choices">\${choices}</div>
        <button onclick="submitAnswer()">Continue</button>
    \`;
}

function renderFinalScore() {
    const percentage = ((score / quizData.length) * 100).toFixed(2);
    let rank = "";
    if (score >= 21) rank = "Real One";
    else if (score >= 16) rank = "Bestie";
    else if (score >= 11) rank = "Solid Friend";
    else if (score >= 6) rank = "Kinda Know Me";
    else rank = "Stranger";

    container.innerHTML = \`
        <h2>Your Score: \${score}/\${quizData.length}</h2>
        <p>That's \${percentage}%</p>
        <h3>Rank: \${rank}</h3>
        <p>Thanks for playing and now we can play roblox or watch me play ultrakill, but now instead of you telling me, “You pick” instead.. You are picking.</p>
        <button onclick="renderFinale()">Continue</button>
    \`;
}

function renderFinale() {
    container.innerHTML = \`
        <h2 style="font-family: 'Creepster', cursive; color: red; font-size: 3em;">FINAL QUESTION</h2>
        <p style="font-family: 'Creepster', cursive; color: red;">Choose now.</p>
        <button onclick="endGame()">Roblox</button>
        <button onclick="endGame()">Ultrakill</button>
    \`;
}

function endGame() {
    container.innerHTML = \`
        <h2 style="color: green; font-size: 2em;">OK ^_^</h2>
    \`;
    setTimeout(() => {
        container.innerHTML = "";
        document.body.style.backgroundColor = "black";
    }, 15000);
}

function nextQuestion() {
    currentQuestion++;
    selectedAnswer = null;
    if (currentQuestion < quizData.length) {
        renderQuestion();
    } else {
        renderFinalScore();
    }
}

function selectAnswer(index) {
    selectedAnswer = index;
    quizData[currentQuestion].answers.forEach((_, i) => {
        document.getElementById("choice-" + i).style.backgroundColor = i === index ? "#333" : "#4CAF50";
    });
}

function submitAnswer() {
    if (selectedAnswer === null) return;
    if (selectedAnswer === quizData[currentQuestion].correct) score++;
    nextQuestion();
}

renderStart();
