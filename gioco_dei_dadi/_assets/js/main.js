/*

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

// Genera un numero casuale da 1 a 6 per il player
let numPlayer = Math.floor(Math.random() * 6) + 1;
console.log(numPlayer)

// Genera un numero casuale da 1 a 6 per il computer
let numComputer = Math.floor(Math.random() * 6) + 1;
console.log(numComputer)