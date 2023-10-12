
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

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let rockComp = document.querySelector('#rock-two');
let paperComp = document.querySelector('#paper-two');
let scissorsComp = document.querySelector('#scissors-two');



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

function playerBorder(p){
    if(p === 'rock'){
        rock.style.border = "5px solid purple";
        paper.style.border = "1px solid black";
        scissors.style.border = "1px solid black";
    }else if(p === 'paper'){
        rock.style.border = "1px solid black";
        paper.style.border = "5px solid purple";
        scissors.style.border = "1px solid black";
    }else if(p === 'scissors'){
        rock.style.border = "1px solid black";
        paper.style.border = "1px solid black";
        scissors.style.border = "5px solid purple";
    }
}

function computerBorder(q){
    if(q === 'rock'){
        rockComp.style.border = "5px solid blue";
        paperComp.style.border = "1px solid black";
        scissorsComp.style.border = "1px solid black";
    }else if(q === 'paper'){
        rockComp.style.border = "1px solid blue";
        paperComp.style.border = "5px solid blue";
        scissorsComp.style.border = "1px solid black";
    }else if(q === 'scissors'){
        rockComp.style.border = "1px solid black";
        paperComp.style.border = "1px solid black";
        scissorsComp.style.border = "5px solid blue";
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
        playerBorder(playerChoice);
        let compChoice = getComputerChoice().toLowerCase();
        computerBorder(compChoice)

        round(playerChoice, compChoice);}

        

    });
    
});

