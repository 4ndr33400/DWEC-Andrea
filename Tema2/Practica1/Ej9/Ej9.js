function verifyNumbers() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const number3 = parseFloat(document.getElementById("number3").value);
    const message = document.getElementById("message");

    if (number1 < 10 || number2 < 10 || number3 < 10) {
        message.textContent = "Algun numero es menor a 10";
    } else {
        message.textContent = "Todos los numeros son mayores a 10";
    }
}