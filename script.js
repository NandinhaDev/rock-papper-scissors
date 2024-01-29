let playerScore = 0
let computerScore = 0
let roundWinner = ''
let currentRound = 1

//game

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {roundWinner = "tie"}

    if ((playerSelection === "Charmander" && computerSelection === "Bulbasaur") ||
     (playerSelection === "Bulbasaur" && computerSelection === "Squirtle") || 
     (playerSelection === "Squirtle" && computerSelection === "Charmander")) {
        playerScore++
        roundWinner = "player"
        currentRound++
    } 
    
 if ((computerSelection === "Charmander" && playerSelection === "Bulbasaur") ||
 (computerSelection === "Bulbasaur" && playerSelection === "Squirtle") ||
 (computerSelection === "Squirtle" && playerSelection === "Charmander")) {
       computerScore++
       roundWinner = "computer"
       currentRound++
 }
    
    updateRound()
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
    
}

function getRandomChoices () { 
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0:
            return "Charmander"
        break
        case 1:
            return "Bulbasaur"
        break
        case 2:
            return "Squirtle"
    }
}
 
function isGameOver () {
    return playerScore === 5 ||
           computerScore === 5
}
//UI

const charmanderBTN = document.getElementById("charmanderBTN")
const bulbasaurBTN = document.getElementById("bulbasaurBTN")
const squirtleBTN = document.getElementById("squirtleBTN")
const playerScoreInfo = document.getElementById("playerScore")
const computerScoreInfo = document.getElementById("computerScore")
const scoreMessage = document.getElementById("scoreMessage")
const ScoreInfo = document.getElementById("scoreInfo")
const roundCount = document.getElementById("round")

charmanderBTN.addEventListener("click", () => handleClick("Charmander"))
bulbasaurBTN.addEventListener("click", () => handleClick("Bulbasaur"))
squirtleBTN.addEventListener("click", () => handleClick("Squirtle"))

function handleClick (playerSelection) {
    const computerSelection = getRandomChoices ()
 
    playRound(playerSelection, computerSelection)
    updateScore()
    if (isGameOver) {
        openEndgameModal()
        setFinalMessage ()
    }
}

function updateRound () { 
roundCount.textContent(`Round ${currentRound}`)}

function updateScore () {
    playerScoreInfo.textContent(`Player: ${playerScore}`)
    computerScoreInfo.textContent(`Opponent: ${computerScore}`)
    
    if (playerScore === computerScore) {
    ScoreInfo.textContent("It's a tie!!")
    }
    else if (roundWinner = "player") {
        ScoreInfo.textContent("You won!!")
    }
    else if (roundWinner = "computer") {
       ScoreInfo.textContent("You lost!!")
    }
}
