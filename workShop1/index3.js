//Ejercicio 1
/*
c. Crear una fórmula para saber si un número es o no es un múltiplo de 2
*/
const numero = parseInt(prompt("Ingrese un número"));
const multiplo = numero % 2 == 0 ;
console.log(numero + " ¿es un múltiplo de 2? " + multiplo)