let currentPage = 0;
let score = 0;
let selected = null;

const container = document.getElementById("quiz-container");

const questions = [
  { q: "What is Curlycal’s real name?", a: [["Jamal Anderson", false], ["Jayden Avelino", true], ["Jayden Anderson", false], ["Jamal Avelino", false]] },
  { q: "What’s my favorite color?", a: [["Blue", false], ["Green", false], ["Red", true], ["Black", false]] },
  { q: "What’s my biggest fear?", a: [["Getting jumped while taking a piss", true], ["The dark", false], ["Spiders", false], ["Being rejected", false]] },
  { q: "If I had an orange cat what would I name it? (male):", a: [["Ale", true], ["Timmy", false], ["Cory", false], ["Tamale", false]] },
  { q: "What’s my favorite movie?", a: [["Star Wars", false], ["A Minecraft Movie", false], ["The Truman Show", false], ["Spider Verse Movie Series", true]] },
  { q: "When is my birthday?", a: [["6/20", false], ["9/25", false], ["12/12", false], ["6/25", true]] },
  { q: "If I had a million dollars, what’s the first thing I would buy?", a: [["Cat", false], ["House", false], ["PC", true], ["Food", false]] },
  { q: "If I could have any superpower, which one would I pick?", a: [["Super speed", false], ["Teleportation", true], ["Flight", false], ["Super Strength", false]] },
  { q: "What's one thing we always do together?", a: [["Play Roblox", true], ["Goon", false], ["Goon", false], ["Goon", false]] },
  { q: "What’s my favorite fast food place?", a: [["Wendys", false], ["Burger King", false], ["Arbys", false], ["McDonalds", true]] },
  { q: "Am I more of a cat person or a dog person?", a: [["Cat", true], ["Dog", false]] },
  { q: "Would I rather live in the city or the countryside?", a: [["City", true], ["Country", false]] },
  { q: "What’s one thing I hate doing?:", a: [["Going to school", false], ["Walking by myself somewhere", true], ["Drawing", false], ["Talking to sped people", false]] },
  { q: "What’s my favorite ice cream flavor?", a: [["Strawberry", false], ["Mango mango mango mango", true], ["Chocolate", false], ["Vanilla", false]] },
  { q: "If I could meet one celebrity, who would it be?", a: [["Drake", false], ["The Rock", false], ["Kendrick Lamar", true], ["Ice Spice", false]] },
  { q: "Do I like horror movies, yes or no?", a: [["Yes", true], ["No", false]] },
  { q: "What’s my biggest pet peeve?", a: [["Being late", false], ["Slow Drivers", false], ["Dishes in the sink", false], ["Chewing with mouth open/Loud chewers", true]] },
  { q: "What app do I spend the most time on?", a: [["Instagram", true], ["Youtube", false], ["Discord", false], ["Roblox", false]] },
  { q: "What’s my favorite holiday?", a: [["Christmas", false], ["Halloween", true], ["Easter", false], ["Thanksgiving", false]] },
  { q: "Would I rather be super rich or super famous?", a: [["Super Rich", true], ["Super Famous", false]] },
  { q: "What’s my favorite type of music?", a: [["K-pop", false], ["Rap/Hip Hop", true], ["Trill", false], ["Pop", false]] },
  { q: "Favorite Sport?", a: [["Volleyball", false], ["Soccer", false], ["Basketball", true], ["American Football", false]] },
  { q: "Favorite Chocolate?", a: [["M&Ms", false], ["KitKat", false], ["Snickers", false], ["Hersheys", true]] },
  { q: "Do I like spicy food?", a: [["Yes", true], ["No", false]] },
  { q: "Are you my favorite person in the world and do ily?", a: [["Yes, No", false], ["Yes, Yes", true], ["No, Yes", false], ["No, No", false]] }
];

function createQuiz() {
  createTitleScreen();

  questions.forEach((q, idx) => {
    const section = document.createElement("section");
    section.className = "page";
    if (idx === 0) section.classList.add("active");

    const h2 = document.createElement("h2");
    h2.textContent = q.q;
    section.appendChild(h2);

    q.a.forEach(([text, isCorrect]) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.textContent = text;
      btn.onclick = () => {
        selected = isCorrect;
        section.querySelectorAll(".choice").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      };
      section.appendChild(btn);
    });

    const cont = document.createElement("button");
    cont.className = "continue";
    cont.textContent = "Continue";
    cont.onclick = () => {
      if (selected !== null) {
        if (selected) score++;
        selected = null;
        nextPage();
      } else {
        alert("Please select an answer.");
      }
    };
    section.appendChild(cont);

    container.appendChild(section);
  });
}

function createTitleScreen() {
  const titleScreen = document.createElement("section");
  titleScreen.className = "page active";

  const h1 = document.createElement("h1");
  h1.style.fontWeight = "bold";
  h1.textContent = "The Curlycal Quiz";
  titleScreen.appendChild(h1);

  const p = document.createElement("p");
  p.textContent = "Are you a real or a fake: the ultimate question..";
  titleScreen.appendChild(p);

  const startBtn = document.createElement("button");
  startBtn.className = "continue";
  startBtn.textContent = "Start Quiz";
  startBtn.onclick = () => {
    nextPage();
  };
  titleScreen.appendChild(startBtn);

  container.appendChild(titleScreen);
}

function nextPage() {
  const pages = document.querySelectorAll(".page");
  pages[currentPage].classList.remove("active");
  currentPage++;

  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
  } else {
    alert(`Quiz completed! You scored ${score} out of ${questions.length}`);
  }
}

window.onload = createQuiz;

