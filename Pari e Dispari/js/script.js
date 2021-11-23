// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt('Inserisci "pari" o "dispari"');
let userNumber = 0;

if (userChoice === 'pari' || userChoice === 'dispari'){
    console.log('Risposta utente: ' + userChoice);

    userNumber = parseInt(prompt('Inserisci un numero: '));
    console.log('User Number ' + userNumber);

    const pcNumber = getRndInteger(1, 5);
    console.log('Pc Number ' + pcNumber);
    
    pariOrDispari();

}else{
    alert('Error !');
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function pariOrDispari(num1, num2){
    let sum = num1 + num2;
    if (sum % 2 === 0){
        alert('Pari');
        risultato = 'pari';
    }else{
        alert('Dispari');
        risultato = 'dispari';
    }

    if(userChoice === 'pari' && risultato === 'pari'){
        alert('Hai vinto')
    }else if (userChoice === 'pari' && risultato === 'dispari'){
        alert('Hai perso')
    }else if(userChoice === 'dispari' && risultato === 'pari'){
        alert('Hai perso')
    }else if (userChoice === 'dispari' && risultato === 'dispari'){
        alert('Hai vinto')
    }
}