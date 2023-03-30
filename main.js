import Deck from "./deck.js";

const computerCardSlot = document.querySelector(".computer-card-slot");

const newDeck = new Deck();
newDeck.suffle();
computerCardSlot.appendChild(newDeck.cards[0].getHTML());
