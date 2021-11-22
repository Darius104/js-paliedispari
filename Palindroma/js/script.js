// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci una parola: ');

function palindroma (userWord){
    for( let i = 0; i < userWord.length / 2; i++ ){
        let current = userWord[i];
        let index = (userWord.length - i) - 1 ;
        let last = userWord[index];
        if ( current != last ){
            return false;
        }
    }
    return true;
}
console.log(palindroma(userWord));