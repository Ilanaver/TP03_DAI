/* Este es el módulo "matematicas" */
let pares = ["dos", "cuatro", "ocho", "diez"]
const PI = 3.14;
function sumar(x, y) {
// No seas vago, acá hay que hacer el cuerpo de la función!!!
    let suma = 0
    suma = x + y
    return suma
}
const multiplicar = (a, b) => {
// No seas vago, acá hay que hacer el cuerpo de la función!!!
    let multiplicacion = 0
    multiplicacion = a * b
    return multiplicacion
};
function restar(c, d) {
    let resta = 0
    resta = c - d
    return resta    
}
const dividir = (e, f) => {
    let division = 0
    division = e / f
    return division  
}
// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {pares, PI, sumar, multiplicar, restar, dividir};
