function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper';
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

let playerSelection = prompt("Choose one of rock, paper and scissor", "rock");
playerSelection = playerSelection.toLowerCase();
if (playerSelection === null) {
    alert("Invalid input");
}
if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
} else {
    alert("Invalid choice");
}
