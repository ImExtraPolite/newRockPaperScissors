const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissors");
const w = document.querySelector(".winScore");
const l = document.querySelector(".loseScore")
const t = document.querySelector(".tieScore")
let computerChoice;
let winScore = 0;
let loseScore = 0;
let tieScore = 0;
let totalScore = winScore + loseScore + tieScore;

// 1 = Rock
// 2 = Paper
// 3 = Scissors

function computer() {
  computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice == 1) {
    return computerChoice;
  } else if (computerChoice == 2) {
    return computerChoice;
  } else {
    return computerChoice;
  }
}

rock.addEventListener("click", () => {
  let newChoice = computer();

  if(newChoice == 1) {
    t.textContent = tieScore = tieScore + 1;
    console.log(newChoice + "rock");

  }
}) 

paper.addEventListener("click", () => {
  let newChoice = computer();

  if(newChoice == 1) {
    w.textContent = winScore = winScore + 1;
    console.log(newChoice + "rock");
  }
})

scissor.addEventListener("click", () => {
  let newChoice = computer();

  if(newChoice == 1) {
    l.textContent = loseScore = loseScore + 1;
    console.log(newChoice + "rock");
  }
})

rock.addEventListener("click", () => {
  let newChoice = computer();

  if(newChoice == 2) {
    l.textContent = loseScore = loseScore + 1;
    console.log(newChoice + "paper");
  }
}) 

paper.addEventListener("click", () => {
  let newChoice = computer();

  if(newChoice == 2) {
    t.textContent = tieScore = tieScore + 1;
    console.log(newChoice + "paper");
  }
}) 

scissor.addEventListener("click", () => {
  let newChoice = computer();

  if(newChoice == 2) {
    w.textContent = winScore = winScore + 1;
    console.log(newChoice + "paper");
  }
}) 

rock.addEventListener("click", () => {
  let newChoice = computer();

  if(newChoice == 3) {
    w.textContent = winScore = winScore + 1;
    console.log(newChoice + "scissor");
  }
}) 

paper.addEventListener("click", () => {
  let newChoice = computer();

  if(newChoice == 3) {
    l.textContent = loseScore = loseScore + 1;
    console.log(newChoice + "scissor");
  }
}) 

scissor.addEventListener("click", () => {
  let newChoice = computer();

  if(newChoice == 3) {
    t.textContent = tieScore = tieScore + 1;
    console.log(newChoice + "scissor");
  }
}) 

