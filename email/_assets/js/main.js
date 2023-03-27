/*

Chiedi all’utente la sua email, tramite un input

controlla che sia nella lista di chi può accedere,

stampa un messaggio appropriato sull’esito del controllo.

*/

let email = [
    "mariorossi@gmail.com", // 0
    "giusepperossi@gmail.com", // 1
    "carlorossi@gmail.com", // 2
    "annarossi@gmail.com", // 3
    "martinarossi@gmail.com" // 4
];

const container = document.querySelector(".container");

function btnSubmit() {
    let inputEmail = document.querySelector(".inputEm").value;
    let isAuthorized = email.includes(inputEmail);

    if (isAuthorized) {
        document.querySelector(".container").innerHTML = `Accesso consentito.`;
        // console.log("Accesso consentito.");
    } else {
        document.querySelector(".container").innerHTML = `Accesso negato. <span class="accessText"><a href="./index.html">Riprova</a></span>`;
        // console.log("Accesso negato.");
    }
}