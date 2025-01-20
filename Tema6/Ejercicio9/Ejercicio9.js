const number = document.getElementById("number");
const maxLimit = 10;
const minLimit = 0;

number.textContent = 0;

document.addEventListener("keyup", (event) => {
    let currentNumber = parseInt(number.textContent); 

    if (event.key === "ArrowUp") {
        if (currentNumber < maxLimit) {
            currentNumber++; 
        } else {
            currentNumber = minLimit; 
        }
        number.textContent = currentNumber; 
    }
});

document.addEventListener("keydown", (event) => {
    let currentNumber = parseInt(number.textContent); 

    if (event.key === "ArrowDown") {
        if (currentNumber > minLimit) {
            currentNumber--; 
        } else {
            currentNumber = minLimit; 
        }
        number.textContent = currentNumber; 
    }
});
