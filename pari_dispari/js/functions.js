// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
/**
 * generate a random number from 1 to 5 (included)
 * @returns {number} result
 */
function getRandomNumber (){
    return Math.floor(Math.random()*5)+1;
}



// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isEven (number){
    return number % 2 === 0;
}