/*

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

// Genera un numero casuale da 1 a 6 per il player
let numPlayer = Math.floor(Math.random() * 6) + 1;

// Genera un numero casuale da 1 a 6 per il computer
let numComputer = Math.floor(Math.random() * 6) + 1;

let winner;

if (numPlayer > numComputer) {
    winner = "Ha vinto il Player"
} else if (numComputer > numPlayer) {
    winner = "Ha vinto il Computer"
} else {
    winner = "la partita è finita in Pareggio"
}

document.querySelector(".playerNumber").innerHTML = `<span>Player: ${numPlayer}</span>`;

document.querySelector(".computerNumber").innerHTML = `<span>Computer: ${numComputer}</span>`;

document.querySelector(".winnerResult").innerHTML = `<span>Vincitore: ${winner}</span>`;



console.log("Giocatore: " + numPlayer);
console.log("Computer: " + numComputer);
console.log("Vincitore: " + winner);