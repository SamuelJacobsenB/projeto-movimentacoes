let jogo = document.querySelector('#jogo')
let personagem = document.querySelector('#personagem')
let left_personagem = new String(window.getComputedStyle(personagem).getPropertyValue('left'))
let valorLeft = Number(left_personagem.match(/\d/ig))
let top_personagem = new String(window.getComputedStyle(personagem).getPropertyValue('top'))
let valorTop = Number(top_personagem.match(/\d/ig))
let pontuacao = document.querySelector('#pontuacao')
let valorPont = 0

//-------------------------------------------------

window.addEventListener('keydown',(event)=>{
    if (event.code == 'ArrowLeft'){
        //seta esquerda
        if (valorLeft > 0){
            valorLeft -= 40
            personagem.style.left = valorLeft + 'px'
        }
    } else if (event.code == 'ArrowUp'){
        //seta cima
        if (valorTop > 0){
            valorTop -= 40
            personagem.style.top = valorTop + 'px'
        }
    } else if (event.code == 'ArrowRight'){
        //seta direita
        if (valorLeft < 760){
            valorLeft += 40
            personagem.style.left = valorLeft + 'px'
        }
    } else if (event.code == 'ArrowDown'){
        //seta baixo
        if (valorTop < 760){
            valorTop += 40
            personagem.style.top = valorTop + 'px'
        }
    }

//--------------------------------

    if(valorLeft == pessoa.posx && (valorTop-40) == pessoa.posy){
        pessoa.remover()
        pontuacao.innerHTML = 'Pontuação: ' + (valorPont+=1)
        pessoa = new Npt()
        pessoa.criar()
        jogo.appendChild(quadrado)
    }
})

//--------------------------------------------------

class Npt {
    tam = null
    posx = null
    posy = null
    posicao = null
    constructor(){
        this.tam = 40
        this.posx = parseInt(Math.random()*19) * 40
        this.posy = parseInt(Math.random()*19) * 40
    }
    criar=()=>{
        let div = document.createElement('div')
        div.setAttribute('id','ponto')
        div.setAttribute('style',`position: relative; height: ${this.tam}px; width: ${this.tam}px; left: ${this.posx}px; top: ${this.posy}px; background-color: blue;`)
        quadrado = div
    }
    remover=()=>{
        jogo.removeChild(quadrado)
        quadrado = null
        console.log(quadrado)
    }
}

//---------------------------------------------------------

var quadrado = null
var pessoa = new Npt()

let btn_iniciar = document.querySelector('#btn_iniciar')
btn_iniciar.addEventListener('click',(evt)=>{
    if(quadrado === null){
        pessoa.criar()
        jogo.appendChild(quadrado)
    }
})