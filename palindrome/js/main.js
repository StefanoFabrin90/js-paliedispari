// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const wordUser = prompt('Inserire una parola');
// console.log(wordUser);

const wordReverse = Reverse(wordUser);
// console.log(wordReverse);

if (wordUser === wordReverse){
    // console.log('parola palindroma');
    document.querySelector('.word').innerHTML = `le due parole sono palindrome ${wordUser}:${wordReverse}`;
} else {
    // console.log('parola non palindroma');
    document.querySelector('.word').innerHTML = `le due parole NON sono palindrome ${wordUser}:${wordReverse}`;
}






// FUNZIONE
function Reverse(word) {
    let reverse = '';

    for (let i = word.length - 1; i >= 0; i--){
        reverse += word[i];
    }
    return reverse;
}