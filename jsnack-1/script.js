
// L’utente inserisce due parole in successione, con due prompt.

// Il software stampa prima la parola più corta, poi la parola più lunga.

let firstWord = prompt("Quanto è quotato?")

let secondWord = prompt("Siamo sicuri?")





console.log(firstWord)
console.log(secondWord)


if (firstWord.length > secondWord.length){

    

    document.getElementById("result").innerHTML = firstWord + secondWord;

    
} else  {
    
    document.getElementById("result").innerHTML = secondWord + firstWord;


}


