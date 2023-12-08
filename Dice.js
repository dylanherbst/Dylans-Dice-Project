
function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollDice() {
    const selectedDice = document.getElementById('dice-type-selection');
    const sides1 = 6; 
    const sides2 = 10; 

    const result1 = rollDie(sides1);
    const result2 = rollDie(sides2);

    const diceResultsElement1 = document.getElementById('dice-results1');
    const diceResultsElement2 = document.getElementById('dice-results2');

  

    diceResultsElement1.textContent = result1;
    diceResultsElement2.textContent = result2;
}

