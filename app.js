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

    if(pc_selection === ("Paper") && player_selection === ("Rock")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        pc_score+=5;
        msg = "You lost! Paper beats Rock!";
    }
    else if(pc_selection === ("Rock") && player_selection === ("Paper")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=5;
        msg = "You won! Paper beats Rock!";
    }
    else if(pc_selection === ("Scissors") && player_selection === ("Paper")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        pc_score+=5;
        msg = "You lost! Scissors beats Paper!";
    }
    else if(pc_selection === ("Paper") && player_selection === ("Scissors")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=5;
        msg = "You won! Scissors beats Paper!";
    }
    else if(pc_selection === ("Rock") && player_selection === ("Scissors")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        pc_score+=5;
        msg = "You lost! Rock beats Scissors!";
    }
    else if(pc_selection === ("Scissors") && player_selection === ("Rock")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=5;
        msg = "You won! Rock beats Scissors!";
    }
    else if(pc_selection === ("Rock") && player_selection === ("Rock")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=5;
        pc_score+=5;
        msg = "It's a tie! You both have a Rock!";
    }
    else if(pc_selection === ("Scissors") && player_selection === ("Scissors")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=5;
        pc_score+=5;
        msg = "It's a tie! You both have Scissors!";
    }
    else if(pc_selection === ("Paper") && player_selection === ("Paper")){
        console.log("You chose: " + player_selection);
        console.log("The PC chose: " + pc_selection);
        player_score+=5;
        pc_score+=5;
        msg = "It's a tie! You both have Paper!";
    }
    console.log(msg);
}

// function game(){
   
//         if(pc_score > player_score){
//             console.log("The winner is The PC!");
//         }
//         else if(player_score > pc_score){
//             console.log("You're the winner!");
//         }
//         else if(player_score == pc_score){
//             console.log("You both are winners!")
//         }
//         console.log("PC SCORE: " + pc_score) 
//         console.log("PLAYER SCORE: " + player_score) 
       
//        else{
//         playerPlay();
//         computerPlay();
//         console.log(playRound(player_selection, pc_selection));
//        }
    
// }

// console.log(game());
playerPlay();