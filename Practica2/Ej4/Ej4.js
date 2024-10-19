function calculator(){
    function createMatrix(){
        let matrix = [3][3];
        for (let i = 0; i < 3; i++){
            matrix[i] = [];
            for(let j = 0; j < 3; j++){
                matrix[i][j] = Math.floor(Math.random() * 100 )
            } 
        }
        return matrix;
    }
    
    function transposeMatrix(matrix){
        let transposeMatrix = [];
        
        for(let i = 0; i < 3; i++){
            matrix[i] = [];
            for(let j = 0; j < 3; j++){
                transposeMatrix[i][j] = matrix[j][i];
            }
        }
        return transposeMatrix;
    }
    function printMatrix(matrix){
        for(let i = 0; i < matrix.length; i++){
            console.log(matrix[i].join(","));
        }
    }

    let initialMatrix = createMatrix();
    printMatrix(initialMatrix);
    let transposedMatrix = transposeMatrix(initialMatrix);
    printMatrix(transposedMatrix);
}
calculator();