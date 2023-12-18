//Ejercicio 1
/*
b. La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando
un descuento del 50% para compras mayores o iguales a los $100.000
COP. Se le pide realizar un algoritmo que reciba el valor de una compra y
muestre en consola el valor booleano que indique si la compra recibe o no
el descuento.
*/
const valorCompra = parseFloat(prompt("Ingrese el valor de su compra"));
alert("El valor de su compra es de " + valorCompra);
const descuento = valorCompra >= 100000 ;
console.log("Su compra tiene descuento?: " + descuento);