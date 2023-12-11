const testFunc = require("./Dice.js");


test('is dice only six sided?', () => {
  var result = testFunc.rollDie6 ()  
  expect(result).toBeOneOf([1, 2, 3, 4, 5, 6]);
  });


test('is dice 10 sided?', () => {
  var result = testFunc.rollDie10 ()  
  expect(result).toBeOneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
