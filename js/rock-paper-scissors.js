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
        playerScore = computerScore = 0;
        scores.item(0).textContent = "Player score: " + playerScore;
        scores.item(1).textContent = "Computer score: " + computerScore;
    }
}

function playGame()
{
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const output = document.querySelector('.result');
    output.textContent = "The result is: " +result;
    GetScores();
    if (playerScore === 5) {
        output.textContent = "You win the game!";
    } else if (computerScore === 5) {
        output.textContent = "You lose the game!";
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