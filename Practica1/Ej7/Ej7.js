const greet = document.getElementById("greet");
const result = document.getElementById("result");

greet.addEventListener('click',() =>{

    const timeInput = document.getElementById("timeInput");
    const time = Number(timeInput.value);
    let greeting;

    if(time >= 7 && time < 12){
        greeting = "Good morning";
    } else if (time >= 12 && time < 20){
        greeting = "Good noon";
    } else if (time >= 20 || time <= 2){
        greeting = "Good night";
    } else {
        greeting = "Why are you awake?";
    }

result.textContent = greeting ;

});
