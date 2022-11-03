const eleGrid = document.querySelector('.grid');
const eleCell = document.querySelector('.cell');
const title = document.querySelector('#title');
const select = document.querySelector('#select');
const btn = document.querySelector('#play-btn');

//Bottone Play
btn.addEventListener('click', function() {
    //tolgo il titolo e mostro la griglia
    eleGrid.classList.remove('hidden');
    title.classList.add('hidden');
    //Reset celle ad ogni click
    eleGrid.innerHTML = '';

    //numero di celle scegliendo il value del selettore
    const numCells = parseInt(select.value);
    //calcolo la loro radice quadrata
    const sideSquare = Math.sqrt(numCells);
    
    //identificare variabile CSS in JS
    eleGrid.style.setProperty('--sideSquare', sideSquare); 
        for (let i = 1; i <= numCells; i++) { //trasforma 101 in limite variabile
            //creazione div e classe delle celle
            const eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            
            //creazione numeri
            let cellNumber = i;
            eleCell.classList.add('number');
            eleCell.innerHTML += cellNumber;
            
            //calcolo celle
            //eleCell.style.width = `calc(100% / ${sideSquare});`
            //eleCell.style.height = `calc(100% / ${sideSquare});`
            eleGrid.append(eleCell);

            //funzione toogle per colorare i quadrati sul click
            eleCell.addEventListener('click', function(){
                this.classList.toggle('active');
                //output numero cliccato in console
                console.log(cellNumber)})
            }
})
