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
    return "You win! scissors beats paper.";
  } else {
    return "tie!";
  }
}

const rock = document.querySelector(".rockButton");
const paper = document.querySelector(".paperButton");
const scissors = document.querySelector(".scissorsButton");
const text = document.querySelector(".text");
const win = document.querySelector(".winPoints");
const lose = document.querySelector(".losePoints");
let value;
let w = 1;
let l = 1;

rock.addEventListener("click", () => {
  value = playRound(rock.textContent, getComputerChoice());

  if (l < 6 && w < 6) {
    if(value == "tie!") {
      text.textContent = "tie!";
    } else if (value == "You lose! Paper beats rock.") {
      lose.textContent = l++;
      text.textContent = "You lose! Paper beats rock.";
    } else if (value == "You win! Rock beats scissors") {
      win.textContent = w++;
      text.textContent = "You win! Rock beats scissors";
    }
  }

  if (w == 6) {
    text.textContent = "Nice, You win!";
  } else if (l == 6) {
    text.textContent = "Imagine losing to a computer.";
  }
});

paper.addEventListener("click", () => {
  value = playRound(paper.textContent, getComputerChoice());

  if (l < 6 && w < 6) {
    if(value == "tie!") {
      text.textContent = "tie!";
    } else if (value == "You lose! scissors beat paper.") {
      lose.textContent = l++;
      text.textContent = "You lose! scissors beat paper.";
    } else if (value == "You win! Paper beats rock.") {
      win.textContent = w++;
      text.textContent = "You win! Paper beats rock.";
    }
  }

  if (w == 6) {
    text.textContent = "Nice, You win!";
  } else if (l == 6) {
    text.textContent = "Imagine losing to a computer.";
  }
});

scissors.addEventListener("click", () => {
  value = playRound(scissors.textContent, getComputerChoice());

  if (l < 6 && w < 6) {
    if(value == "tie!") {
      text.textContent = "tie!"
    } else if (value == "You lose! Rock beat scissors") {
      lose.textContent = l++;
      text.textContent = "You lose! Rock beat scissors";
    } else if (value == "You win! scissors beats paper.") {
      win.textContent = w++;
      text.textContent = "You win! scissors beats paper.";
    }
  }

  if (w == 6) {
    text.textContent = "Nice, You win!";
  } else if (l == 6) {
    text.textContent = "Imagine losing to a computer.";
  }
});


