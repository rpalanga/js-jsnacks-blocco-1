
// Stampa il cubo dei primi N numeri,

// (partendo da 1, il numero N indicato dall'utente è compreso)

// dove N è un numero indicato dall’utente.

let userChoice = Number(prompt("Indica un numero")); 

let resultCube = document.getElementById("result");


for (let i = 0; i <= userChoice; i++){

    let userCube = (userChoice ** 3 && i ** 3);
    
    resultCube.innerHTML += `questi è il cubo ${ userCube }, ""`;

    
    
    


    
}
