const eleGrid = document.querySelector('.grid');
const eleCell = document.querySelector('.cell');

//creazione celle nella griglia
for (let i = 1; i < 101; i++) {
    
    //creazione div e classe delle celle
    const eleCell = document.createElement('div');
    eleCell.classList.add('cell');
    eleGrid.append(eleCell);
    
    //creazione numeri
    let cellNumber = i;
    eleCell.classList.add('number');
    eleCell.innerHTML += cellNumber;

    
    //funzione toogle
    eleCell.addEventListener('click', function(){
        this.classList.toggle('active');

        //output numero cliccato in console
        console.log(cellNumber)
    });
}