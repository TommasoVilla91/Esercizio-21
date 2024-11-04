// DICHIARAZIONI DI VARIABILI
// generare i due numeri
const UserRndNum = Math.floor(Math.random() * 6) + 1; // numero user
const CpuRndNum = Math.floor(Math.random() * 6) + 1; // numero cpu

// generare array che contenga i due numeri
const numbers = [UserRndNum, CpuRndNum]; // lista dei due numeri

// funzione
let highestNum = numbers[0];

// LOGICA
// Individuare quale dei due numeri è il più grande
for (let i = 0; i < numbers.length; i++) {
    const curNum = numbers[i];
    if (curNum > highestNum) {
        highestNum = curNum;
    }
}

// OUTPUT
console.log(`Il numero del giocatore è ${UserRndNum}, invece il numero del computer è ${CpuRndNum}`)

if (highestNum === UserRndNum) {
    console.log(`Il vicitore è il giocatore con il numero ${highestNum}`);
} else {
    console.log(`Il vicitore è il computer con il numero ${highestNum}`);
}