const solve = require('code-jam').solve;

// Solution for Qualification Round 2014 - Problem A. Magic Trick
solve(input => {
  const cardRow1 = input.readNumber();
  const cardsGrid1 = input.readN(4, () => input.readNumbers(4));
  const cardRow2 = input.readNumber();
  const cardsGrid2 = input.readN(4, () => input.readNumbers(4));

  const chosenRow1 = cardsGrid1[cardRow1 - 1];
  const chosenRow2 = cardsGrid2[cardRow2 - 1];

  const chosenCards = chosenRow1.filter(card => chosenRow2.indexOf(card) >= 0);

  switch (chosenCards.length) {
    case 0:
      return 'Volunteer cheated!';
    case 1:
      return chosenCards[0];
    default:
      return 'Bad magician!';
  }
});
