//Ejercicio 2
/*
2. Considerando que a = 4, b = 7, c = 2b, x = a , y = 3x, u = 6, w = 10; crear
un algoritmo con JavaScript que realice y muestre el resultado en consola de las
siguientes operaciones algebraica:

*/
const a = 4;
const b = 7;
const c = 2 * b;
const x = a;
const y = 3 * x;
const u = 6;
const w = 10;
const z = 5;

//a.
const operacionA = a/(b*c);
console.log("El resultado es: " + operacionA);

//b.
const operacionB = Math.pow(a, 2) + Math.pow(b, 92);
console.log("El resultado es: " + operacionB);

//c.
const operacionC = ((x + y) / (u + (w / a)));
console.log("El resultado es: " + operacionC);

//d.
const operacionD = ((x / y) * (z + w))
console.log("El resultado es: " + operacionD);