// cria constante de um array hexadecimal
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

// cria a constante botão que recebe o botão do documento como valor
const btn = document.getElementById("btn")

//cria a contante cor que recebe a classe cor como valor
const color = document.querySelector(".color")

//cria um evento para quando o botão for clicado ativar a função
btn.addEventListener("click", function(){
    //cria a variavel hexcolor já com a # para poder fazer a alteração da cor, caso fosse constante, seria aplicado um erro já que não pode ser reatribuido
    let hexColor = "#"

    //acrescenta 1 valor aleatório do array até chegar no sexto valor, que é o endereçamento das colorações hexadecimais
    for(i = 0; i < 6; i++){
        hexColor += hex[recebeNumeroAleatorio()]
    }

    // o texto na div de cor receberá o texto e exibirá para o usuario
    color.textContent = hexColor

    // o corpo do documento será estilizado de acordo com a coloração do valor recebido
    document.body.style.backgroundColor = hexColor
})

//cria a função de numero aleatório
function recebeNumeroAleatorio(){
    //retorna um número aleatório de valor arredondado 
    return Math.floor(Math.random() * hex.length)
}