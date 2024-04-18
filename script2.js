// rule box show and hide
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
// end of rule box

//play again button
let playAgain = document.querySelector(".play-again");

playAgain.addEventListener("click", () => window.location.href = "index.html");