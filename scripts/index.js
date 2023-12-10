function getComputerChoice() {
  const computerMove =  Math.floor(Math.random() * 3);

  if (computerMove === 0) {
    return "rock"
  } 
  else if (computerMove === 1) {
    return "paper"
  }
  else if (computerMove ===2) {
    return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {
  const playerMove = playerSelection.toLowerCase();
  
  if (playerMove === computerSelection) {
    return "It's a draw! You both select " + playerMove.toUpperCase();
  }
  else if (playerMove === "rock" && computerSelection === "scissors") {
    return `You win! ${playerMove.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  }
  else if ( playerMove === "rock" && computerSelection === "paper") {
    return `You lose! ${computerSelection.toUpperCase()} beats ${playerMove.toUpperCase()}`;
  }
  else if (playerMove === "paper" && computerSelection === "rock") {
    return `You win! ${playerMove.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  }
  else if ( playerMove === "paper" && computerSelection === "scissors") {
    return `You lose! ${computerSelection.toUpperCase()} beats ${playerMove.toUpperCase()}`;
  }
  else if (playerMove === "scissors" && computerSelection === "paper") {
    return `You win! ${playerMove.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  }
  else if ( playerMove === "scissors" && computerSelection === "rock") {
    return `You lose! ${computerSelection.toUpperCase()} beats ${playerMove.toUpperCase()}`;
  }
}

function game() {
  const playerMove = prompt("Enter: Rock, Paper or Scissors").toLocaleLowerCase();
  const computerMove = getComputerChoice();
  
  return playRound(playerMove, computerMove);
}
console.log(game());

<<<<<<<<<<<<<<  ✨ Codeium Command ⭐ >>>>>>>>>>>>>>>>
git commit -m "Added game logic for rock-paper-scissors"
<<<<<<<  762a37eb-c073-4d61-a64b-87d6ea8af2bb  >>>>>>>