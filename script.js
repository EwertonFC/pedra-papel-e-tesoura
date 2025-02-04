let botao1 = document.querySelector("#btn-1")
let botao2 = document.querySelector("#btn-2")
let botao3 = document.querySelector("#btn-3")

botao1.addEventListener("click", function getPedra(){
    return console.log(botao1.textContent.toLocaleLowerCase())
})
botao2.addEventListener("click", function getPapel(){
    return console.log(botao2.textContent.toLocaleLowerCase())
})
botao3.addEventListener("click", function getTesoura(){
    return console.log(botao3.textContent.toLocaleLowerCase())
})

