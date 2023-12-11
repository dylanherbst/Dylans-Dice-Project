let methods = {
    "6": rollDie6,
    "10": rollDie10
};

function rollDie6() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDie10() {
    return Math.floor(Math.random() * 10) + 1;
}

function rollDice() {
    let selectedDice = document.getElementById('dice-type-selection').value;
    let resultElement = document.getElementById('dice-results1');
    
    // Call the appropriate function based on the selected dice type
    let result = methods[selectedDice]();
    
    resultElement.innerHTML = (`Result: ${result}`);}

    module.exports = { rollDie6, rollDie10} 