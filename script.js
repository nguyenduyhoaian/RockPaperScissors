console.log("Hello World")

function getComputerChoice() {
    const computerChoice = Math.random() * 3;
    if (computerChoice < 1) {
        return "Rock";
    } else if (computerChoice < 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getHumanChoice() {
    const humanChoice = Number(prompt("Enter your choice (1: Rock - 2: Paper - 3: Scissor):"))
    switch (humanChoice) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissor";
        default: { alert("Invalid value") }
    }
}

let computerScore = 0;
let humanScore = 0;

function playground(humanChoice, computerChoice) {
    console.log("Human choice: " + humanChoice)
    console.log("Computer choice: " + computerChoice)    
    if (humanChoice === computerChoice) {
        return "Draw"
    } else if ((humanChoice == "Rock" && computerChoice == "Scissor")
        || (humanChoice == "Paper" && computerChoice == "Rock")
        || (humanChoice == "Scissor" && computerChoice == "Paper")) {
        return "Human win"
    } else return "Computer win"
}

function playGame(){
    for (let i = 1; i <=5; i++){
        console.log("Game: " + i);
        result = playground(getHumanChoice(), getComputerChoice());
        if (result == "Human win") {
            humanScore++;
        } else if (result == "Computer win"){
            computerScore++;
        }
        console.log(result)
        console.log("HUMAN " + humanScore + " : " + computerScore + " COMPUTER");
    }
}


playGame();
