var pc_selection = computerPlay();
var player_selection = " ";
var player_score = 0;
var pc_score = 0;

function computerPlay(){
    pc_choice = Math.random();
    if (pc_choice < 0.5) {
        pc_choice = "Rock";
    } else if(pc_choice <= 1.5) {
        pc_choice = "Paper";
    } else {
        pc_choice = "Scissors";
    }
    return pc_selection = pc_choice;
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const pc_score_display = document.getElementById("pc-score");
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
       playRound(playRound(player_selection, pc_selection));   
    });

    paper.addEventListener("click", function(){
        paper_clicked = true;
        if(paper_clicked){
            player_selection = "Paper";
        }
        playRound(playRound(player_selection, pc_selection));   
    });

    scissors.addEventListener("click", function(){
        scissors_clicked = true;
        if(scissors_clicked){
            player_selection = "Scissors";
        }
        playRound(playRound(player_selection, pc_selection));   
    });
}

function playRound(player_selection, pc_selection){
    var msg = "";
    
    if(pc_selection === ("Paper") && player_selection.toLowerCase() === ("Rock").toLowerCase() && player_selection.toUpperCase() === ("Rock").toUpperCase()){
        pc_score+=5;
        msg = "You lost! Paper beats Rock!";
        rps_outcome.textContent = msg;
    }

    else if(pc_selection === ("Rock") && player_selection.toLowerCase() === ("Paper").toLowerCase() && player_selection.toUpperCase() === ("Paper").toUpperCase()){
        player_score+=5;
        msg = "You won! Paper beats Rock!";
        rps_outcome.textContent = msg;
    }

    else if(pc_selection === ("Scissors") && player_selection.toLowerCase() === ("Paper").toLowerCase() && player_selection.toUpperCase() === ("Paper").toUpperCase()){
        pc_score+=5;
        msg = "You lost! Scissors beats Paper!";
        rps_outcome.textContent = msg;
    }

    else if(pc_selection === ("Paper") && player_selection.toLowerCase() === ("Scissors").toLowerCase() && player_selection.toUpperCase() === ("Scissors").toUpperCase()){
        player_score+=5;
        msg = "You won! Scissors beats Paper!";
        rps_outcome.textContent = msg;
    }

    else if(pc_selection === ("Rock") && player_selection.toLowerCase() === ("Scissors").toLowerCase() && player_selection.toUpperCase() === ("Scissors").toUpperCase()){
        pc_score+=5;
        msg = "You lost! Rock beats Scissors!";
        rps_outcome.textContent = msg;
    }
    else if(pc_selection === ("Scissors") && player_selection.toLowerCase() === ("Rock").toLowerCase() && player_selection.toUpperCase() === ("Rock").toUpperCase()){
        player_score+=5;
        msg = "You won! Rock beats Scissors!";
        rps_outcome.textContent = msg;
    }

    else if(pc_selection === ("Rock") && player_selection.toLowerCase() === ("Rock").toLowerCase() && player_selection.toUpperCase() === ("Rock").toUpperCase()){
        player_score+=5;
        pc_score+=5;
        msg = "It's a tie! You both have a Rock!";
        rps_outcome.textContent = msg;
    }

    else if(pc_selection === ("Scissors") && player_selection.toLowerCase() === ("Scissors").toLowerCase() && player_selection.toUpperCase() === ("Scissors").toUpperCase()){
        player_score+=5;
        pc_score+=5;
        msg = "It's a tie! You both have Scissors!";
        rps_outcome.textContent = msg;
    }

    else if(pc_selection === ("Paper") && player_selection.toLowerCase() === ("Paper").toLowerCase() && player_selection.toUpperCase() === ("Paper").toUpperCase()){
        player_score+=5;
        pc_score+=5;
        msg = "It's a tie! You both have Paper!";
        rps_outcome.textContent = msg;
    }

    pc_score_display.textContent = pc_score;
    player_score_display.textContent = player_score;

    if(pc_score == 5 || player_score == 5){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

playerPlay();