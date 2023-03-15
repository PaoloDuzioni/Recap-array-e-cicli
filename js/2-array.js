/**
 * ARRAY
 */

// Definizione
const list = ['Roberto', 'Olga', 'Paolo', 'lorem'];
console.log(list);
console.table(list);

// numero di elementi
console.log('Numero elementi', list.length);

// primo el
console.log(list[0]);

// ultimo
console.log(list[list.length - 1]);

// accedere e modificare il secondo el
list[1] = 'Olgaaaaaa';
console.log(list);

const index = 2;
console.log(list[index]);
