let jogo = document.querySelector('#jogo')
let personagem = document.querySelector('#personagem')
let left_personagem = new String(window.getComputedStyle(personagem).getPropertyValue('left'))
let valorLeft = Number(left_personagem.match(/\d/ig))
let top_personagem = new String(window.getComputedStyle(personagem).getPropertyValue('top'))
let valorTop = Number(top_personagem.match(/\d/ig))
let pontuacao = document.querySelector('#pontuacao')

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
})

class Npt {
    constructor(){
        this.tam = 40
        this.posx = parseInt(Math.random()*19) * 40
        this.posy = parseInt(Math.random()*19) * 40
        this.posicao = this.posx + this.posy
    }
    criar=()=>{
        let div = document.createElement('div')
        div.setAttribute('id','ponto')
        div.setAttribute('style',`position: relative; height: ${this.tam}px; width: ${this.tam}px; left: ${this.posy}px; top: ${this.posx}px; background-color: blue;`)
        jogo.appendChild(div)
    }
    remover=()=>{
        div.remove()
    }
}

let pessoa = new Npt()
pessoa.criar()

let verificar = setInterval(()=>{    
    if(valorLeft == pessoa.posy && valorTop == pessoa.posx){
        pessoa.remover()
    }
},20)