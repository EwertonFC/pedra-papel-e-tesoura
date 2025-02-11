let botao1 = document.querySelector("#btn-1")
let botao2 = document.querySelector("#btn-2")
let botao3 = document.querySelector("#btn-3")

function playRound(){
    let escolhaHumano = document.activeElement.textContent.toLocaleLowerCase()
    let escolhaComputador = getComputador()

    if (escolhaHumano === escolhaComputador){
        return console.log(`empate. Vc escolheu ${escolhaHumano} e o computador tambem escolher ${escolhaComputador}`)
    } else if (escolhaHumano === "pedra" && escolhaComputador === "papel"){
        return console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc perdeu.`)
    } else if (escolhaHumano === "pedra" && escolhaComputador === "tesoura"){
        return console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc ganhou.`)
    } else if (escolhaHumano === "tesoura" && escolhaComputador === "pedra"){
        return console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc perdeu.`)
    } else if (escolhaHumano === "tesoura" && escolhaComputador === "papel"){
        return console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc ganhou.`)
    } else if (escolhaHumano === "papel" && escolhaComputador === "pedra"){
        return console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc ganhou.`)
    } else if (escolhaHumano === "papel" && escolhaComputador === "tesoura"){
        return console.log(`Vc escolheu ${escolhaHumano} e o computador ${escolhaComputador}. Vc perdeu.`)
    } else {
        console.log("algo de errado nao esta certo")
        console.log(escolhaComputador)
        console.log(escolhaHumano)
    }
}

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

botao1.addEventListener("click", playRound)
botao2.addEventListener("click", playRound)
botao3.addEventListener("click", playRound)