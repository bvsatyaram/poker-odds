const expect = require('chai').expect;
const Game = require('../../src/scripts/simulator/Game').default;
const Deck = require('../../src/scripts/simulator/Deck').default;
const Card = require('../../src/scripts/simulator/Card').default;
const Player = require('../../src/scripts/simulator/Player').default;
import {ALL_SUITS, ALL_RANKS} from '../../src/scripts/simulator/constants';

describe('Game', () => {
  it('initializes a game with no known community cards', () => {
    const myHand = [
      {"suit": ALL_SUITS[2], "rank": ALL_RANKS[5]},
      {"suit": ALL_SUITS[1], "rank": ALL_RANKS[7]}
    ];
    const game = new Game(4, myHand);
    expect(game.players.length).to.equal(4);
    expect(game.players[1]).to.be.an.instanceof(Player);
    expect(game.communityCards.length).to.equal(5);
    expect(game.communityCards[0]).to.be.an.instanceof(Card);
    let myPlayer = game.myPlayer;
    expect(myPlayer).to.equal(game.players[0]);
    expect(myPlayer.hand.length).to.equal(2);
    expect(myPlayer.hand[0].suit).to.equal(myHand[0].suit);
    expect(myPlayer.hand[0].hand).to.equal(myHand[0].hand);
    expect(myPlayer.hand[1].suit).to.equal(myHand[1].suit);
    expect(myPlayer.hand[1].hand).to.equal(myHand[1].hand);
    expect(game.communityCards.length).to.equal(5);
    expect(game.communityCards[0]).to.be.an.instanceof(Card);
    expect(game._deck).to.be.an.instanceof(Deck);
    // 8 cards for 4 players and 5 community cards
    expect(game._deck.cards.length).to.equal(39);
  });

  it('initializes a game with 3 known community cards', () => {
    const myHand = [
      {"suit": ALL_SUITS[2], "rank": ALL_RANKS[5]},
      {"suit": ALL_SUITS[1], "rank": ALL_RANKS[7]}
    ];
    const communityCards = [
      {"suit": ALL_SUITS[1], "rank": ALL_RANKS[4]},
      {"suit": ALL_SUITS[0], "rank": ALL_RANKS[5]},
      {"suit": ALL_SUITS[3], "rank": ALL_RANKS[6]}
    ];
    const game = new Game(4, myHand, communityCards);
    expect(game.players.length).to.equal(4);
    expect(game.players[1]).to.be.an.instanceof(Player);
    expect(game.communityCards.length).to.equal(5);
    expect(game.communityCards[0]).to.be.an.instanceof(Card);
    let myPlayer = game.myPlayer;
    expect(myPlayer).to.equal(game.players[0]);
    expect(myPlayer.hand.length).to.equal(2);
    expect(myPlayer.hand[0]).to.be.an.instanceof(Card);
    expect(myPlayer.hand[0].suit).to.equal(myHand[0].suit);
    expect(myPlayer.hand[0].hand).to.equal(myHand[0].hand);
    expect(myPlayer.hand[1].suit).to.equal(myHand[1].suit);
    expect(myPlayer.hand[1].hand).to.equal(myHand[1].hand);
    expect(game.communityCards.length).to.equal(5);
    expect(game.communityCards[0]).to.be.an.instanceof(Card);
    expect(game.communityCards[0].suit).to.equal(communityCards[0].suit);
    expect(game.communityCards[0].hand).to.equal(communityCards[0].hand);
    expect(game.communityCards[1].suit).to.equal(communityCards[1].suit);
    expect(game.communityCards[1].hand).to.equal(communityCards[1].hand);
    expect(game.communityCards[2].suit).to.equal(communityCards[2].suit);
    expect(game.communityCards[2].hand).to.equal(communityCards[2].hand);
  });

  it('initializes a game with 5 known community cards', () => {
    const myHand = [
      {"suit": ALL_SUITS[2], "rank": ALL_RANKS[5]},
      {"suit": ALL_SUITS[1], "rank": ALL_RANKS[7]}
    ];
    const communityCards = [
      {"suit": ALL_SUITS[1], "rank": ALL_RANKS[4]},
      {"suit": ALL_SUITS[0], "rank": ALL_RANKS[5]},
      {"suit": ALL_SUITS[3], "rank": ALL_RANKS[6]},
      {"suit": ALL_SUITS[0], "rank": ALL_RANKS[7]},
      {"suit": ALL_SUITS[1], "rank": ALL_RANKS[8]}
    ];
    const game = new Game(4, myHand, communityCards);
    expect(game.players.length).to.equal(4);
    expect(game.players[1]).to.be.an.instanceof(Player);
    expect(game.communityCards.length).to.equal(5);
    expect(game.communityCards[0]).to.be.an.instanceof(Card);
    let myPlayer = game.myPlayer;
    expect(myPlayer).to.equal(game.players[0]);
    expect(myPlayer.hand.length).to.equal(2);
    expect(myPlayer.hand[0]).to.be.an.instanceof(Card);
    expect(myPlayer.hand[0].suit).to.equal(myHand[0].suit);
    expect(myPlayer.hand[0].hand).to.equal(myHand[0].hand);
    expect(myPlayer.hand[1].suit).to.equal(myHand[1].suit);
    expect(myPlayer.hand[1].hand).to.equal(myHand[1].hand);
    expect(game.communityCards.length).to.equal(5);
    expect(game.communityCards[0]).to.be.an.instanceof(Card);
    expect(game.communityCards[0].suit).to.equal(communityCards[0].suit);
    expect(game.communityCards[0].hand).to.equal(communityCards[0].hand);
    expect(game.communityCards[1].suit).to.equal(communityCards[1].suit);
    expect(game.communityCards[1].hand).to.equal(communityCards[1].hand);
    expect(game.communityCards[2].suit).to.equal(communityCards[2].suit);
    expect(game.communityCards[2].hand).to.equal(communityCards[2].hand);
    expect(game.communityCards[3].suit).to.equal(communityCards[3].suit);
    expect(game.communityCards[3].hand).to.equal(communityCards[3].hand);
    expect(game.communityCards[4].suit).to.equal(communityCards[4].suit);
    expect(game.communityCards[4].hand).to.equal(communityCards[4].hand);
  });
});
