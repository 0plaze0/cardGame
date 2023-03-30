import Deck from "./deck.js";
import {Card} from "./deck.js";

const CARD_DECK_VALUE  = {
    "A":1, 
    "2":2,
    "3":3,
    "4":4,
    "5":5, 
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "10":10,
    "J":11,
    "K":12,
    "Q":13
};

const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const playerDeckElem = document.querySelector(".player-deck");
const computerDeckElem = document.querySelector(".computer-deck");
const text = document.querySelector(".text");




let playerDeck,computerDeck,inRound;


document.addEventListener("click",()=>{
    if(stop){
        startGame();
        return
    }
    if(inRound){
        cleanUpBeforeRound();
    }else{
        flipCard();
    }
})


function startGame(){
    stop=false;
    inRound=false;
    const newDeck = new Deck();
    newDeck.suffle();

    const midPoint = Math.ceil((newDeck.lengthOfDeck)/2);
    playerDeck = new Deck(newDeck.cards.slice(0,midPoint-1));
    computerDeck = new Deck(newDeck.cards.slice(midPoint,newDeck.cards.lengthOfDeck));
    // computerDeck = new Deck([new Card('s','0')]);
    console.log(newDeck.cards.slice(midPoint+1,newDeck.cards.lengthOfDeck));
    console.log(playerDeck);
    console.log(computerDeck);
    cleanUpBeforeRound();
}

function cleanUpBeforeRound(){
    inRound=false;
    text.innerHTML = '';
    computerDeckElem.innerHTML = '';
    playerDeckElem.innerHTML = '';
    playerCardSlot.innerHTML='';
    computerCardSlot.innerHTML='';
    updateValue();
}
function flipCard(){
    inRound=true;

    const playerCard = playerDeck.pop();
    const computerCard = computerDeck.pop();

    playerCardSlot.appendChild(playerCard.getHTML());
    computerCardSlot.appendChild(computerCard.getHTML());

    updateValue();

    if(isRoundWinner(computerCard, playerCard)){
        text.innerText = "lose";
        playerDeck.push(playerCard);
        playerDeck.push(computerCard);
    }else if(isRoundWinner(playerCard, computerCard)){
        text.innerText = "win";
        computerDeck.push(playerCard);
        computerDeck.push(computerCard);
    }else {
        text.innerText = "Draw";
        playerDeck.push(playerCard);
        computerDeck.push(computerCard);
    }

    if(isGameOver(playerDeck.lengthOfDeck)){
        text.innerHTML = 'You lose';
        stop = true;
    }else if (isGameOver(computerDeck.length)){
        text.innerHTML = 'You win';
        stop = true;
    }
        
    
}
function updateValue(){
    computerDeckElem.innerHTML=computerDeck.lengthOfDeck;
    playerDeckElem.innerHTML=playerDeck.lengthOfDeck;
}
function isRoundWinner(cardOne, cardTwo){
    // console.log(CARD_DECK_VALUE[cardOne.value]);
    // console.log(CARD_DECK_VALUE[cardTwo.value]);
    return CARD_DECK_VALUE[cardOne.value] > CARD_DECK_VALUE[cardTwo.value];
}
function isGameOver(deck){
    return deck === 0;
}