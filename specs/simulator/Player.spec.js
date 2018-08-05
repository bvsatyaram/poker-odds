const expect = require('chai').expect;
const Card = require('../../src/scripts/simulator/Card').default;
const Player = require('../../src/scripts/simulator/Player').default;
import {ALL_SUITS, ALL_RANKS} from '../../src/scripts/simulator/constants';

describe('Player', () => {
  it('initializes a player with unknown hand', () => {
    const player = new Player();
    expect(player.hand.length).to.equal(0);
  });

  it('adds a card to hand when drawn', () => {
    const player = new Player();
    expect(player.hand.length).to.equal(0);
    let suit = ALL_SUITS[2];
    let rank = ALL_RANKS[5];
    let drawnCard  = new Card(suit, rank);
    player.drawCard(drawnCard);
    expect(player.hand.length).to.equal(1);
    let cardInHand = player.hand[0];
    expect(cardInHand).to.be.an.instanceof(Card);
    expect(cardInHand).to.equal(drawnCard);
  });

  it('initializes a player with known hand', () => {
    const myHand = [
      new Card(ALL_SUITS[2], ALL_RANKS[5]),
      new Card(ALL_SUITS[1], ALL_RANKS[7])
    ];
    const player = new Player(myHand);
    expect(player.hand.length).to.equal(2);
    expect(player.hand[0]).to.equal(myHand[0]);
    expect(player.hand[1]).to.equal(myHand[1]);
  });
});
