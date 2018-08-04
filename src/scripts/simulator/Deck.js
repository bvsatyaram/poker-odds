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
}

export default Deck;
