
// Chiedi un numero di 4 cifre all’utente

// e calcola la somma di tutte le cifre che compongono il numero.

let userChoice = prompt("inserisci un numero a 4 cifre");

if (userChoice.length === 4 && !isNaN(userChoice)) {
    let sum = 0;

    for( let i = 0; i < userChoice.length; i++){
        
        sum += +userChoice[i];
    }
    document.getElementById("result").innerHTML = `Questa è la somma dei numeri inseriti ${sum}`;

}









// let userChoice = []
// let userNumber = prompt ("inserisci un numero a 4 cifre");
// userChoice.push(userNumber)

// let sum = 0;

// for (let i = 0; i < userChoice.length; i++){
//     sum = userChoice[i] + userNumber;
//     console.log(sum)

//     // document.getElementById("result").innerHTML = `La somma è ${}`
// }





