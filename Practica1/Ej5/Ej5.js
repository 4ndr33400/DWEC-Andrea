function validateNumber(){
    let number = document.getElementById("number").value;
    if(isNaN(number)){
        alert("No has introducido un numero");
    } else {
        alert("Has introducido un numero")
    }
}