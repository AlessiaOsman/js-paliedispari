// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto in console.

// Chiedo all'utente pari o dispari

const userChoice = prompt('Scegli pari o dispari?').trim()
console.log(userChoice)

// Chiedo all'utente un numero da 1 a 5

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))
console.log(userNumber)


const randomNumber = parseInt(getRandomNumber())
console.log(randomNumber)

let sum = userNumber + randomNumber
console.log(sum)

const result = isEven(sum)
console.log(result)
