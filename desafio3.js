/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y
 peso en kilogramos, que se recibirán como parámetros.*/
function IMC(altura,peso) {
return peso/altura;
}
let resultado = IMC(1.65,58);


//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function numFactorial(n) {
    if (numero === 0 || numero === 1) {
        return 1;
      } else {
        return numero * calcularFactorial(numero - 1);
      }
}
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);
//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
//crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
