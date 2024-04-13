let jogo = document.querySelector('#jogo')
let personagem = document.querySelector('#personagem')

window.addEventListener('keydown',(event)=>{
    if (event.keyCode === 37){
        //seta esquerda
        personagem.style.left = '40px'
    } else if (event.keyCode === 38){
        //seta cima
        personagem.style.top += 40+'px'
    } else if (event.keyCode === 39){
        //seta direita
        personagem.style.left += 40+'px'
    } else if (event.keyCode === 40){
        //seta baixo
        personagem.style.top += -40+'px'
    }
})