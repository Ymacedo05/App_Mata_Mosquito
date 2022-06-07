
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15 

var nivel  = window.location.search // search retorna as informações contidas após o sinal ?, incluindo ?.

nivel = nivel.replace('?', '') // replace > substitui informações. 

var atribuiVelocidade = 1500

if ( nivel == 'normal') {
    // 1500
    atribuiVelocidade = 1500

} else if (nivel == 'dificil') {
    // 1000
    atribuiVelocidade = 900

} else if (nivel == 'radianca') {
    // 750
    atribuiVelocidade = 500
}




function ajustaTamanhoPalcoJogo(){ 

     altura = window.innerHeight // informa a altura da pagina
     largura = window.innerWidth // informa a largura da pagina


}

ajustaTamanhoPalcoJogo()

// cria um cronometro e atrui o seu valor a tag span no HTML e finaliza a execução das funções.

document.getElementById('cronometro').innerHTML = tempo
var cronometro = setInterval( function (){

    tempo--
    if (tempo < 0){

        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = "vitoria.html"

    } else{

        document.getElementById('cronometro').innerHTML = tempo
    }
    

}, 1000)



function posicaoRandomica() {

    if(document.getElementById('mosq')) {
        document.getElementById('mosq').remove()

        

// remoção das vidas e finalização do jogo
        if (vidas > 3){
            window.location.href = "fim_de_jogo.html"
        } else{
            document.getElementById('im' + vidas).src= "imagens/coracao_vazio.png"

            vidas++
        }
    }

    var posicaoX = Math.round(Math.random() * largura) - 90
    var posicaoY = Math.round(Math.random() * altura) - 90

    posicaoX = posicaoX < 0? 0 : posicaoX
    posicaoY = posicaoY < 0? 0 : posicaoY

    console.log('Left (largura): ' + posicaoX + ', Top: (altura)'+ posicaoY)


    //criar o elemento html e atribuir as posições aleaórias ao elemento

    var mosquito = document.createElement('img') //cria uma tag html
    mosquito.src = "imagens/mosca.png" // atruimos um atrubuto
    mosquito.id = 'mosq'
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    
    // remoção ao clicar 
    mosquito.onclick = function() {
       this.remove()
    }



    document.body.appendChild(mosquito)
}

posicaoRandomica()

//alterando o tamanho > criamos um gerador de classes que atruí as mesmas direto no elemento criado (img)

function tamanhoAleatorio(){

    var classe = Math.floor(Math.random()*3)

    switch (classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'
        
        case 2:
            return 'mosquito3'
    }
    
}


function ladoAleatorio(){

    var classe = Math.floor(Math.random()*2)

    switch (classe) {
        case 0:
            return 'ladoA'
        
        case 1:
            return 'ladoB'
    }
}

