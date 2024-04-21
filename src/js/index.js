let jogo = document.querySelector('#jogo')
let personagem = document.querySelector('#personagem')
let left_personagem = new String(window.getComputedStyle(personagem).getPropertyValue('left'))
let valorLeft = Number(left_personagem.match(/\d/ig))
let top_personagem = new String(window.getComputedStyle(personagem).getPropertyValue('top'))
let valorTop = Number(top_personagem.match(/\d/ig))

window.addEventListener('keydown',(event)=>{
    if (event.keyCode === 37){
        //seta esquerda
        if (valorLeft > 0){
            valorLeft -= 40
            personagem.style.left = valorLeft + 'px'
        }
    } else if (event.keyCode === 38){
        //seta cima
        if (valorTop > 0){
            valorTop -= 40
            personagem.style.top = valorTop + 'px'
        }
    } else if (event.keyCode === 39){
        //seta direita
        if (valorLeft < 360){
            valorLeft += 40
            personagem.style.left = valorLeft + 'px'
        }
    } else if (event.keyCode === 40){
        //seta baixo
        if (valorTop < 360){
            valorTop += 40
            personagem.style.top = valorTop + 'px'
        }
    }
})