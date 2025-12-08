var gridSizeX = 10;
var gridSizeY = 10;

document.addEventListener('DOMContentLoaded', criaGrid);


function criaGrid() {
    let ambient = document.querySelector('.ambiente');

    for( let x = 0; x < gridSizeX; x++) {
        for (let y = 0; y < gridSizeY; y++) {
            let divJogo = document.createElement('div');
            divJogo.classList.add('bloco');
            divJogo.classList.add('cinza');
            divJogo.id = "bloco"+x+y;
            divJogo.innerText = ""+x+y;

            if (y == 0){
                divJogo.classList.add('left');
            }
            if (x == 0){
                divJogo.classList.add('top');
            }
            if(y == gridSizeY-1){
                divJogo.classList.add('right');
            }
            if(x == gridSizeX-1){
                divJogo.classList.add('bottom');
            }


            ambient.appendChild(divJogo);
        }
    }
}