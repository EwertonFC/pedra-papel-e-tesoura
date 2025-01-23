function getComputerChoice(){
    let escolha1 = "Tesoura"
    let escolha2 = "Papel"
    let escolha3 = "Pedra"
    let escolhaAleatoria = Math.floor(Math.random()*3)

    if (escolhaAleatoria === 1){
        return escolha1
    }else if (escolhaAleatoria === 2) {
        return escolha2
    }else {
        return escolha3
    }
    
}
