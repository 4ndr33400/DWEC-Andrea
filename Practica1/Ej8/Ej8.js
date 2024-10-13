
    const pyramidNumber = document.getElementById("pyramidNumber");
    const result = document.getElementById("result");
    const pyramidBuilder = document.getElementById("pyramidBuilder");
    
    pyramidBuilder.addEventListener('click',() =>{
        const number = parseInt(pyramidNumber.value);
        if(isNaN(number) || number <= 0){
            result.textContent = "Please enter a valid number";
            return;
        } 
        let pyramid = "";
        for(let i = 0; i <= number; i++){
            pyramid += "* ".repeat(i) + "\n";
        }
        result.textContent = pyramid;
    });