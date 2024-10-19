function calculator(){
    let condition = false;
    let gradesArray = [];
    while(!condition){
        let grade = prompt("Ingresa una nota o introduzca 'salir': ");
        grade = parseInt(grade);
    
        if (grade.toLowerCase() === "salir"){
            if (gradesArray.length === 0) {
                console.log("No se ingresaron notas.");
                break;
            }

            let sum = gradesArray.reduce((acc, curr) => acc + curr,0);
            let average = sum/gradesArray.length;
            let averageOverAll = "Reprovado";
            if(average >= 70){
                averageOverAll = "Aprobado";
            }
            gradesArray.sort(function(a, b){return a - b});

            console.log("La media de notas fue: " + average.toFixed(2));
            console.log("La mayoria de los alumnos han " + averageOverAll); 
            console.log(`La nota mas baja fue: ` + gradesArray[0] + `\nLa nota mas alta: ` + gradesArray[gradesArray.length - 1]);
            console.log("Cantidad de notas" + gradesArray.length);
            console.log("adios");

            condition = true;
            
        } else{
            grade = parseFloat(grade);
            if(!isNaN(grade) && grade >= 0 && grade <= 100){
                gradesArray.push(grade);
            } else {
                console.log("Introduce una nota valida.");
            }
        }
    }
}
calculator();