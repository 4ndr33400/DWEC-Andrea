const greet = document.getElementById("greet");
const result = document.getElementById("result");

greet.addEventListener('click',() =>{

    const timeInput = document.getElementById("timeInput");
    const time = Number(timeInput.value);
    let greeting;

    if(time >= 7 && time < 12){
        greeting = "Buenos dias";
    } else if (time >= 12 && time < 20){
        greeting = "Buenas tardes";
    } else if (time >= 20 || time <= 2){
        greeting = "Buenas noches";
    } else {
        greeting = "Que haces despiert@ a estas horas?";
    }

result.textContent = greeting ;

});
