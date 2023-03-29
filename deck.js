const SUIT = ['♠','♥','♦','♣'];
const VALUES = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9','J','Q','K'];

export default class Deck{
    constructor(cards=freshDeck()){
        this.cards = cards;
    }
    get lengthOfDeck(){
        return this.cards.length;
    }
    suffle(){
        for(let i=this.lengthOfDeck; i>0; i--){
            let newIndex = Math.floor(Math.random()*(i+1));
            let oldValue = this.cards[i];
            this.cards[i] = this.cards[newIndex];
            this.cards[newIndex] = oldValue;
        }
    }
}

class Card{
    constructor(suit,value){
        this.suit = suit;
        this.value = value;
    }
}

const freshDeck = ()=>{
    return SUIT.flatMap((suit)=>{
        return VALUES.map((value)=>{
            return new Card(suit,value);
        })
    })
}
