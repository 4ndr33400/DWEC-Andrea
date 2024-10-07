function calcularSalario() {
        let nombre = prompt("Introduce tu nombre: ");
        let apellidos = prompt("Introduce tus apellidos: ");
        let salario = parseFloat(prompt("Introduce tu salario (número con decimales): "));
        let edad = parseInt(prompt("Introduce tu edad: "));

    if (salario < 2000 && salario > 1000) {
        if (edad > 45) {
            salario = salario * 0.03;
        } else {
            salario = salario * 0.10;
        }
    } else if (salario < 1000) {
        if (edad < 30) {
            salario = 1100;
        } else if (edad < 45 && edad > 30) {
            salario = salario * 0.03;
        } else {
            salario = salario * 0.15;
        }
    }

    let resultado = `
        Nombre:< ${nombre}<br>
        Apellidos: ${apellidos}<br>
        Edad: ${edad}<br>
        Salario actualizado: ${salario.toFixed(2)}
    `;
    document.write(resultado);
}