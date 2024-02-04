let scorePlayer = 0;
let scoreComputer = 0;

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const playerScore = document.querySelector('.player-score');
const cpuScore = document.querySelector('.cpu-score');
const result = document.querySelector('.result');

const signPlayer = document.querySelector('.sign-player');
const signCpu = document.querySelector('.sign-cpu');

const choicesArray = ['images/paper_icons.svg', 'images/rock_icon.svg', 'images/scissors_icon.svg']

btnRock.addEventListener('click', () => {
    playGame("rock",computerChoice())
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

let showSign = (arrayPosition) => {
    let chooseSign = choicesArray[arrayPosition];
    signPlayer.innerHTML = `<img src=${chooseSign}>`;
    signCpu.innerHTML = `<img src=${chooseSign}>`;
}

let playGame = (playerChoice, computerChoice) => {
    if (scoreComputer < 5 && scorePlayer < 5 ){
        if (playerChoice == computerChoice){
            scoreComputer += 1;
            scorePlayer += 1;
            playerScore.textContent = scorePlayer;
            cpuScore.textContent = scoreComputer;
        } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
            scorePlayer += 1;       
            playerScore.textContent = scorePlayer;
        } else {
            scoreComputer += 1;
            cpuScore.textContent = scoreComputer;
        }
        checkWinner();
    }

}

let checkWinner = () => {
    // check final score
    if (scoreComputer == 5 || scorePlayer == 5){
        if (scorePlayer > scoreComputer) {
            result.textContent = "You WON!"
        } else if (scoreComputer > scorePlayer) {
            result.textContent = "You LOSE!"
        } else (result.textContent = "DRAW!");
    }
}


/* game(); */



