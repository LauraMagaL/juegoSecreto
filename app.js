let numeroSecreto = 0;
let Intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; // se coloca como buena práctica poner el "return"
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if(numeroDeUsuario === numeroSecreto) {  //triple igual es para igualar tanto en valor como data type
        asignarTextoElemento('p',`Acertaste el número en ${Intentos} ${(Intentos === 1) ? 'vez':'veces'}`);
        //podemos quitar el "disabled del botón de nuevo juego"
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        Intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //mismo ID que el declarado en html
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    //si el número generado está incluido en la lista, hacemos una operación, si no, será otra
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números, podemos mostrar un mensaje en la pantalla y cerrar el juego
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }   else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
    //return significa que regresará una variable, en éste caso 
    //la variable numeroSecreto
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja primero
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //generar el número aleatorio
    //Iniciar número de intentos
    condicionesIniciales();
    //deshabilitar botón de "Nuevo Juego"
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();