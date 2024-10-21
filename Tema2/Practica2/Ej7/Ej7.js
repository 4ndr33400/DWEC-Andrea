function loteryGame(){

    function generateArrayNumbers(){
        let arrayNumbers = [];
        for(let i = 0; i < 5; i++){
            arrayNumbers[i] = Math.floor(Math.random() * 10);
        }
        return arrayNumbers;
    }
    
    function checkNumber(){
        let numberGuess = parseInt(document.getElementById("numberGuess").value);
        let arrayNumbers = generateArrayNumbers();
        let guessResult = document.getElementById("guessResult");
        let numberFound = false;
        
        for(let i = 0; i < arrayNumbers.length; i++){
            if(arrayNumbers[i] === numberGuess){
                guessResult.textContent = `Has acertado el numero ${numberGuess} esta en la posicion ${i + 1}`;
                numberFound = true;
                break;
            } 
        }
        if (!numberFound){
            guessResult.textContent = `Este numero no esta en el boleto.`;
        }
    }
    checkNumber();
}