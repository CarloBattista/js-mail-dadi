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

function btnSubmit() {
    let inputEmail = document.querySelector("#inputEmail").value;
    let isAuthorized = email.includes(inputEmail);
    console.log(isAuthorized)
}