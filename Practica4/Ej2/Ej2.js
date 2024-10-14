let numberRows = document.getElementById("numberRows");
let numberColumns = document.getElementById("numberColumns");
function drawTable(numberRows = 10,numberColumns = 4){
    for(let i = 0; i < numberRows; i++){
        for(let j = 0; j < numberColumns;j++){
            let cell = document.createElement('td');
            numberColumns.appendChild(cell);    
        }
        numberRows.appendChild(numberColumns);
    }
    document.getElementById('tableContainer').appendChild(tabla);
}
