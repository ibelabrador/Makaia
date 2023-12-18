// Ejercicio 1
/*
a. De un operario se conoce su sueldo y años de antigüedad. Se pide crear
un programa que lea los datos de entrada y muestre en consola el valor
booleano de las siguientes comparaciones:
i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o
superior a 10 años?
ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10
años?
iii. ¿El sueldo es mayor o igual a $2000 US?
*/

//a.i
const sueldo = prompt("Ingrese su sueldo");
const antiguedad = prompt("Ingrese su antigüedad")
alert("Su sueldo es " + sueldo);
const sueldoInferior2000 = Number(sueldo) < 2000;
const antiguedad10 = Number(antiguedad) == 10 || Number(antiguedad) > 10;
const ejercicioa = sueldoInferior2000 && antiguedad10;
console.log("Respuesta a.i: " + ejercicioa)


//a.ii
const antiguedadmenor10 = Number(antiguedad) < 10;
const ejerciciob = sueldoInferior2000 || antiguedadmenor10;
console.log("Respuesta a.ii: " + ejerciciob)

//a.iii
const ejercicioc = !sueldoInferior2000;
console.log("Respuesta a.iii: " + ejercicioc)





