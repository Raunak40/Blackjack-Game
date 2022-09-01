let sum = 0
let cards =[]
let isAlive = false
let hasBlackjack = false
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")
let player = {
    name: "Raunak",
    chips: 500
}
playerEl.textContent= player.name +": " + "₨" + player.chips
function getRandomCard(){
    let randomNumber = Math.floor ( Math.random()*13 ) + 1
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    hasBlackjack = false
    let firsrtCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =  [firsrtCard, secondCard]
    sum = firsrtCard + secondCard
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for(i= 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        messageEl.textContent = "Draw a new card"
    }
    else if (sum === 21) {
        messageEl.textContent = "You got a blackjack"
        hasBlackjack = true
    }
    else {
        messageEl.textContent = "You are out of the game"
        isAlive = false
    }
}
function newCard() {
    if (isAlive === true && hasBlackjack === false)
    {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()    
    }
}
// you have to complete previous game to restart the game
function restartGame() {
    if (isAlive === false || hasBlackjack === true) {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    messageEl.textContent = "Want to play a round?"
    }
}