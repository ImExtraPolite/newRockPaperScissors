const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissors");
const userScore = document.querySelector(".changeUserScore")
let score;
let user;

rock.addEventListener("click", () => {
  rock.textContent = "head";

})

function computer() {
  let computerMove = Math.floor(Math.random() * 3) + 1;
  return computerMove;
}

// for (let i = 1; i <= 5; i++) {
//   user = prompt("Enter yes to continue");
//   user = user.toLowerCase();
//   if (user == "yes") {
//     console.log("ok");
//   } else {
//     i = 6;
//     console.log("you fucked up");
//   }
// }