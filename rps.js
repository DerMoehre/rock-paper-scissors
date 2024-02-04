let scorePlayer = 0;
let scoreComputer = 0;

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const playerScore = document.querySelector('.player-score')
const cpuScore = document.querySelector('.cpu-score')


btnRock.addEventListener('click', () => {
    playGame("rock", computerChoice())
});

btnPaper.addEventListener('click', () => {
    playGame("paper", computerChoice())
});

btnScissors.addEventListener('click', () => {
    playGame("scissors", computerChoice())
});

let computerChoice = () => {
    let choices = ["rock", "paper", "scissors"];

    // get random element from array
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}

/* let playerChoice = () => {
    let playerInput = prompt("Choose your weapon [rock, paper, scissors]");
    return playerInput.toLowerCase();
} */

let playGame = (playerChoice, computerChoice) => {
    if (playerChoice == computerChoice){
        scoreComputer += 1;
        scorePlayer += 1;
        playerScore.textContent = scorePlayer;
        cpuScore.textContent = scoreComputer;
        //return "DRAW";
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
        scorePlayer += 1;       
        playerScore.textContent = scorePlayer;
        //return `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    } else {
        scoreComputer += 1;
        cpuScore.textContent = scoreComputer;
        //return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    }
}

let game = () => {

/*     for (let i = 0; i <= 4; i++) {
        console.log(playGame(playerChoice(), computerChoice()));
    } */
    // check final score
    if (scorePlayer > scoreComputer) {
        alert(`You WON! Final Score: ${scorePlayer} - ${scoreComputer}`);
    } else if (scoreComputer > scorePlayer) {
        alert(`You LOSE! Final Score: ${scoreComputer} - ${scorePlayer}`);
    } else (alert(`DRAW! Final Score: ${scoreComputer} - ${scorePlayer}`));
}


/* game(); */



