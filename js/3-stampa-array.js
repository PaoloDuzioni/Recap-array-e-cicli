/**
 * STAMPA I NOMI DI UN ARRAY
 */
const teachers = ['Roberto', 'Paolo', 'Olga', 'Sofia', 'Lorem'];

// bad
// console.log(teachers[0]);
// console.log(teachers[1]);
// console.log(teachers[2]);
// console.log(teachers[3]);
// console.log(teachers[4]);

const ul = document.querySelector('.list');
console.log(ul);

for (let i = 0; i < teachers.length; i++) {
    const teacher = teachers[i];

    console.log(teacher);

    // DOM
    ul.innerHTML += `<li>${teacher}</li>`;
}
