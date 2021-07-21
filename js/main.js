//inserisci un numero, se è pari stampa il numero,se è dispari stampa il numero successivo.

var u = parseInt(prompt('inserisci il numero')) ;

if (u % 2 == 0) {
    console.log(u)
}
else {
    console.log(u + 1);
}

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var nomi = ['Alessandro','Roberto','Sacha','Nicola']

var cognomi = ['Bianchi','Rossi','Verdi','Nieddu'];

var random = [];

for(i = 0; i < 4; i++) {
    random.push(
        nomi[Math.floor(Math.random() * nomi.length)] +
        " " +
        cognomi[Math.floor(Math.random() * cognomi.lenght)]
    );
}

console.log(random);

//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

 var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 var som = 0;
 console.log(n);

 for (i = 0; i < n.length; i++) {
     if  (i % 2 !=0) {
         som += n[i];
     }
 }
console.log(som);
