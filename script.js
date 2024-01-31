let playerScore = 0
let computerScore = 0
let roundWinner = ''
let currentRound = 1

//game

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie"
        currentRound++
    }

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
       currentRound++}
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
const playerScoreInfo = document.getElementById("playerScoreInfo")
const computerScoreInfo = document.getElementById("computerScoreInfo")
const scoreMessage = document.getElementById("scoreMessage")
const scoreInfo = document.getElementById("scoreInfo")
const roundCount = document.getElementById("roundCount")
const endGameModal = document.getElementById("endGameModal")
const endGameMessage = document.getElementById("endGameMessage")
const overlay = document.getElementById("overlay")
const restartBTN = document.getElementById("restartBTN")

charmanderBTN.addEventListener("click", () => handleClick("Charmander"))
bulbasaurBTN.addEventListener("click", () => handleClick("Bulbasaur"))
squirtleBTN.addEventListener("click", () => handleClick("Squirtle"))

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
    
    if (roundWinner === "tie") {
    scoreInfo.textContent = "It's a tie!!"
    }
    else if (roundWinner === "player") {
        scoreInfo.textContent = "You won!!"
    }
    else if (roundWinner === "computer") {
       scoreInfo.textContent = "You lost!!"
    }
}
function updateScoreMessage (roundWinner, playerSelection, computerSelection) {
    if (roundWinner === "player") {
        scoreMessage.textContent = `${playerSelection} beats ${computerSelection}`
        return
    }
    if (roundWinner === "computer") {
        scoreMessage.textContent = `${playerSelection} is beaten by ${computerSelection}`
        return
    }
    scoreMessage.textContent = `${playerSelection}s do not attack each other`

}

//function pokemonColor () {
   // if ((playerSelection === "Charmander" && computerSelection === "Charmander") ||
   // (playerSelection === "Charmander" || computerSelection === "Charmander")) {
   // }
//}

function openEndgameModal() {
    
}