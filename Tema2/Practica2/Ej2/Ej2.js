function arrayColors(){
    let colorsArray = ["Orange", "Lime", "Turquoise", "Pink", "Red"]; 
let codeColorsArray = ["#F39C12", "#C0F312", "#12F3E5", "#F312AF", "#F31212"];
let color = document.getElementById("color").value;

for(let i = 0; i < colorsArray.length; i++){
    if(color === colorsArray[i]){
        document.getElementById('text').style.color = codeColorsArray[i];        break;
    }
}
}

