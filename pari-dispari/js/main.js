// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// GAMER
let EvenOdd = prompt ('Inserire pari o dispari');

if ( (EvenOdd !== 'pari') && (EvenOdd !== 'dispari') ) {
    alert('Inserimento non valido, Assegnazione automatica: pari')
    EvenOdd = 'pari';
}
console.log(EvenOdd);

let gamer = parseInt( prompt('Inserire un numero da 1 a 5') );

if ( (gamer < 1) || (gamer > 5) || isNaN(gamer) ) {
    alert('Inserimento non valido, Assegnazione automatica : 1')
    gamer = 3;
}
console.log(gamer);



// PC
const randNumber = NumberRandom(1, 5);
console.log(randNumber);

// totale
const tot = gamer + randNumber;
console.log(tot);


// vincitore


// // FUNZIONE

function NumberRandom (min, max) {
     const rand = Math.floor(Math.random() * (max-min +1)) + min;

    return rand;
}

function Play (win) {
    if (win % 2 === 0){
        
    } else {
        
    }
    return 'pari'
}