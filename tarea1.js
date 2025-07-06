/*Función #1*/
function datos_personales(nombre, apellido) {
    return "Sus datos personales son nombre: ".concat(nombre, " ").concat(apellido);
}
console.log(datos_personales("Elías", "Peralta"));
/*Función #2*/
function promedio(nota1, nota2) {
    var promedio = nota1 * nota2 / 2;
    return promedio;
}
console.log("Su promedio es: " + promedio(5, 8));
/*Función #3*/
var iva = 1.12;
function calculo_iva(total, nombre) {
    var calculo = total * iva;
    return "Hola ".concat(nombre, ", el total con IVA es: ").concat(calculo.toFixed(2));
}
console.log(calculo_iva(100, "Elías"));
/*Función 4*/
function area_rectangulo(base, altura) {
    return base * altura;
}
console.log("El área del rectángulo es: " + area_rectangulo(5, 10));
