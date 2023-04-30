var computer_selection = computerPlay();
var player_selection = " ";
var player_score = 0;
var computer_score = 0;


function computerPlay(){
    var tools = ["rock", "paper", "scissors"];
    randomise_tools = tools[Math.floor(Math.random()*(tools.length))];
    console.log("The Computer chose to play: " + randomise_tools);
    return computer_selection = randomise_tools;
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computer_score_display = document.getElementById("computer-score");
const player_score_display = document.getElementById("player-score");
const rps_outcome = document.getElementById("rps-outcome");

var rock_clicked = false;
var paper_clicked = false;
var scissors_clicked = false;

function playerPlay(){
    rock.addEventListener("click", function(){
        rock_clicked = true;
       if(rock_clicked){
        player_selection = "Rock";
       }
       playRound(playRound(player_selection, computer_selection));   
    });

    paper.addEventListener("click", function(){
        paper_clicked = true;
        if(paper_clicked){
            player_selection = "Paper";
        }
        playRound(playRound(player_selection, computer_selection));   
    });

    scissors.addEventListener("click", function(){
        scissors_clicked = true;
        if(scissors_clicked){
            player_selection = "Scissors";
        }
        playRound(playRound(player_selection, computer_selection));   
    });
}

function playRound(player_selection, computer_selection){
    var msg = "";
    
    if(computer_selection === ("Paper") && player_selection.toLowerCase() === ("Rock").toLowerCase() && player_selection.toUpperCase() === ("Rock").toUpperCase()){
        computer_score+=5;
        msg = "You lost! Paper beats Rock!";
        rps_outcome.textContent = msg;
    }

    else if(computer_selection === ("Rock") && player_selection.toLowerCase() === ("Paper").toLowerCase() && player_selection.toUpperCase() === ("Paper").toUpperCase()){
        player_score+=5;
        msg = "You won! Paper beats Rock!";
        rps_outcome.textContent = msg;
    }

    else if(computer_selection === ("Scissors") && player_selection.toLowerCase() === ("Paper").toLowerCase() && player_selection.toUpperCase() === ("Paper").toUpperCase()){
        computer_score+=5;
        msg = "You lost! Scissors beats Paper!";
        rps_outcome.textContent = msg;
    }

    else if(computer_selection === ("Paper") && player_selection.toLowerCase() === ("Scissors").toLowerCase() && player_selection.toUpperCase() === ("Scissors").toUpperCase()){
        player_score+=5;
        msg = "You won! Scissors beats Paper!";
        rps_outcome.textContent = msg;
    }

    else if(computer_selection === ("Rock") && player_selection.toLowerCase() === ("Scissors").toLowerCase() && player_selection.toUpperCase() === ("Scissors").toUpperCase()){
        computer_score+=5;
        msg = "You lost! Rock beats Scissors!";
        rps_outcome.textContent = msg;
    }
    else if(computer_selection === ("Scissors") && player_selection.toLowerCase() === ("Rock").toLowerCase() && player_selection.toUpperCase() === ("Rock").toUpperCase()){
        player_score+=5;
        msg = "You won! Rock beats Scissors!";
        rps_outcome.textContent = msg;
    }

     else if(computer_selection === player_selection){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + computer_selection);
        player_score+=5;
        computer_score+=5;
        msg = `It's a tie this round! You both have a ${player_selection}!`;
        rps_outcome.textContent = msg;
    }

    computer_score_display.textContent = computer_score;
    player_score_display.textContent = player_score;

    if(computer_score == 5 || player_score == 5){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

playerPlay();
