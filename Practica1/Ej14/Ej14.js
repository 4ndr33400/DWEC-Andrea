function maximumNumber(){
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let thirdNumber = parseFloat(document.getElementById("thirdNumber").value);

    let greatestNumber = document.getElementById("greatestNumber");
    let result = document.getElementById("result");

    if(firstNumber > secondNumber && firstNumber > thirdNumber){
        greatestNumber = firstNumber;
    } else if(firstNumber < secondNumber && secondNumber > thirdNumber){
        greatestNumber = secondNumber;
    } else{
        greatestNumber = thirdNumber;
    }
    result.textContent = `El numero mayor es: ${greatestNumber}`;

}