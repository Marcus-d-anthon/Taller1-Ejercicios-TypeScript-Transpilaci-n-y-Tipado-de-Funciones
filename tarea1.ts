/*Función #1*/

function datos_personales(nombre: string, apellido: string): string {
    return `Sus datos personales son nombre: ${nombre} ${apellido}`
}

console.log(datos_personales("Elías", "Peralta"));

/*Función #2*/

function promedio(nota1: number, nota2: number): number{
    const promedio = nota1 * nota2 / 2
    return promedio
}

console.log("Su promedio es: " + promedio(5,8))

/*Función #3*/

const iva = 1.12

function calculo_iva(total: number, nombre: string): string {
    const calculo = total * iva;
    return `Hola ${nombre}, el total con IVA es: ${calculo.toFixed(2)}`;
}

console.log(calculo_iva(100, "Elías"));

/*Función 4*/

function area_rectangulo(base: number, altura: number): number {
    return base * altura;
}

console.log("El área del rectángulo es: " + area_rectangulo(5, 10));