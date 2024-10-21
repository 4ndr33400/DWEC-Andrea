function splitNumbers(){
    let arrayMessyNumbers = [1,5,8,40,100,-3,2.5,3000];
    arrayMessyNumbers.sort(function(a, b){return a - b});
    let middleIndex = Math.floor(arrayMessyNumbers.length/2);
    let greaterNumbers = arrayMessyNumbers.slice(middleIndex);
    let lowerNumbers = arrayMessyNumbers.slice(0, middleIndex);
    console.log("Numeros grandes: " + greaterNumbers);
    console.log("Numeros pequeños: " + lowerNumbers);
}
splitNumbers();