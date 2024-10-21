function passwordGenerator(){
    function fillArray(){
        let secretNumberArray = [];
        for (let i = 0; i < 10; i++){
            secretNumberArray[i] = Math.floor(Math.random() * 5)+1; 
        }
        return secretNumberArray;
    }
    function generateAsterisc(secretNumberArray){
        for(let i = 0; i < secretNumberArray.length; i++){
            console.log('*'.repeat(secretNumberArray[i]));
        }
    }
    let generatedArray = fillArray();
    console.log("Contraseña: " + generatedArray);
    generateAsterisc(generatedArray);
}
passwordGenerator();