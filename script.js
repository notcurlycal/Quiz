// Array of quiz questions and answers
const questions = [
    {
        question: "What is Curlycal’s real name?",
        answers: ["Jamal Anderson", "Jayden Avelino", "Jayden Anderson", "Jamal Avelino"],
        correctAnswer: "Jayden Avelino"
    },
    {
        question: "What’s my favorite color?",
        answers: ["Blue", "Green", "Red", "Black"],
        correctAnswer: "Red"
    },
    {
        question: "What’s my biggest fear?",
        answers: ["Getting jumped while taking a piss", "The dark", "Spiders", "Being rejected"],
        correctAnswer: "Getting jumped while taking a piss"
    },
    {
        question: "If I had an orange cat what would I name it? (male):",
        answers: ["Ale", "Timmy", "Cory", "Tamale"],
        correctAnswer: "Ale"
    },
    {
        question: "What’s my favorite movie?",
        answers: ["Star Wars", "A Minecraft Movie", "The Truman Show", "Spider Verse Movie Series"],
        correctAnswer: "Spider Verse Movie Series"
    },
    {
        question: "When is my birthday?",
        answers: ["6/20", "9/25", "12/12", "6/25"],
        correctAnswer: "6/25"
    },
    {
        question: "If I had a million dollars, what’s the first thing I would buy?",
        answers: ["Cat", "House", "PC", "Food"],
        correctAnswer: "PC"
    },
    {
        question: "If I could have any superpower, which one would I pick?",
        answers: ["Super speed", "Teleportation", "Flight", "Super Strength"],
        correctAnswer: "Teleportation"
    },
    {
        question: "What's one thing we always do together?",
        answers: ["Play Roblox", "Goon", "Goon", "Goon"],
        correctAnswer: "Play Roblox"
    },
    {
        question: "What’s my favorite fast food place?",
        answers: ["Wendys", "Burger King", "Arbys", "McDonalds"],
        correctAnswer: "McDonalds"
    },
    {
        question: "Am I more of a cat person or a dog person?",
        answers: ["Cat", "Dog"],
        correctAnswer: "Cat"
    },
    {
        question: "Would I rather live in the city or the countryside?",
        answers: ["City", "Country"],
        correctAnswer: "City"
    },
    {
        question: "What’s one thing I hate doing?:",
        answers: ["Going to school", "Walking by myself somewhere", "Drawing", "Talking to sped people"],
        correctAnswer: "Walking by myself somewhere"
    },
    {
        question: "What’s my favorite ice cream flavor?",
        answers: ["Strawberry", "Mango mango mango mango", "Chocolate", "Vanilla"],
        correctAnswer: "Mango mango mango mango"
    },
    {
        question: "If I could meet one celebrity, who would it be?",
        answers: ["Drake", "The Rock", "Kendrick Lamar", "Ice Spice"],
        correctAnswer: "Kendrick Lamar"
    },
    {
        question: "Do I like horror movies, yes or no?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "What’s my biggest pet peeve?",
        answers: ["Being late", "Slow Drivers", "Dishes in the sink", "Chewing with mouth open/Loud chewers"],
        correctAnswer: "Chewing with mouth open/Loud chewers"
    },
    {
        question: "What app do I spend the most time on?",
        answers: ["Instagram", "Youtube", "Discord", "Roblox"],
        correctAnswer: "Instagram"
    },
    {
        question: "What’s my favorite holiday?",
        answers: ["Christmas", "Halloween", "Easter", "Thanksgiving"],
        correctAnswer: "Halloween"
    },
    {
        question: "Would I rather be super rich or super famous?",
        answers: ["Super Rich", "Super Famous"],
        correctAnswer: "Super Rich"
    },
    {
        question: "What’s my favorite type of music?",
        answers: ["K-pop", "Rap/Hip Hop", "Trill", "Pop"],
        correctAnswer: "Rap/Hip Hop"
    },
    {
        question: "Favorite Sport?",
        answers: ["Volleyball", "Soccer", "Basketball", "American Football"],
        correctAnswer: "Basketball"
    },
    {
        question: "Favorite Chocolate?",
        answers: ["M&Ms", "KitKat", "Snickers", "Hersheys"],
        correctAnswer: "Hersheys"
    },
    {
        question: "Do I like spicy food?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "Are you my favorite person in the world and do ily?",
        answers: ["Yes, No", "Yes, Yes", "No, Yes", "No, No"],
        correctAnswer: "Yes, Yes"
    }
];

let currentPage = 0;
let correctAnswers = 0;
let totalQuestions = questions.length;

function loadPage(pageIndex) {
    const questionData = questions[pageIndex];
    const quizContainer = document.getElementById('quiz-container');
    
    // Clear previous page
    quizContainer.innerHTML = '';

    if (pageIndex === 0) {
        // Title screen
        const titleScreen = document.createElement('div');
        titleScreen.innerHTML = `
            <h1>The Curlycal Quiz</h1>
            <p>Are you a real or a fake: the ultimate question..</p>
            <button onclick="nextPage()">Start Quiz</button>
        `;
        quizContainer.appendChild(titleScreen);
    } else if (pageIndex < totalQuestions) {
        // Question Page
        const questionPage = document.createElement('div');
        questionPage.classList.add('page');
        questionPage.innerHTML = `
            <h2 class="question-text">${questionData.question}</h2>
            <div class="choices">
                ${questionData.answers.map(answer => `
                    <button class="choice" onclick="checkAnswer('${answer}', ${pageIndex})">${answer}</button>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(questionPage);
    } else {
        // Results Page
        const resultsPage = document.createElement('div');
        resultsPage.classList.add('page');
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const rank = getRank(percentage);
        resultsPage.innerHTML = `
            <h2>Your Results</h2>
            <p>You got ${correctAnswers} out of ${totalQuestions} correct. (${percentage}%)</p>
            <p>Your rank: ${rank}</p>
            <p>Thanks for playing and now we can play Roblox or watch me play UltraKill, but now instead of you telling me, “You pick” instead.. You are picking.</p>
            <button onclick="finalQuestion()">Proceed to Final Question</button>
        `;
        quizContainer.appendChild(resultsPage);
    }
}

function checkAnswer(answer, pageIndex) {
    if (answer === questions[pageIndex].correctAnswer) {
        correctAnswers++;
    }
    nextPage();
}

function nextPage() {
    currentPage++;
    loadPage(currentPage);
}

function getRank(percentage) {
    if (percentage >= 84) return "Real One";
    if (percentage >= 64) return "Bestie";
    if (percentage >= 44) return "Solid Friend";
    if (percentage >= 24) return "Kinda Know Me";
    return "Stranger";
}

function finalQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h1 style="color: red; font-size: 50px; font-family: 'Creepster', sans-serif;">FINAL QUESTION</h1>
        <div class="choices">
            <button class="choice">Roblox</button>
            <button class="choice">Ultrakill</button>
        </div>
        <p style="font-size: 24px; color: red; font-family: 'Creepster', sans-serif;">Choose now.</p>
    `;
    setTimeout(() => {
        alert("OK ^_^");
        setTimeout(() => {
            document.body.style.backgroundColor = "black";
        }, 1500);
    }, 1500);
}

loadPage(currentPage);
