let imagem = document.querySelector(".starbucks")
let fundo = document.querySelector(".circulo")


function trocaImagem(url) {
    imagem.src = url
}

function trocaFundo(cor){
    fundo.style.background = cor
}