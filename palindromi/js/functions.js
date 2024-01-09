/**
 * check whether a word is a palindrome
 * @param {string} text 
 * @returns {string} the result message
 */

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