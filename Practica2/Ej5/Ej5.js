function passwordGenerator(){
    function fillArray(){
        let secretNumberArray = [];
        for (let i = 0; i < secretNumberArray.length; i++){
            secretNumberArray[i] = Math.floor(Math.random() * 5); 
        }
        return secretNumberArray;
    }
    function generateAsterisc(secretNumberArray){
        for(let i = 0; i < secretNumberArray.length; i++){
            console.log('*'.repeat(secretNumberArray[i]));
        }
    }
    let generatedArray = fillArray();
    console.log(generatedArray);
    let asteriscSerie = generateAsterisc(generatedArray);
    console.log(asteriscSerie);
}
passwordGenerator();