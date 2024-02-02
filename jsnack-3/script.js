
// Crea un array vuoto.

// Chiedi per 6 volte all’utente di inserire un numero,

// Solo se è dispari inseriscilo nell’array.

// Stampa a schermo il contenuto dell'array

let oddNumbers = [];

for (i = 0; i < 6; i++){
    let userChoices;
    userChoices = (prompt("Inserisci numeri"))

    if(userChoices % 2 !== 0){
        oddNumbers.push(userChoices)
        
        document.getElementById("result").innerHTML = `Questi sono i numeri dispari ${oddNumbers}`
    }
}



