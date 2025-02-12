let botao1 = document.querySelector("#btn-1")
let botao2 = document.querySelector("#btn-2")
let botao3 = document.querySelector("#btn-3")

function getComputador(){
    let opcoes = ["pedra", "papel", "tesoura"]
    let escolhaAleatoria = Math.floor(Math.random()*3)

    if (escolhaAleatoria === 0){
        return opcoes[0]
    }else if (escolhaAleatoria === 1) {
        return opcoes[1]
    }else {
        return opcoes [2]
    }
}

let computadorScore = 0
let humanoScore = 0

function playGame(){
    playRound()
    if (computadorScore === 5){
        console.log(`computador ganhou o jogo. Computador score: ${computadorScore} x humano: ${humanoScore}`)
        computadorScore = 0
        humanoScore = 0
    } else if (humanoScore === 5){
        console.log(`Voce ganhou o jogo. Computador score: ${computadorScore} x humano: ${humanoScore}`)
        computadorScore = 0
        humanoScore = 0
    }
}

function playRound(){
    
    let escolhaHumano = document.activeElement.textContent.toLocaleLowerCase()
    let escolhaComputador = getComputador()

    if (escolhaHumano === escolhaComputador){
        console.log(`empate. Vc escolheu ${escolhaHumano} e o computador tambem escolher ${escolhaComputador}`)    
        console.log(`score computador: ${computadorScore} x score humano: ${humanoScore}`)
    } else if (escolhaHumano === "pedra" && escolhaComputador === "papel"){
        console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc perdeu.`)
        computadorScore = ++computadorScore
        console.log(`score computador: ${computadorScore} x score humano: ${humanoScore}`)
    } else if (escolhaHumano === "pedra" && escolhaComputador === "tesoura"){
        console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc ganhou.`)
        humanoScore = ++humanoScore
        console.log(`score computador: ${computadorScore} x score humano: ${humanoScore}`)
    } else if (escolhaHumano === "tesoura" && escolhaComputador === "pedra"){
        console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc perdeu.`)
        rcomputadorScore = ++computadorScore
        console.log(`score computador: ${computadorScore} x score humano: ${humanoScore}`)
    } else if (escolhaHumano === "tesoura" && escolhaComputador === "papel"){
        console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc ganhou.`)
        humanoScore = ++humanoScore
        console.log(`score computador: ${computadorScore} x score humano: ${humanoScore}`)
    } else if (escolhaHumano === "papel" && escolhaComputador === "pedra"){
        console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc ganhou.`)
        humanoScore = ++humanoScore
        console.log(`score computador: ${computadorScore} x score humano: ${humanoScore}`)
    } else if (escolhaHumano === "papel" && escolhaComputador === "tesoura"){
        console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc perdeu.`)
        computadorScore = ++computadorScore
        console.log(`score computador: ${computadorScore} x score humano: ${humanoScore}`)
    } else {
        console.log("algo de errado nao esta certo")
        console.log(escolhaComputador)
        console.log(escolhaHumano)
    }
}



botao1.addEventListener("click", playGame)
botao2.addEventListener("click", playGame)
botao3.addEventListener("click", playGame)