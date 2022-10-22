const playerScoreTextElement = document.querySelector('#player-score')
const computerScoreTextElement = document.querySelector('#computer-score')
const playerChoiceSection = document.querySelector('#player-choice')
const computerChoiceSection = document.querySelector('#computer-choice')
const playerPickButtons = document.querySelectorAll('.player-pick')
const resetButton = document.querySelector('#rest-btn')
const playingOptionsArray = ['✊', '🤚', '✌️']

let playerScore = 0
let computerScore = 0

const computerPlay = () => {
  return playingOptionsArray[Math.floor(Math.random() * 3)]
}

const playRound = (playerSelection, computerSelection) => {
  playerChoiceSection.innerText = playerSelection
  computerChoiceSection.innerText = computerSelection

  const wonRound = () => {
    playerScore++
    playerScoreTextElement.innerText = playerScore
  }
  const lostRound = () => {
    computerScore++
    computerScoreTextElement.innerText = computerScore
  }

  // Game conditions
  const checkCondition = (playerHand, computerHand) => {
    return playerSelection === playerHand && computerSelection === computerHand
  }
  if (checkCondition('✊', '✌️') ||
    checkCondition('✌️', '🤚') ||
    checkCondition('🤚', '✊')
  ) return wonRound()
  else if (checkCondition('✌️', '✊') ||
    checkCondition('🤚', '✌️') ||
    checkCondition('✊', '🤚')
  ) return lostRound()
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

playerPickButtons.forEach(button => {
  button.addEventListener('click', () => {
    playRound(button.innerText, computerPlay())
  })
})

resetButton.addEventListener('click', () => {
  playerChoiceSection.innerText = ''
  computerChoiceSection.innerText = ''
  playerScoreTextElement.innerText = 0
  computerScoreTextElement.innerText = 0
  playerScore = 0
  computerScore = 0
})