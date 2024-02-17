function holaMundo() {
    console.log= ("¡Hola Mundo!");
    return;
}
holaMundo();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function holaName(nombre) {
    console.log=(`Hola,${nombre}!`);
    return;
}
holaName("Laura");
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNum(numSimple) {
    return numero*2;
}
let resDoble= dobleNum(6);
console.log(resDoble);
//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promed(a,b,c){
    return (a+b+c)/3;
}
let promedio=promed(5,4,1);
console.log(promedio);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayorQ(y,z) {
    return y>z ? y:z; //si y>z es verdadero, se regresa "y", si no se regresa "z"
}
let comparaCion=mayorQ(8,9);
console.log(comparaCion);
//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
    return numero*numero;
}
let resultadCuad=cuadrado(854);
console.log(resultadCuad);