import {ALL_SUITS, ALL_RANKS} from './constants';

class Card {
  constructor(suit, rank) {
    if (ALL_SUITS.indexOf(suit) == -1) {
      throw new Error(`Invalid suit: ${suit}`);
    }
    if (ALL_RANKS.indexOf(rank) == -1) {
      throw new Error(`Invalid rank: ${rank}`);
    }

    this._suit = suit;
    this._rank = rank;
  }

  get suit() {
    return this._suit;
  }

  get rank() {
    return this._rank;
  }
}

export default Card;
