const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "darkblue", "rgba(15,15,32)"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
//recebe uma cor aleatória entre 0 e 3 do array colors
    const randomNumber = recebeNumeroAleatorio()
    //altera a cor de fundo de acordo com o valor aleatório
    document.body.style.backgroundColor = colors[randomNumber]
    //ajusta o texto para a cor alterada
    color.textContent = colors[randomNumber]
})

function recebeNumeroAleatorio(){
    //retorna o valor arredondado entre 0 e 3 multiplicado pelo tamanho do array de cores
    return Math.floor(Math.random() * colors.length)
}