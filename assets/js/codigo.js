/*Declaración de variables*/
var numero = prompt("Ingrese un número entero: ");
var par,impar;

function numParImpar(numero){
	if (numero % 2 == 0) {
		par=alert("El número es par");
	}else{
		impar=alert("El número es impar");
	}
}
numParImpar(numero);