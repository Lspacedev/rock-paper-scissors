
function getComputerChoice(){
    let min = 0;
    let max = 3;
    let gameArr = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * (max - min)) + min;
    
    let computerChoice = gameArr[index];
    return computerChoice;
}

//A single game round
//let scorePlayer = 0;
 //let scoreComputer = 0;
let i = 0;
let x = 0;

let results = document.querySelector('#results');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');

function round(playerSelection, computerSelection){
    let player = playerSelection;
    let computer = computerSelection;

    if(player === 'rock' && computer === 'rock'){
        results.textContent = "Tie!";

    }else if(player === 'paper' && computer === 'paper'){
        results.textContent = "Tie!";

    }else if(player === 'scissors' && computer === 'scissors'){
        results.textContent = "Tie!";

    }else if(player === 'rock' && computer === 'scissors'){
        i = i + 1;
        results.textContent = "You Win! Rock beats Scissors";
        playerScore.textContent = i;
        

    }else if(player === 'paper' && computer === 'rock'){
        i = i + 1;
        results.textContent = "You Win! Paper beats Rock";
        playerScore.textContent = i;
        
    }else if(player === 'scissors' && computer === 'paper'){
        i = i + 1;
        results.textContent = "You Win! Scissors beats paper";
        playerScore.textContent = i;
        

    }else if(player === 'rock' && computer === 'paper'){
        x = x + 1;
        results.textContent = "You Lose! Paper beats Rock";
        computerScore.textContent = x;
       

    }else if(player === 'scissors' && computer === 'rock'){
        x = x + 1;
        results.textContent = "You Lose! Rock beats Scissors";
        computerScore.textContent = x;
        

    }else if(player === 'paper' && computer === 'scissors'){
        x = x + 1;
        results.textContent = "You Lose! Scissors beats Paper";
        computerScore.textContent = x;

    }
    
}


const buttons = document.querySelectorAll('.buttons > button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    if( i === 5){
        results.textContent = "You beat the computer";
    }else if(x === 5){
        results.textContent = "You lost to the computer";
    }else{
        playerChoice = button.id;
        
        let compChoice = getComputerChoice().toLowerCase();

        round(playerChoice, compChoice);}
    });
    
});



