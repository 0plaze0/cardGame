import Deck from "./deck.js";

const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const playerDeckElem = document.querySelector(".player-deck");
const computerDeckElem = document.querySelector(".computer-deck");
const text = document.querySelector(".text");




let playerDeck,computerDeck,inRound;
startGame();

document.addEventListener("click",()=>{
    if(inRound){
        cleanUpBeforeRound();
    }else{
        flipCard();
    }
})


function startGame(){
    inRound=false;
    const newDeck = new Deck();
    newDeck.suffle();

    const midPoint = Math.ceil(newDeck.lengthOfDeck/2);
    playerDeck = new Deck(newDeck.cards.slice(0,midPoint-1));
    computerDeck = new Deck(newDeck.cards.slice(midPoint,newDeck.cards.lengthOfDeck));
    // console.log(playerDeck);
    // console.log(computerDeck);
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
    
}
function updateValue(){
    computerDeckElem.innerHTML=computerDeck.lengthOfDeck;
    playerDeckElem.innerHTML=playerDeck.lengthOfDeck;
}