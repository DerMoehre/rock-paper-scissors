let computerChoice = () => {
    let choices = ["rock", "paper", "scissors"];

    // get random element from array
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}

let playerChoice = () => {
    let playerInput = prompt("Choose your weapon [rock, paper, scissors]");
    return playerInput.toLowerCase();
}

let playGame = (playerChoice, computerChoice) => {
    if (playerChoice == computerChoice){
        return "DRAW";
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
        return `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    } else {
        return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    }
}

let game = () => {
    for (let i = 0; i <= 4; i++) {
        console.log(playGame(playerChoice(), computerChoice()));
    }
}

game();



