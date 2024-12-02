function readParagraph(){
    let name = document.getElementById("name").value;
    if(name == null){
        
    }

    let email = document.getElementById("email").value;
    let expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let verified = expression.test(email);

    if(email != null){
        if(verified){
            addParagraph();
        } else {
            document.getElementById("errorMessage").innerHTML = " * El email no es correcto "
        }
    } else {
       document.getElementById("errorMessage").innerHTML = "* Este campo es obligatorio."
    }

    let paragraph = document.getElementById("paragraph").value;
    if(paragraph == ""){
        document.getElementById("errorMessage").innerHTML = "Este campo es obligatorio."
    }
}
function addParagraph(){

}