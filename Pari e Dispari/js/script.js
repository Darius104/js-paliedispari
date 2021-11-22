// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const userChoice = prompt('Inserisci la tua scelta: ');

let pcNumber = '';
let userNumberChoise = '';

if(userChoice === 'dispari' || userChoice === 'pari'){
    userNumberChoise = parseInt(prompt('Inserisci numero da 1 - 5'));
    console.log('Scelta utente: ' + userChoice);

    if( userNumberChoise <= 5 && userNumberChoise >= 0 ){
        console.log('Numero utente: ' + userNumberChoise);
        let pcNum = _random(pcNumber);
        console.log('Numero pc: ' + pcNumber);
        let somma = dispPari(userNumberChoise, pcNumber);
        console.log('Somma: ' + somma);

    }
}else{
    alert('error');
}

function _random(pcNumber){
    pcN = parseInt(Math.floor(Math.random() * 6));
    return pcN;
}

function dispPari(pcNumber, userNumberChoise){

    let sum = pcNumber + userNumberChoise;
    return sum;
    
}