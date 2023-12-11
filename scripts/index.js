const score = {
  player: 0,
  computer: 0
}

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

  let result = "";

  if (playerMove === computerSelection) {
    result = "Draw";
  }
  else if ((playerMove === "rock" && computerSelection === "scissors") ||
           (playerMove === "paper" && computerSelection === "rock") ||
           (playerMove === "scissors" && computerSelection === "paper")){

            result = "Win";
            score.player++;
  }
  else {
    result = "Lose";
    score.computer++;
  }

  if (result === "Draw") {
    console.log(result);
    document.querySelector('.result').innerHTML = `It's a tie! you both choose ${playerMove}`;
  }
  else if (result === "Win") {
    console.log(result);
    document.querySelector('.result').innerHTML = `You Win! ${playerMove} beats ${computerSelection}`;
  }
  else if (result === "Lose"){
    console.log(result);
    document.querySelector('.result').innerHTML = `You Lose! ${computerSelection} beats ${playerMove}`;
  }

  document.querySelector('.score').innerHTML = `Score- You: ${score.player} - Computer: ${score.computer}`;

}

function game() {
  const btn = document.querySelectorAll('.move');

  btn.forEach((button) => {
    button.addEventListener('click', (e) => {
      const playerMove = e.target.id
      const computerMove = getComputerChoice();
      playRound(playerMove, computerMove);
    });
  });
}

game();

