let playGame = confirm("Shall we play rock,paper,or scissors?");
if(playGame){
    //play
    let playerChoice = prompt("Please enter rock,paper,or scissors.")
if(playerChoice){
let playerOne = playerChoice.trim().toLocaleLowerCase();
if( playerOne === "rock"|| 
playerOne === "paper"|| 
playerOne === "scissors"
){
let computerChoice = Math.floor(Math.random()*3+1);
let computer = computerChoice === 1 
? "rock"
: computerChoice === 2 
? "paper"
: "scissors";

let result =
playerOne === computer
? "Tie Game!"
:playerOne ==="rock" && computer === "paper"
?`playerOne: ${playerOne}\ncomputer: ${computer}
\ncomputer wins!`
:playerOne === "paper"&& computer === "scissors"
?`playerOne: ${playerOne}\ncomputer: ${computer}
\ncomputer wins!`
:playerOne === "scissors"&& computer === "rock"
?`playerOne: ${playerOne}\ncomputer: ${computer}
\ncomputer wins!`
:`playerOne: ${playerOne}\ncomputer: ${computer}
\nplayerOne wins!`;
alert(result);
let playAgain = confirm("Play Again");
playAgain ? location.reload() : alert("ok, thank you for playing.");
}else{
    alert("You didn't enter rock' paper, or scissors.");
    let reEntery = confirm("re enter, only rock, paper, or scissors apply");
    reEntery? location.reload() : alert("Enter rock , paper, or scissors.") 
}
}else{
    alert("i guess you changed your mind.Maybe next time.");
}
}else{
    alert("Ok,maybe next time.");
}

