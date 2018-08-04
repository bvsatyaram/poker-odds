const expect = require('chai').expect;
const Deck = require('../../src/scripts/simulator/Deck').default;

describe('Deck', () => {
  it('gets properties', () => {
    const deck = new Deck();
    expect(deck.cards.length).to.equal(52);
  });
});
