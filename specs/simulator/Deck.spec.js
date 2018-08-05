const expect = require('chai').expect;
const Deck = require('../../src/scripts/simulator/Deck').default;
const Card = require('../../src/scripts/simulator/Card').default;
import {ALL_SUITS, ALL_RANKS} from '../../src/scripts/simulator/constants';

describe('Deck', () => {
  it('initializes the deck', () => {
    const deck = new Deck();
    expect(deck.cards.length).to.equal(52);
  });

  it('finds a card in the deck', () => {
    const deck = new Deck();
    const myCard = {"suit": ALL_SUITS[2], "rank": ALL_RANKS[5]};
    const card = deck.find(myCard.suit, myCard.rank);
    expect(card.suit).to.equal(myCard.suit);
    expect(card.rank).to.equal(myCard.rank);
  });

  it('draws a card from the deck with card as an input', () => {
    const deck = new Deck();
    const myCard = deck.find(ALL_SUITS[2], ALL_RANKS[5]);
    expect(deck.cards.length).to.equal(52);
    const card = deck.draw(myCard);
    expect(card).to.equal(myCard);
    expect(deck.cards.length).to.equal(51);
  });

  it('draws a card from the deck with object as an input', () => {
    const deck = new Deck();
    const myCard = {suit: ALL_SUITS[2], rank: ALL_RANKS[5]};
    expect(deck.cards.length).to.equal(52);
    const card = deck.draw(myCard);
    expect(card).to.be.an.instanceOf(Card);
    expect(card.suit).to.equal(myCard.suit);
    expect(card.rank).to.equal(myCard.rank);
    expect(deck.cards.length).to.equal(51);
  });

  it('draws a random card', () => {
    const deck = new Deck();
    expect(deck.cards.length).to.equal(52);
    const card = deck.drawRandom();
    expect(card).to.be.an.instanceOf(Card);
    expect(deck.cards.length).to.equal(51);
  });
});
