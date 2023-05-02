var player_score = 0;
var computer_score = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const buttons = [rock, paper, scissors];
const computer_score_display = document.getElementById("pc-score");
const player_score_display = document.getElementById("player-score");
const rps_outcome = document.getElementById("rps-outcome");

function playerPlay(){
    buttons.forEach(button => 
        {
            button.addEventListener("click", function()
            {   
                const player_selection = button.textContent.trim().toLowerCase();
                playRound(player_selection, computerPlay());
            });
        });
}


function computerPlay(){
    var tools = ["rock", "paper", "scissors"];
    randomise_tools = tools[Math.floor(Math.random()*(tools.length))];
    console.log("The Computer chose to play: " + randomise_tools);
    return randomise_tools;
}

function playRound(playerPlay, computerPlay){
    var msg = "";

    if(playerPlay == computerPlay){
        computer_score+=5;
        player_score+=5;
        msg = `It's a tie! You both have ${computerPlay}`;
        console.log(`${playerPlay} vs ${computerPlay}`);
        rps_outcome.textContent = msg;
    }
    
    else if(
        (playerPlay == "rock" && computerPlay == "paper") || 
        (playerPlay == "paper" && computerPlay == "scissors") || 
        (playerPlay == "scissors" && computerPlay == "rock")
        )
        {
            computer_score+=5;
            msg = `You lost! ${computerPlay} beats ${playerPlay}!`;
            console.log(`${playerPlay} vs ${computerPlay}`);
            rps_outcome.textContent = msg;
        }

    else{
        player_score+=5;
        msg = `You won! ${playerPlay} beats ${computerPlay}!`;
        console.log(`${playerPlay} vs ${computerPlay}`);
        rps_outcome.textContent = msg;
    }
   
    computer_score_display.textContent = computer_score;
    player_score_display.textContent = player_score;

    if(computer_score == 5 || player_score == 5){
        for(button of buttons){
            button.disabled = true;
        }
    }
}

playerPlay();