const expect = require('chai').expect;
const Card = require('../../src/scripts/simulator/Card').default;

describe('Card', () => {
  it('gets properties', () => {
    const card = new Card('♠', '3');
    expect(card.suit).to.equal('♠');
    expect(card.rank).to.equal('3');
  });
});
