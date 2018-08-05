import Card from './Card';
import {ALL_SUITS, ALL_RANKS} from './constants';

class Deck {
  constructor() {
    this._cards = [];
    ALL_SUITS.forEach((suit) => {
      ALL_RANKS.forEach((rank) => {
        this._cards.push(new Card(suit, rank));
      });
    });
  }

  get cards() {
    return this._cards;
  }

  find(suit, rank) {
    return this._cards.find(card => (card.suit == suit) && (card.rank == rank));
  }

  draw(card) {
    if (!(card instanceof Card)) {
      card = this.find(card.suit, card.rank);
    }
    this._cards = this._cards.filter(icard => icard !== card);
    return card;
  }

  drawRandom() {
    let card = this._cards[Math.floor(Math.random() * this._cards.length)];
    return this.draw(card);
  }
}

export default Deck;
