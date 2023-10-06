function getComputerChoice(){
    let min = 0;
    let max = 3;
    let gameArr = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * (max - min)) + min;
    
    let computerChoice = gameArr[index];
    return computerChoice;
}


function round(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if(player === 'rock' && computer === 'rock'){
        return "Tie!";
    }else if(player === 'paper' && computer === 'paper'){
        return "Tie!";
    }else if(player === 'rock' && computer === 'rock'){
        return "Tie!";
    }else if(player === 'rock' && computer === 'scissors'){
        return "You Win! Rock beats Scissors";
    }else if(player === 'paper' && computer === 'rock'){
        return "You Win! Paper beats Rock";
    }else if(player === 'scissors' && computer === 'paper'){
        return "You Win! Scissors beats paper";
    }else if(player === 'rock' && computer === 'paper'){
        return "You Lose! Paper beats Rock";
    }else if(player === 'scissors' && computer === 'rock'){
        return "You Lose! Rock beats Scissors";
    }else if(player === 'paper' && computer === 'scissors'){
        return "You Lose! Scissors beats Paper";
    }

}

function game(){
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Choose Rock, Paper or Scissors");
        let compChoice = getComputerChoice();
        console.log(round(playerChoice, compChoice));
    }   

  
}

game();