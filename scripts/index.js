const score = {
  wins: 0,
  losses: 0,
  ties: 0
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
    score.ties++;
  }
  else if ((playerMove === "rock" && computerSelection === "scissors") ||
           (playerMove === "paper" && computerSelection === "rock") ||
           (playerMove === "scissors" && computerSelection === "paper")){

            result = "Win";
            score.wins++;
  }
  else {
    result = "Lose";
    score.losses++;
  }

  if (result === "Draw") {
    document.querySelector('.result').innerHTML = `<img src="images/${playerMove}-emoji.png"> Draw <img src="images/${computerSelection}-emoji.png"><br> <span>You</span>Computer`;
  }
  else if (result === "Win") {
    document.querySelector('.result').innerHTML = `<img src="images/${playerMove}-emoji.png"> Win <img src="images/${computerSelection}-emoji.png"><br> <span>You</span>Computer`;
  }
  else if (result === "Lose"){
    document.querySelector('.result').innerHTML = `<img src="images/${playerMove}-emoji.png"> Lose <img src="images/${computerSelection}-emoji.png"><br> <span>You</span>Computer`;
  }

  if (score.wins === 5) {
    document.querySelector('.final-result').innerHTML = "You Win!";
    updateScore();
    disableButtons();
    playBtn.style.display = 'block';
    playBtn.textContent = 'Play Again';
    return;
  }
  else if (score.losses === 5) {
    document.querySelector('.final-result').innerHTML = "You Lose!";
    updateScore();
    disableButtons();
    playBtn.style.display = 'block';
    playBtn.textContent = 'Play Again';
    return;
  }
  else {
    document.querySelector('.final-result').innerHTML = "";
  }
  updateScore();
}

function playGame() {
  const btn = document.querySelectorAll('.move');
  btn.forEach((button) => {
    button.removeEventListener('click', handleButtonClick); // Remove existing event listener
    button.addEventListener('click', handleButtonClick); // Add a new event listener
  });
}

function handleButtonClick() {
  const playerMove = this.id;
  const computerMove = getComputerChoice();
  playRound(playerMove, computerMove);
}

function updateScore() {
  document.querySelector('.score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function disableButtons() {
  const btn = document.querySelectorAll('.move');
  btn.forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  const btn = document.querySelectorAll('.move');
  btn.forEach((button) => {
    button.disabled = false;
  });
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
}

const playBtn = document.querySelector('.play');

playBtn.addEventListener('click', () => {
  resetScore();
  updateScore();
  playGame();
  enableButtons();
  playBtn.style.display = 'none';
  document.querySelector('.result').innerHTML = "";
  document.querySelector('.final-result').innerHTML = "";
});
