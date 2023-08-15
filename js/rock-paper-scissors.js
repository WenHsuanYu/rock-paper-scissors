function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

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

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose one of rock, paper and scissor", "rock");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === null) {
            alert("Invalid input");
        }
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            console.log(result);
            if (result.includes('win')) {
                playerScore++;
            } else if (playRound(playerSelection, computerSelection).includes('lose')) {
                computerScore++;
            }
            console.log("Player score: " + playerScore + " Computer score: " + computerScore);
        } else {
            alert("Invalid choice");
        }
    
    }
}

game();