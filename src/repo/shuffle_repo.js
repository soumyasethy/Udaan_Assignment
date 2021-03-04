import {data} from '../models/data';
export const shuffleCards = () => {
  // create a data.cards of cards
  for (let i = 0; i < data.suits.length; i++) {
    for (let x = 0; x < data.ranks.length; x++) {
      let card = {Rank: data.ranks[x], Suit: data.suits[i]};
      data.cards.push(card);
    }
  }

  // shuffle the cards
  for (let i = data.cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = data.cards[i];
    data.cards[i] = data.cards[j];
    data.cards[j] = temp;
  }
  return data.cards;
};
