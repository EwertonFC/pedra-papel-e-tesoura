function getEscolhaComputador(){
    let escolha1 = "tesoura"
    let escolha2 = "papel"
    let escolha3 = "pedra"
    let escolhaAleatoria = Math.floor(Math.random()*3)

    if (escolhaAleatoria === 0){
        console.log("Computador escolheu: tesoura")
        return escolha1
    }else if (escolhaAleatoria === 1) {
        console.log("Computador escolheu: papel")
        return escolha2
    }else {
        console.log("Computador escolheu: pedra")
        return escolhaAleatoria = escolha3
    }
}

function getEscolhaHumano(){
    let humanChoice = prompt("Qual opcao: Pedra, Papel ou Tesoura?")
    console.log(`Voce escolheu: ${humanChoice}`)
    return humanChoice.toLowerCase()
}

function jogo(){
    
    let pontuacaoHumano = 0
    let pontuacaoComputador = 0
    let controlador  = 0 
    
    function jogarRound(humano, computador){

        if (humano === computador){
            pontuacaoComputador = ++pontuacaoComputador
            pontuacaoHumano = ++pontuacaoHumano
            console.log(`Houve um empate! \n1 ponto para cada.\nComputador: ${pontuacaoComputador}\nHumano: ${pontuacaoHumano}`)
        } else if (humano === "pedra" && computador === "tesoura") {
            pontuacaoHumano = ++pontuacaoHumano
            return console.log(`Humano venceu a rodada. Pontuacao atual: ${pontuacaoHumano}`)
        } else if (humano === "papel" && computador === "pedra") {
            pontuacaoHumano = ++pontuacaoHumano
            return console.log(`Humano venceu a rodada. Pontuacao atual: ${pontuacaoHumano}`)
        } else if (humano === "tesoura" && computador === "papel") {
            pontuacaoHumano = ++pontuacaoHumano
            return console.log(`Humano venceu a rodada. Pontuacao atual: ${pontuacaoHumano}`)
        } else {
            pontuacaoComputador = ++pontuacaoComputador
            return console.log(`Computador venceu a rodada. Pontuacao atual: ${pontuacaoComputador}`)
        }
    }

    while (controlador < 3){
        controlador = ++controlador
        jogarRound(getEscolhaHumano(), getEscolhaComputador())
    }
    
    if (pontuacaoHumano > pontuacaoComputador){
        console.log(`Voce ganhou com uma pontuacao de ${pontuacaoHumano}`)
    } else if (pontuacaoComputador > pontuacaoHumano) {
        console.log(`Computador ganhou com uma pontuacao de ${pontuacaoComputador}`)
    } else {
        console.log(`Houve um empate onde voce ficou com: ${pontuacaoHumano} e o computador ${pontuacaoComputador}`)
    }
}

jogo();