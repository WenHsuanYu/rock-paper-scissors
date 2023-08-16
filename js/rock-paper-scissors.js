function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win! Rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You win! Scissors beats paper';
    } else {
        computerScore++;
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

function getScores()
{
    const scores = document.querySelectorAll('.score');
    if (playerScore !== 5 && computerScore !== 5) {
        scores.item(0).textContent = "Player score: " + playerScore;
        scores.item(1).textContent = "Computer score: " + computerScore;
    } else {
        scores.item(0).textContent = "Player score: 0";
        scores.item(1).textContent = "Computer score: 0";
    }
}

function playGame()
{
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const output = document.querySelector('.result div');
    output.textContent = "The result is: " + result;
    getScores();
    if (playerScore === 5) {
        playerScore = computerScore = 0;
        output.textContent = "Finally, you win the game!";
    } else if (computerScore === 5) {
        playerScore = computerScore = 0;
        output.textContent = "Finally, you lose the game!";
    }
    
}
let playerScore = 0;
let computerScore = 0;
let playerSelection = ''
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playGame();
    })
});