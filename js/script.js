// Esercizio 1 - Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email

// Creo la lista di email
const emails = [`andrea@mail.com`, `gianluca@mail.com`, `adele@mail.com`, `franco@mail.com`, `luca@mail.com`];

// Creo la variabile di controllo e la imposto a false
let checkEmail = false;

// Permetto all'utente di inserire la mail
let userEmail = prompt(`Inserisci la tua email`);

// Ciclo l'array delle mail e controllo se la mail inserita è uguale a quella ciclata. Se uguali imposto la variabile di controllo a true
for(let i=0; i<emails.length; i++){
    if(emails[i] === userEmail){
        checkEmail = true;
    }
}

// Fuori dal for controllo il valore della variabile di controllo
if(checkEmail == true){
    console.log(`Email trovata`)
}
else{
    console.log(`Email non trovata`)
}

// Esercizio 2 - Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// Controllare quale sia il numero maggiore
// Se il numero maggiore è quello dell'utente, ha vinto lui, altrimenti il pc

// Generare un numero random per l'utente
let userNumber = Math.floor(Math.random() * 6) + 1;

// Generare un numero random per il pc
let pcNumber = Math.floor(Math.random() * 6) + 1;





