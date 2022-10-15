const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'
const playingChoices = [ROCK, PAPER, SCISSORS]

let playerScore = 0
let computerScore = 0

const computerPlay = () => {
  return playingChoices[Math.floor(Math.random() * 3)]
}

// a recursive function to make sure that the player enters a valid value
const playerPlay = () => {
  const playerInput = window.prompt('Choose Rock, Paper, or Scissors', '').toLowerCase()

  if (playingChoices.includes(playerInput)) {
    return playerInput
  }
  else {
    alert('INVALID INPUT! Choose: Rock, Paper, or Scissors')
    playerPlay()
  }
}

const playRound = (playerSelection, computerSelection) => {
  const wonRound = () => {
    playerScore++
    return `you win, ${playerSelection} beats ${computerSelection}`
  }

  const lostRound = () => {
    computerScore++
    return `you lose, ${computerSelection} beats ${playerSelection}`
  }

  // Game conditions
  const checkCondition = (playerHand, computerHand) => {
    return playerSelection === playerHand && computerSelection === computerHand
  }

  if (playerSelection === computerSelection) return 'you draw'
  else if (checkCondition(ROCK, SCISSORS)) return wonRound()
  else if (checkCondition(SCISSORS, PAPER)) return wonRound()
  else if (checkCondition(PAPER, ROCK)) return wonRound()
  return lostRound()
}

const play = () => {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerPlay(), computerPlay()))
  }

  // The result of the game
  if (playerScore === computerScore) {
    alert('It\'s a draw')
    return playAgain()
  }
  else if (playerScore > computerScore) {
    alert('You are the winner 🥳')
    return playAgain()
  }
  else if (playerScore < computerScore) {
    alert('You have lost 💀')
    return playAgain()
  }
}

function playAgain() {
  const playAgainInput = window.prompt('Enter "play" to play again', 'play').toLowerCase()

  if (playAgainInput === 'play') {
    console.clear()
    playerScore = 0
    computerScore = 0
    return play()
  }
}

setTimeout(() => {
  play()
}, 1000)