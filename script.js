let botao1 = document.querySelector("#btn-1")
let botao2 = document.querySelector("#btn-2")
let botao3 = document.querySelector("#btn-3")
let resultado = document.querySelector("#resultado")

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
let nome = prompt("Quem vai jogar?")
function playGame(){
    playRound()
    if (computadorScore === 5){
        resultado.innerText = `Computador ganhou o jogo. Computador score: ${computadorScore} X ${nome}: ${humanoScore}`
        computadorScore = 0
        humanoScore = 0
    } else if (humanoScore === 5){
        resultado.innerText = `${nome} ganhou o jogo. ${nome}: ${humanoScore} X Computador score: ${computadorScore} `
        computadorScore = 0
        humanoScore = 0
    }
}

function playRound(){
    
    let escolhaHumano = document.activeElement.textContent.toLocaleLowerCase()
    let escolhaComputador = getComputador()

    if (escolhaComputador === escolhaHumano) {
        resultado.innerText = `Rodada empatada 
        Sua escolha: ${escolhaHumano} 
        Escolha computador: ${escolhaComputador}
        ${nome}: ${humanoScore} X Computador: ${computadorScore}.`
    }
    
    else if (escolhaHumano === "pedra" && escolhaComputador === "papel"){
        computadorScore = ++computadorScore
        resultado.innerText = `
        Sua escolha: ${escolhaHumano} 
        Escolha computador: ${escolhaComputador}
        ${nome}: ${humanoScore} X Computador: ${computadorScore}.`
    } else if (escolhaHumano === "pedra" && escolhaComputador === "tesoura"){
        humanoScore = ++humanoScore
        resultado.innerText = `
        Sua escolha: ${escolhaHumano} 
        Escolha computador: ${escolhaComputador}
        ${nome}: ${humanoScore} X Computador: ${computadorScore}.`
    } else if (escolhaHumano === "tesoura" && escolhaComputador === "pedra"){
        computadorScore = ++computadorScore
        resultado.innerText = `
        Sua escolha: ${escolhaHumano} 
        Escolha computador: ${escolhaComputador}
        ${nome}: ${humanoScore} X Computador: ${computadorScore}.`
    } else if (escolhaHumano === "tesoura" && escolhaComputador === "papel"){
        humanoScore = ++humanoScore
        resultado.innerText = `
        Sua escolha: ${escolhaHumano} 
        Escolha computador: ${escolhaComputador}
        ${nome}: ${humanoScore} X Computador: ${computadorScore}.`
    } else if (escolhaHumano === "papel" && escolhaComputador === "pedra"){
        humanoScore = ++humanoScore
        resultado.innerText = `
        Sua escolha: ${escolhaHumano} 
        Escolha computador: ${escolhaComputador}
        ${nome}: ${humanoScore} X Computador: ${computadorScore}.`
    } else if (escolhaHumano === "papel" && escolhaComputador === "tesoura"){
        computadorScore = ++computadorScore
        resultado.innerText = `
        Sua escolha: ${escolhaHumano} 
        Escolha computador: ${escolhaComputador}
        ${nome}: ${humanoScore} X Computador: ${computadorScore}.`
    } else {
        console.log("algo de errado nao esta certo")
        console.log(escolhaComputador)
        console.log(escolhaHumano)
    }
}



botao1.addEventListener("click", playGame)
botao2.addEventListener("click", playGame)
botao3.addEventListener("click", playGame)