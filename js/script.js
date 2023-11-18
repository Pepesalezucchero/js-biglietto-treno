/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di questeinformazioni dovrà calcolare il prezzo del viaggio, secondo queste regole:
Il prezzo del biglietto è definito in base ai km (0.21 € al km), va applicato uno sconto del 20% per i minorenni mentre, per gli over 65, uno sconto del 40%.
Il prezo finale poi dovrà uscire in forma umana, ovvero con massimo due decimali per indicare i centesimi sul prezzo. */

// Esecuzione
// Chiedo il numero di km che il passeggere desidera percorrere

const userKmChoise = parseInt(prompt("Quanti km desidera percorrere? Le ricordiamo che il prezzo è di 0.21€ a km"));
console.log("Chilometri scelti dal cliente:", userKmChoise);

// Chiedo l'età del passeggero

const userEta = parseInt(prompt("Qual'è la sua età?"));
console.log("Età del cliente:", userEta);

/* A questo punto, sapendo che il prezzo per ogni km è di 0.21€, controllo se il passeggero, in base all'età che ha inserito è minorenne o over 65.
Perchè in base a ciò ci sono due sconti che si possono applicare*/

// In fine, ottengo il prezzo finale espresso fino a due decimali.

const userCostoBiglietto = parseFloat(userKmChoise * 0.21);
console.log("Prezzo del biglietto senza sconto", userCostoBiglietto.toFixed(2), "€");

//Cliente minorenne
if (userEta < 18) {
    userSconto = 0.2;
    ScontoPrezzo = (userCostoBiglietto * userSconto);
//Cliente over 65
} else if (userEta > 65) {
    userSconto = 0.4;
    ScontoPrezzo = (userCostoBiglietto * userSconto);
//Cliente prezzo standard
} else {
    (userEta > 18 && userEta < 65);
    ScontoPrezzo = 0;
}

//prezzo finale
let userPrezzoFinale = parseFloat(userCostoBiglietto - ScontoPrezzo);

console.log("Il costo del biglietto", userPrezzoFinale.toFixed(2), "€");
document.getElementById("mio_id").innerHTML = userPrezzoFinale.toFixed(2);
