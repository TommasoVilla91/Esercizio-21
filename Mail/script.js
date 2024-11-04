// DICHIARAZIONI DI VARIABILI
// User e-mail
const userEmail = prompt("Inserisci qui la tua e-mail");

// Lista e-mail 
const emailList = ["mimmo@gmail.com", "arnaldo@yahoo.it", "paolona@gmail.com", "ziobilly@libero.it"];

// funzione
let isFound = false;

// LOGICA
// Fa si che venga analizzata la mail inserita dall'utente per constatare che ci sia o meno nella lista
for (let i = 0; i <= emailList.length; i++) {
    const curEmail = emailList[i];
    if (userEmail === curEmail[i]) {
        isFound = true;
    }
}

// OUTPUT
if (isFound === true) {
    console.log(`La tua email ${userEmail} è valida`);
} else {
    console.log(`La tua email non è valda`);
}