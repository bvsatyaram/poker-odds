const expect = require('chai').expect;
const Card = require('../../src/scripts/simulator/Card').default;
const Player = require('../../src/scripts/simulator/Player').default;
import {ALL_SUITS, ALL_RANKS} from '../../src/scripts/simulator/constants';

describe('Player', () => {
  it('gets properties', () => {
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
});
