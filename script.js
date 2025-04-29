
let currentPage = 0;
let score = 0;
let selected = null;

const pages = document.querySelectorAll('.page');
const questionsContainer = document.createElement('section');

function createQuiz() {
  questions.forEach((q, i) => {
    const section = document.createElement('section');
    section.classList.add('page');
    section.id = `page-${i + 1}`;
    const question = document.createElement('h2');
    question.textContent = q.q;
    section.appendChild(question);
    q.a.forEach(([text, correct], index) => {
      const button = document.createElement('button');
      button.textContent = text;
      button.classList.add('choice');
      button.onclick = () => {
        section.querySelectorAll('.choice').forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');
        selected = correct;
      };
      section.appendChild(button);
    });
    const contBtn = document.createElement('button');
    contBtn.textContent = 'Continue';
    contBtn.className = 'continue';
    contBtn.onclick = () => {
      if (selected !== null) {
        if (selected) score++;
        selected = null;
        nextPage();
      } else {
        alert("Pick an answer.");
      }
    };
    section.appendChild(contBtn);
    document.body.insertBefore(section, document.getElementById('results'));
  });
}

function nextPage() {
  pages[currentPage].classList.remove('active');
  currentPage++;
  if (currentPage < pages.length) {
    pages[currentPage].classList.add('active');
    if (currentPage === questions.length + 1) showResults();
  }
}

function showResults() {
  const percent = ((score / questions.length) * 100).toFixed(2);
  const resultTitle = document.getElementById("result-title");
  const resultDetail = document.getElementById("result-detail");
  const resultRank = document.getElementById("result-rank");
  resultTitle.textContent = `You got ${score}/${questions.length}`;
  resultDetail.textContent = `That’s ${percent}%`;
  if (score >= 21) resultRank.textContent = "Real One";
  else if (score >= 16) resultRank.textContent = "Bestie";
  else if (score >= 11) resultRank.textContent = "Solid Friend";
  else if (score >= 6) resultRank.textContent = "Kinda Know Me";
  else resultRank.textContent = "Stranger";
}

function finalChoice() {
  document.getElementById("final-text").textContent = "OK ^_^";
  setTimeout(() => {
    document.getElementById("finale").classList.remove("active");
    document.getElementById("blackout").classList.add("active");
  }, 15000);
}

createQuiz();
