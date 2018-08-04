import Card from './Card';

class Player {
  constructor() {
    this._hand = [];
  }

  get hand() {
    return this._hand;
  }

  drawCard(card) {
    if (! card instanceof Card) {
      throw new Error(`Invalid card: ${JSON.stringify(card)}`)
    }

    this._hand.push(card);
  }
}

export default Player;
