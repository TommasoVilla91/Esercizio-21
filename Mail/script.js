// User e-mail
const userEmail = prompt("Inserisci qui la tua e-mail");

// Lista e-mail 
const emailList = [
    ["mimmo@gmail.com", "arnaldo@yahoo.it", "paolona@gmail.com", "ziobilly@libero.it"],
    ["aurora@msn.it", "jhonny@gmail.com","aiace@facebook.it"]
];

// Fa si che venga analizzata la mail inserita dall'utente per constatare che ci sia almeno in una delle due liste

for (let i = 0; i < emailList.length; i++) {
    const curList = emailList[i];
        for (let j = 0; j < curList.length; j++) {
            curList[j] === userEmail;

        }
}