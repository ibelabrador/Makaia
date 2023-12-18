//Ejercicio 1
/*
d. Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario
básico por horas y el número de horas trabajadas en un mes y realice lo
siguiente:
i. Calcular su salario básico mensual
ii. Determinar si recibe o no subsidio de transportes. Un empleado
recibe este subsidio cuando el salario mensual básico es menor o
igual a $700.000 COP
iii. Mostrar en consola el nombre del empleado, su salario básico
mensual y si recibe o no subsidio de transporte.
*/

//d.i
const nombreEmpleado = prompt("Ingrese su nombre: ");
const salarioHora = parseFloat(prompt("Ingrese su salario básico por hora: "));
const horaMes = parseFloat(prompt("Ingrese las horas trabajadas en el mes: "));
const salarioMes = salarioHora * horaMes;
const subsidioTransporte = salarioMes <= 700000;
console.log("El empleado " + nombreEmpleado + " tiene un salario básico mensual de: " + salarioMes + " y es: " + subsidioTransporte + " que recibe subsidio de transporte.")