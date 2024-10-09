    const ageInput = document.getElementById("ageInput");
    const clasify = document.getElementById("clasify");
    const result = document.getElementById("result");
    
    let category;

    clasify.addEventListener('click',() =>{
        const age = ageInput.value.trim();
        const ageNumber = Number(age);

        if(age.toLowerCase() === 'exit'){
            result.textContent = `Bye`;
            ageInput.value = ``;
            return;
        }

        if(!isNaN(ageNumber&& age !== '') && ageNumber >= 0){
            if(ageNumber < 12){
                category = "kid";
            }else if (ageNumber >= 12 && ageNumber <= 17 ){
                category = "teenager";
            } else if (ageNumber >= 18 && age <=64){
                category = "adult";
            } else {
                category = "elder";
            }
            result.textContent = `You are a ${category}`;
    
        } else {
           result.textContent = `Invalid number`;
        }
    });
    
