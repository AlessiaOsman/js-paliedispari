// Chiedere all’utente di inserire una parola (con un prompt)
// Creare una funzione per capire se la parola inserita è palindroma
// Stampiamo il risultato in console


//Recupero degli elementi

function checkString (text){

    let reversedText = ''
    let message = ''
    let isPalind = false

    for (let i = text.length-1; i>=0 && !isPalind; i--){
        reversedText += text[i]

    }

    if (reversedText === text){
        message += 'La parola è palindroma'
        isPalind = true
    } else {
        isPalind = false
        message += 'La parola non è palindroma'
    }

    return message

    }

const result = checkString('Anna')

console.log(result)