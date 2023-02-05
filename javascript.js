function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum == 1) {
    return "rock";
  } else if (randomNum == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection == "rock" && computerSelection == "rock") {
    return "tie!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats rock."
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock.";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return "tie!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! scissors beat paper.";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beat scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! scissors beats paper";
  } else {
    return "tie!";
  }
}

const rock = document.querySelector(".rockButton");
const paper = document.querySelector(".paperButton");
const scissors = document.querySelector(".scissorsButton");
const win = document.querySelector(".winPoints");
const lose = document.querySelector(".losePoints");
const tie = document.querySelector(".tiePoints");
let w = 0;
let l = 0;
let t = 0;


rock.addEventListener("click", () => {
  let value = playRound(rock.textContent, getComputerChoice());
  if(value == "tie!") {
    tie.textContent = t++;
  } else if (value == "You lose! Paper beats rock.") {
    lose.textContent = l++;
  } else if (value == "You win! Rock beats scissors") {
    win.textContent = w++;
  }
});

paper.addEventListener("click", () => {
  console.log(playRound(paper.textContent, getComputerChoice()));
});

scissors.addEventListener("click", () => {
  console.log(playRound(scissors.textContent, getComputerChoice()));
});
