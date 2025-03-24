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


