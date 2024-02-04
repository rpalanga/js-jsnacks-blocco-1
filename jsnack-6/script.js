// Calcola la somma e la media dei primi 10 numeri.

let sumAndAvarege = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;



for (let i = 0; i < sumAndAvarege.length; i++){

    sum += parseInt(sumAndAvarege[i]);
    
    

    
}

let Avg = sum/sumAndAvarege.length;

console.log(Avg)

console.log(sum)

document.getElementById("result").innerHTML = `La somma degli elementi è ${ sum} <br> la media dei primi dieci numeri è ${ Avg}`






