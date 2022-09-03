/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
// console.log(rps)
const totalScores = { computerScore: 0, playerScore: 0 }
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice(choice) {
  let compChoice = ['Rock', 'Paper', 'Scissors']
  let random = Math.floor(Math.random() * 3)
  return compChoice[random]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  // All situations where human draws, set `score` to 0
  let score = { pscore: 1, compScore: 1 }
  if (playerChoice == 'Rock' && computerChoice == 'Rock') {
    score = { pscore: 1, compScore: 1 }
  }

  else if (playerChoice == 'Scissors' && computerChoice == 'Scissors') {
    score = { pscore: 1, compScore: 1 }
  }
  else if (playerChoice == 'Paper' && computerChoice == 'Paper') {
    score = { pscore: 1, compScore: 1 }
  }


  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here

  else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = { pscore: 5, compScore: 0 }
  }
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = { pscore: 5, compScore: 0 }
  }
  else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = { pscore: 5, compScore: 0 }
  }
  // Otherwise human loses (aka set score to -1)

  if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
    score = { pscore: 0, compScore: 5 }
  }
  else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
    score = { pscore: 0, compScore: 5 }
  }
  else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
    score = { pscore: 0, compScore: 5 }
  }

  // return score
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  let result = document.getElementById('result')
  let handsDiv = document.getElementById('hands')
  const cScoreDiv = document.getElementById('cScore')
  const playerScoreDiv = document.getElementById('player-score')

  if (score.pscore == 5) {
    result.innerText = 'You Won!'

  }
  else if (score.pscore == 1) {

    result.innerText = 'It\'s a tie!'
  }
  // You should do result.innerText = 'You Lose!'
  else if (score.pscore == 0) {
    result.innerText = 'You Loose!'

  }
  handsDiv.innerText = `👨🏾‍💼${playerChoice} vs 🤖${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScores['playerScore']}`
  cScoreDiv.innerText = `Robot Score: ${totalScores['computerScore']}`
  // Don't forget to grab the div with the 'result' id!

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  console.log({ computerChoice })
  const score = getResult(playerChoice, computerChoice)
  console.log({ score })
  totalScores['playerScore'] += score.pscore
  totalScores['computerScore'] += score.compScore
  console.log(totalScores)
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons


  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  const rps = document.querySelectorAll('.rpsButton')
  rps.forEach(rpsBtn => {
    rpsBtn.onclick = () => onClickRPS(rpsBtn.value)
  })
  const endGamebtn = document.getElementById('endGameButton')
  endGamebtn.onclick = () => endGame()
  // 2. Add a 'click' event listener to each button

  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument



  // Add a click listener to the end game button that runs the endGame() function on click

}

// ** endGame function clears all the text on the DOM **
function endGame() {
  totalScores['computerScore'] = 0
  totalScores['playerScore'] = 0
  let result = document.getElementById('result')
  let handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const cScoreDiv = document.getElementById('cScore')



  handsDiv.innerText = ''
  result.innerText = ''
  playerScoreDiv.innerText = ''
  cScoreDiv.innerText = ''


}

playGame()