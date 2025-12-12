//variáveis globais
var gridSizeX = 10;
var gridSizeY = 10;

var posicaoX = 9;
var posicaoY = 4;

var vidas = 3;

var rios = [1, 3, 6, 8];
var balsa = [2, 4, 6, 8];
var direcao = [-1, 1, -1, 1]

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

        if(posicaoX < (gridSizeX -1) && !novaPosicao.classList.contains('azul')){
            posicaoAtual.classList.remove('jogador');
            novaPosicao.classList.add('jogador')
            posicaoX++
        }else{
            posicaoAtual.classList.add('vermelho')
            removeVida();
        }

    }else if(evento.key == 'ArrowUp'){
        let novaPosicao = document.querySelector('#bloco'+(posicaoX - 1) + posicaoY)

        if(posicaoX > 0 && !novaPosicao.classList.contains('azul')){
            posicaoAtual.classList.remove('jogador')
            novaPosicao.classList.add('jogador');
            posicaoX--
        }else{
            posicaoAtual.classList.add('vermelho')
            removeVida();
        }

    }else if(evento.key == 'ArrowRight'){
        let novaPosicao = document.querySelector('#bloco' + posicaoX + (posicaoY + 1));

        if(posicaoY < (gridSizeY - 1)){
            posicaoAtual.classList.remove('jogador');
            novaPosicao.classList.add('jogador');
            posicaoY++;
        }else{
            posicaoAtual.classList.add('vermelho');
            removeVida();
        }

    }else if(evento.key == 'ArrowLeft'){
        let novaPosicao = document.querySelector('#bloco' + posicaoX + (posicaoY - 1));

        if(posicaoY > 0){
            posicaoAtual.classList.remove('jogador');
            novaPosicao.classList.add('jogador');
            posicaoY--;
        }else{
            posicaoAtual.classList.add('vermelho');
            removeVida();
        }
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

    //Criar rio
    rios.forEach((rio, cont_rio) => {
        for(let i = 0; i < gridSizeY; i++){

            let elem = document.querySelector('#bloco' + rio + i)
            elem.classList.remove('cinza')
            if(balsa[cont_rio] == i)
                elem.classList.add('amarelo')
            else
                elem.classList.add('azul')
        }
    });

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

setInterval(movimentaBalsas, 1500);

function movimentaBalsas(){
    rios.forEach((rio, index) => {
        let balsaAtual = document.querySelector('#bloco' + rio + balsa[index]);

        if(direcao[index] == 1){
            balsa[index]++
            if(balsa[index] == gridSizeY -1){
                
            }
        }else{
            balsa[index]--
        }
        let balsaNova = document.querySelector('#bloco'+rio+(balsa[index]));

        balsaAtual.classList.remove('amarelo');
        balsaAtual.classList.add('azul');
        balsaNova.classList.remove('azul');
        balsaNova.classList.add('amarelo')
    })
}