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

const userCostoBiglietto = (userKmChoise * 0.21);
console.log("Prezzo del biglietto senza sconto", userCostoBiglietto, "€");

if (userEta < 18) {

}

// In fine, ottengo il prezzo finale espresso fino a due decimali.