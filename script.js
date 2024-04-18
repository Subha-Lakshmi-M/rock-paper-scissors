const rules = document.querySelector(".rules");
const ruleBox = document.querySelector(".full-rule-box");
const rulesBoxClose = document.querySelector(".rules-box-close");

ruleBox.style.display = "none";

rules.addEventListener("click", () => {
  ruleBox.style.display = "block";
});
rulesBoxClose.addEventListener("click", () => {
  ruleBox.style.display = "none";
});

const rock1 = document.querySelector("#rock");
const scissor1 = document.querySelector("#scissor");
const paper1 = document.querySelector("#paper");

let pScoreText = document.querySelector("#Y-Score");
let cScoreText = document.querySelector("#C-Score");

let resetGame = document.querySelector(".reset-game");

rock1.addEventListener("click", () => {
  window.location.href = "index1.html";
  localStorage.setItem("rock1", "1");
});

scissor1.addEventListener("click", () => {
  window.location.href = "index1.html";
  localStorage.setItem("scissor1", "2");
});

paper1.addEventListener("click", () => {
  window.location.href = "index1.html";
  localStorage.setItem("paper1", "3");
});

let pScoreVal = localStorage.getItem("uScore");
let cScoreVal = localStorage.getItem("cScore");

if (pScoreVal === null && cScoreVal === null) {
  pScoreVal = 0;
  cScoreVal = 0;
  resetGame.style.display = 'none'
}

resetGame.addEventListener("click", () => {
    localStorage.removeItem("uScore");
    localStorage.removeItem("cScore");
    location.reload();
});

pScoreText.textContent = pScoreVal;
cScoreText.textContent = cScoreVal;