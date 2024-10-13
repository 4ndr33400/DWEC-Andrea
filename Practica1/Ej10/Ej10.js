function verifyChristmas() {
    const dateIntroduced = new Date(document.getElementById("date").value);
    const message = document.getElementById("message");
    const day = dateIntroduced.getDate();
    const month = dateIntroduced.getMonth(); 

    if (day === 25 && month === 11) { 
        message.textContent = "¡IT'S CHRISTMAS!";
    } else {
        message.textContent = "it's not christmas :(";
    }
}