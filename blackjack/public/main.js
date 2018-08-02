const shuffleDeck = () => {
  console.log('player clicked shuffle')
  // shuffle cards between suits and types
  // for each card in deck
  for (let i = 0; i < deck.length; i++) {
    //create a random number between 0-i
    const j = Math.floor(Math.random() * i)
    //swap
    let swap = deck[i]
    deck[i] = deck[j]
    deck[j] = swap
  }
  console.log(deck)
}

const displayCard = () => {
  const displayCard = deck.pop()
  console.log(displayCard)
// create the elemnet
const _li = document.createElement("li")
// set all the properties
_li.textContent = displayCard.rank + displayCard.suit
// insert into a parent
document.querySelector('.Display').appendChild(_li)
}

const displayCard2 = () => {
  const displayCard2 = deck.pop()
  console.log(displayCard2)
  const _li = document.createElement("li")
  // set all the properties
  _li.textContent = displayCard2.rank + displayCard2.suit
  // insert into a parent
  document.querySelector('.Display').appendChild(_li)
}

const hit = () => {
  const hit = deck.pop()
  console.log(hit)
  const _li = document.createElement("li")
  // set all the properties
  _li.textContent = hit.rank + hit.suit
  // insert into a parent
  document.querySelector('.Display').appendChild(_li)
}

const deck = []

const createDeck = () => {

  const suits = [" of Hearts", " of Clubs", " of Diamonds", " of Spades"]
  const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
  const card_values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

  for (let s = 0; s < suits.length; s++) {
    for (let r = 0; r < ranks.length; r ++) {
      deck.push({
  	suit: suits[s],
  	rank: ranks[r],
  	value: card_values[r]
       })
     }
  }

  shuffleDeck()
}



document.addEventListener('DOMContentLoaded', createDeck)
document.querySelector('.Deal').addEventListener('click', displayCard)
document.querySelector('.Deal').addEventListener('click', displayCard2)
document.querySelector('.hit').addEventListener('click', hit)
document.querySelector('.shuffleButton').addEventListener('click', shuffleDeck)
