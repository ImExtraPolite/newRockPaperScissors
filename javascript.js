const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissors");
const score = document.querySelector(".changeUserScore");
let computerChoice;
let winScore = 0;


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
    score.textContent = winScore = winScore + 1;
  }
  console.log(newChoice);
})  