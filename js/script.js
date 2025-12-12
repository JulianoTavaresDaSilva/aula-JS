//variáveis globais
var gridSizeX = 10;
var gridSizeY = 10;

var posicaoX = 0
var posicaoY = 0

var vidas = 3

//resgistro de eventos
document.addEventListener('DOMContentLoaded', inicializaJogo);
document.addEventListener('keydown', processaTecla)


//funções

function removeVida(){
    vidas--;

    if(vidas == 0){
        atualizaVidas();
    }else{
        atualizaVidas();
    }
}

function processaTecla(evento){
    let posicaoAtual = document.querySelector('#bloco'+posicaoX+posicaoY);
    posicaoAtual.classList.remove('vermelho');

    if(evento.key == 'ArrowDown'){

        let novaPosicao = document.querySelector('#bloco'+(posicaoX + 1) + posicaoY)
        if(posicaoX < (gridSizeX -1)){
            posicaoAtual.classList.remove('jogador');
            novaPosicao.classList.add('jogador')
            posicaoX++
        }else{
            posicaoAtual.classList.add('vermelho')
            removeVida();
        }

    }else if(evento.key == 'ArrowUp'){

        if(posicaoX > (gridSizeX - 10)){
            let novaPosicao = document.querySelector('#bloco'+(posicaoX - 1) + posicaoY)
            posicaoAtual.classList.remove('jogador');
            novaPosicao.classList.add('jogador')
            posicaoX--
        }else{
            posicaoAtual.classList.add('vermelho')
            removeVida();
        }

    }else if(evento.key == 'ArrowRight'){

        if(posicaoY < (gridSizeY - 1)){
            let novaPosicao = document.querySelector('#bloco' + posicaoX + (posicaoY + 1));
            posicaoAtual.classList.remove('jogador');
            novaPosicao.classList.add('jogador');
            posicaoY++;
        }else{
            posicaoAtual.classList.add('vermelho');
            removeVida();
        }

    }else if(posicaoY > (gridSizeY - 10)){
        let novaPosicao = document.querySelector('#bloco' + posicaoX + (posicaoY - 1));
            posicaoAtual.classList.remove('jogador');
            novaPosicao.classList.add('jogador');
            posicaoY--;
    }else{
            posicaoAtual.classList.add('vermelho');
            removeVida();
    }

}

function atualizaVidas(){
    let spanVidas = document.querySelector('#lifes');
    spanVidas.innerText = vidas;
}

function inicializaJogo(){
    criaGrid();

    //Cria jogador
    let jogador = document.querySelector('#bloco'+posicaoX+posicaoY);
    jogador.classList.add('jogador');

    atualizaVidas();
}


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