/**
 * CICLO FOR
 */

// for (varabile CONTATORE; CONDIZIONE; INC/DEC del CONTATORE) {
// codice da ripetere se la CONDIZIONE true
// }

// console.log('Pre loop');

// for (let i = 0; i < 3; i++) {
//     console.log(`Il valore di i: ${i}`);
// }

// console.log(' Loop terminato');

/**
 * FOR e DOM
 *
 * stampiamo una lista di 10 articoli
 */

// selezione dal dom del parent list
const ul = document.querySelector('.list');
console.log(ul);

for (let i = 1; i <= 10; i++) {
    // template literal
    // ul.innerHTML += `<li class="box">Item ${i}</li>`;

    // creao un tag HTML
    const li = document.createElement('li');
    // associa una class al tag creato sopra
    li.classList.add('box', `box-${i}`);
    // appendo contenuto al li
    li.append(`List item ${i * 3}`);
    // collego gestore di evento
    li.addEventListener('click', function () {
        alert(`Hai cliccato l'elemento ${i}`);
    });
    // appendo il li creato sopra ad un elemento dom
    ul.prepend(li);
}
