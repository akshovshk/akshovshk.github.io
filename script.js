function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"];
    return choice[(Math.floor(Math.random() * choice.length))]
}

function playGame() {
    let playerWinCounter = 0;
    let computerWinCounter = 0;
    let drawCounter = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = null;
        let computerSelection = getComputerChoice();
        console.log(getComputerChoice());
        while (true) {
            playerSelection = prompt(`Game ${i}: Rock, Paper or Scissor?
            Player Wins: ${playerWinCounter} | Computer Wins: ${computerWinCounter} | Draw: ${drawCounter}`).toLowerCase().trim();
            if (playerSelection === null || playerSelection === undefined){
                confirm("cancel?");
                return 0;
            } else if ( playerSelection === "")  {
                alert("Enter a choice!");
            } else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissor") {
                alert("Enter valid input! rock, paper, or scissor!");
            } else {
                    playRound(playerSelection,computerSelection); 
                    function playRound(playerSelection, computerSelection) {
                        if (playerSelection === computerSelection) {
                            //computerSelection = getComputerChoice();
                            //console.log(getComputerChoice());
                            drawCounter = drawCounter + 1;
                            return alert("Draw!");
                        }
                        
                        //player selects Rock
                        if (playerSelection === "rock" && computerSelection === "scissor" ) {
                            playerWinCounter = playerWinCounter + 1;
                            //computerSelection = getComputerChoice();
                            //console.log(getComputerChoice());
                            return alert("You Win! Rock crushes Scissor");
                        } else if (playerSelection === "rock" && computerSelection === "paper") {
                            computerWinCounter = computerWinCounter + 1;
                            //computerSelection = getComputerChoice();
                            //console.log(getComputerChoice());
                            return alert("You Lose! Paper covers Rock");
                        }
                        
                        //player selects Paper
                        if (playerSelection === "paper" && computerSelection === "rock" ) {
                            playerWinCounter = playerWinCounter + 1;
                            //computerSelection = getComputerChoice();
                            //console.log(getComputerChoice());
                            return alert("You Win! Paper covers Rock");
                        } else if (playerSelection === "paper" && computerSelection === "scissor") {
                            computerWinCounter = computerWinCounter + 1;
                            //computerSelection = getComputerChoice();
                            //console.log(getComputerChoice());
                            return alert("You Lose! Scissor cuts Paper");
                        }
                    
                        //player selects Scissor
                        if (playerSelection === "scissor" && computerSelection === "paper" ) {
                            playerWinCounter = playerWinCounter + 1;
                            //computerSelection = getComputerChoice();
                            //console.log(getComputerChoice());
                            return alert("You Win! Scissor cuts Paper");
                        } else if (playerSelection === "scissor" && computerSelection === "rock") {
                            computerWinCounter = computerWinCounter + 1;
                            //computerSelection = getComputerChoice();
                            //console.log(getComputerChoice());
                            return alert("You Lose! Rock crushes Scissor");
                        }
                    }
                    break;
            }
        }

    }
    if (playerWinCounter === computerWinCounter) {
        return alert(`Draw!
        Player Wins: ${playerWinCounter} | Computer Wins: ${computerWinCounter} | Draws: ${drawCounter}`);
    } else if (playerWinCounter > computerWinCounter) {
        return alert(`You Win!
        Player Wins: ${playerWinCounter} | Computer Wins: ${computerWinCounter} | Draws: ${drawCounter}`);
    } else {
        return alert(`You Lose!
        Player Wins: ${playerWinCounter} | Computer Wins: ${computerWinCounter} | Draws: ${drawCounter}`);
    }
}

playGame();