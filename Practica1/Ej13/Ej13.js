function lemonsSong(){
    let lemonNumber = parseFloat(document.getElementById("lemonNumber").value);
    let result = document.getElementById("result");
    for(let i = 1; i <= lemonNumber; i++){
        result.textContent += `${i} limón, y medio limón.`;
    }
    result.textContent += `¡¡¡Y ${lemonNumber} LIMONES Y MEDIO LIMÓN!!!`;
}