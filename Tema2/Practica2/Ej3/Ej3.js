function matrix(){
    let numberRows = 3;
    let numberColumns = 3;
    let matrix =[];

    for(let i = 0; i < numberRows ; i++){
        matrix[i] = [];
        for(let j = 0; j < numberColumns; j++){
            matrix[i][j] = Math.floor(Math.random() * 100);
        }
    }
    console.log("Matriz");
    console.log(matrix);

    console.log ("Elementos de la diagonal: ")
    for(let i = 0; i< numberRows;i++){
        console.log(matrix[i][i]);
    }
}
matrix();