/**
 * DA CICLO FOR A WHILE
 */

// const teachers = ['Roberto', 'Paolo', 'Olga', 'Sofia', 'Lorem'];

// for (let i = 0; i < teachers.length; i++) {
//     const teacher = teachers[i];
//     console.log(teacher);
// }

// console.log('---oppure---');

/**
 * WHILE
 *
 * Sintassi
 *
while (CONDIZIONE) {
    codice da eseguire SE la condizione true

    attenzione all'infinte loop
}
 */

// let counter = 0;
// while (counter < teachers.length) {
//     console.log(teachers[counter]);

//     counter++;
// }

/**
 * Richiesta di un numero ad un utente
 */
let userNumber = parseInt(prompt('Inserisci un numero'));
// ripetere da 0 a N volte
while (isNaN(userNumber)) {
    userNumber = parseInt(prompt('Valore invalido, prego inserisci un numero'));
}
console.log('Numero', userNumber);
