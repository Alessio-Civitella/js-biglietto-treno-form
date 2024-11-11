// Funzione per calcolare il prezzo del biglietto
function calcolaPrezzo(km, eta) {
    const prezzoPerKm = 0.21;
    let prezzo = km * prezzoPerKm;

    // Applicazione sconto in base all'età
    if (eta < 18) {
        prezzo *= 0.80; // Sconto 20% per i minorenni
    } else if (eta > 65) {
        prezzo *= 0.60; // Sconto 40% per gli over 65
    }

    return prezzo.toFixed(2);
}

// Funzione per generare un numero di carrozza casuale tra 1 e 15
function generaCarrozza() {
    return Math.floor(Math.random() * 15) + 1;
}

// Funzione per generare un codice CP casuale di 5 cifre
function generaCodiceCP() {
    return Math.floor(10000 + Math.random() * 90000); // Un numero casuale di 5 cifre
}
