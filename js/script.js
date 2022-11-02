const eleGrid = document.querySelector('.grid');
const eleCell = document.querySelector('.cell');
const select = document.querySelectorAll('#select');
const diff1 = document.querySelector('#diff1');
const diff2 = document.querySelector('#diff2');
const diff3 = document.querySelector('#diff3');
const btn = document.querySelector('#play-btn');


//aggiungi event listener sul bottone per generare la griglia in base alla difficoltà
/*btn.addEventListener('click', function creatingCells() {
    //Scelta difficoltà
    if (select.value == 1) {
        //creazione celle nella griglia
        for (let i = 1; i < 101; i++) {
            creatingCells();
            eleCell.classList.add('hard');
            eleCell.classList.remove('easy');
            eleCell.classList.remove('medium');
        } 
    } else if (select.value == 2) {
        for (let i = 1; i < 82; i++) {
            creatingCells();
            eleCell.classList.add('medium');
            eleCell.classList.remove('easy');
            eleCell.classList.remove('hard');
        }
    } else if (select.value == 3) {
        for (let i = 1; i < 50; i++) {
            creatingCells();
            eleCell.classList.add('easy');
            eleCell.classList.remove('medium');
            eleCell.classList.remove('hard');
      }}
});*/

//Funzione che crea le celle
function creatingCells() {
    for (let i = 1; i < 101; i++) {
    //creazione div e classe delle celle
    const eleCell = document.createElement('div');
    eleCell.classList.add('cell');
    eleGrid.append(eleCell);
    
    //creazione numeri
    let cellNumber = i;
    eleCell.classList.add('number');
    eleCell.innerHTML += cellNumber;

    //funzione toogle per colorare i quadrati sul click
    eleCell.addEventListener('click', function(){
        this.classList.toggle('active');
        //output numero cliccato in console
        console.log(cellNumber)
    }); 
}}

creatingCells();