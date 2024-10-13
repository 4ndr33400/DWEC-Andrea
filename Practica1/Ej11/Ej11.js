function throwDice() {
    let tries = 0;
    let number;
    do {
        number = Math.floor(Math.random() * 5) + 1;  
        tries++;
        console.log("You got the number: " + number);
    } while (number % 2 !== 0);  
    console.log(` I've got an even number after ${tries} tries.`);
}