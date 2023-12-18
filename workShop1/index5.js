//Ejercicio 1
/*
e. Hacer un algoritmo con JavaScript que reciba cualquier letra del
abecedario y muestre en consola el valor booleano que indique si es o no
una vocal.
*/
const letra = prompt("Ingrese una letra: ").toUpperCase();
const vocal = letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U";
console.log("¿Esta letra es vocal? " + vocal)