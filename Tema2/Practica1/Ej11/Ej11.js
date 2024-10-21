function throwDice() {
    let resultElement = document.getElementById("result"); 
    let tries = 0;
    let number;
    let resultText = ""; 
    do {
        number = Math.floor(Math.random() * 6) + 1; 
        tries++;
        resultText += `Tirada ${tries}: Numero :${number}<br>`; 
    } while (number % 2 !== 0);

    resultText += `Conseguiste un número par después de ${tries} tiradas.`; 
    resultElement.innerHTML = resultText; 
}
