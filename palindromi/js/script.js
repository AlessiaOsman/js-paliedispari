// Chiedere all’utente di inserire una parola (con un prompt)
// Creare una funzione per capire se la parola inserita è palindroma
// Stampiamo il risultato in console


//Recupero degli elementi

const form = document.querySelector('form');
const resultElement = document.getElementById('paragraph')
const inputField = document.getElementById('input')

// Aggiungo reazione al click

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const text = inputField.value.trim()

    // !Validazione
    if(!text) return;

    const result = checkString(text)

    resultElement.innerText = result
});
