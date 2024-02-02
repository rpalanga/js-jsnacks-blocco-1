
// Il software deve chiedere per 10 volte all’utente di inserire un numero.

// Il programma stampa la somma di tutti i numeri inseriti.


let UserImput 
// Number(prompt("Somma i numeri"));


let sum = 0;

for (i = 0; i < 10; i++){
    UserImput = 10*(prompt("Inserisci un numero"));

    sum = UserImput;

    document.getElementById("result").innerHTML = `La somma dei numeri è ${sum}`
}