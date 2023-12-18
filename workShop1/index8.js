//Ejercicio 3
/*
Las tablas de verdad
*/

//a.
const pTrue = true;
const qTrue = true;
const pFalse = false;
const qFalse = false;
const notPTrue = !pTrue;
const notPFalse = !pFalse;
const notQTrue = !qTrue;
const notQFalse = !qFalse;

const notPAndQTrueTrue = notPTrue && qTrue;
const notPAndQTrueFalse = notPTrue && qFalse;
const notPAndQFalseTrue = notPFalse && qTrue;
const notPAndQFalseFalse = notPFalse && qFalse;

console.log(`|  "p"  |   "q"  |  "NOT p" |  "NOT p AND q" |`)
console.log(`|  ${pTrue} |  ${qTrue}  |   ${notPTrue}  |    ${notPAndQTrueTrue}       |`);
console.log(`|  ${pTrue} |  ${qFalse} |  ${notPTrue}   |    ${notPAndQTrueFalse}       |`);
console.log(`| ${pFalse} |  ${qTrue}  |  ${notPFalse}    |    ${notPAndQFalseTrue}        |`);
console.log(`| ${pFalse} |  ${qFalse} |  ${notPFalse}    |    ${notPAndQFalseFalse}       |`);
console.log("|---------------------------------------------")

//b.

const notPAndNotQFalseFalse = notPFalse && notQFalse;
const notPAndNotQFalseTrue = notPFalse && notQTrue;
const notPAndNotQTrueFalse = notPTrue && notQFalse;
const notPAndNotQTrueTrue = notPTrue && notQTrue;

console.log(`|  "p"  |   "q"  |  "NOT p" | "NOT q" | "NOT p AND NOT q" |`)
console.log(`|  ${pTrue} |  ${qTrue}  | ${notPTrue}    | ${notQTrue}   |  ${notPAndNotQTrueTrue}            |`);
console.log(`|  ${pTrue} |  ${qFalse} |  ${notPTrue}   | ${notQFalse}    |  ${notPAndNotQTrueFalse}            |`);
console.log(`| ${pFalse} |  ${qTrue}  |  ${notPFalse}    | ${notQTrue}   |  ${notPAndNotQTrueFalse}            |`);
console.log(`| ${pFalse} |  ${qFalse} |  ${notPFalse}    | ${notQFalse}    |  ${notPAndNotQFalseFalse}             |`);
console.log("|---------------------------------------------------------|")