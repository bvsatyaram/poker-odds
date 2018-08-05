import Card from './Card';
import Player from './Player';
import Deck from './Deck';

class Game {
  constructor(playersCount, myHand, communityCards = []) {
    this._deck = new Deck();

    communityCards = communityCards.map(card => this._deck.draw(card));
    this._communityCards = communityCards;

    this._players = [];

    let player;
    myHand = myHand.map(card => this._deck.draw(card));
    player = new Player(myHand);
    this._myPlayer = player;
    this._players.push(player);

    for(let i = 1; i < playersCount; i++) {
      player = new Player();
      this._players.push(player);
    }

    let communityCardSlots = 5 - this._communityCards.length;
    for(let i = 0; i < communityCardSlots; i++) {
      this._communityCards.push(this._deck.drawRandom());
    }
  }

  get players() {
    return this._players;
  }

  get myPlayer() {
    return this._myPlayer;
  }

  get communityCards() {
    return this._communityCards;
  };
}

export default Game;
