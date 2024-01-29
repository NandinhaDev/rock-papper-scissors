let playerScore = 0
let computerScore = 0
let roundWinner = ''
let currentRound = 1

//game

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {roundWinner = "tie"}

    if ((playerSelection === "CHARMANDER" && computerSelection === "BULBASSAUR") ||
     (playerSelection === "BULBASAUR" && computerSelection === "SQUIRTLE") || 
     (playerSelection === "SQUIRTLE" && computerSelection === "CHARMANDER")) {
        playerScore++
        roundWinner = "player"
        currentRound++
    } 
    
 if ((computerSelection === "CHARMANDER" && playerSelection === "BULBASAUR") ||
 (computerSelection === "BULBASAUR" && playerSelection === "SQUIRTLE") ||
 (computerSelection === "SQUIRTLE" && playerSelection === "CHARMANDER")) {
       computerScore++
       roundWinner = "computer"
       currentRound++}
    updateScoreMessage(roundWinner, playerSelection, computerSelection)

}

function getRandomChoices () { 
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0:
            return "CHARMANDER"
        break
        case 1:
            return "BULBASAUR"
        break
        case 2:
            return "SQUIRTLE"
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
const playerScoreInfo = document.getElementById("playerScoreInfo")
const computerScoreInfo = document.getElementById("computerScoreInfo")
const scoreMessage = document.getElementById("scoreMessage")
const scoreInfo = document.getElementById("scoreInfo")
const roundCount = document.getElementById("roundCount")

charmanderBTN.addEventListener("click", () => handleClick("CHARMANDER"))
bulbasaurBTN.addEventListener("click", () => handleClick("BULBASAUR"))
squirtleBTN.addEventListener("click", () => handleClick("SQUIRTLE"))

function handleClick (playerSelection) {
    const computerSelection = getRandomChoices ()
 
    playRound(playerSelection, computerSelection)
    updateRound()
    updateScore()
    if (isGameOver) {
        openEndgameModal()
        setFinalMessage ()
    }
}

function updateRound () { 
roundCount.textContent = `Round ${currentRound}`}

function updateScore () {
    playerScoreInfo.textContent = `Player: ${playerScore}`
    computerScoreInfo.textContent =`Opponent: ${computerScore}`
    
    if (playerScore === computerScore) {
    scoreInfo.textContent = "It's a tie!!"
    }
    else if (roundWinner = "player") {
        scoreInfo.textContent = "You won!!"
    }
    else if (roundWinner = "computer") {
       scoreInfo.textContent = "You lost!!"
    }
}
