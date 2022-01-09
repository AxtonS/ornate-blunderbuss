const button = document.getElementById('button')
button.onclick = () => rollDice()

function rollDice() {
    let numOfDice = prompt("How many blue dice do you have?");
    let numOfRolls = 10000;

    let death = 0;
    let life = 0;
    for (let i = 0; i < numOfRolls; i++) {
        let ones = 0;
        let eights = 0;
        for (let i = 0; i < numOfDice;) {
            let roll = Math.floor(Math.random() * 8);
            if (roll == 0) {
                ones++;
                i++;
            }
            else if (roll == 7) {
                eights++;
                i++;
            }
            else {
                i++;
            }

        }
        if (ones > eights) {

            death++;
        } else {
            life++;
        }
    }
    let chance = (death / life * 100).toFixed(2);
    alert(`Your brand new Ornate Blunderbuss, only 8 gold, incredible value wow has an approximately ${chance}% chance to explode 
    if you roll ${numOfDice} blue dice, good luck fellow value seeker!`);
}
