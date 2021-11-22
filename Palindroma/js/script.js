// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci una parola palindroma: ');
console.log('Parola dell\'utente: ', userWord);
userWordReverse = [];

let temp = 0;

// leggo la parola all'incontrario
    // for( let z = 0; z < userWord.length; z++ ){
    //     console.log(userWord[z]);
    // }

    for (let x = userWord.length - 1; x >= 0; x --){
        console.log(userWord[x]);
        userWordReverse[temp] = userWord[x];

        temp ++;
    }

console.log(userWordReverse);
