fetch('https://raw.githubusercontent.com/igorbraga890/ProjetoAPI_JSON_E-Commerce-/refs/heads/main/e-commerce.json').then(resposta => resposta.json(
)).then(corpo => {

    console.log(corpo)

    document.getElementById('imagem1').innerHTML = corpo.imagem1
    document.getElementById('nome1').innerHTML = corpo.nome1
    document.getElementById('preco1').innerHTML = corpo.preco1

    document.getElementById('imagem2').innerHTML = corpo.imagem2
    document.getElementById('nome2').innerHTML = corpo.nome2
    document.getElementById('preco2').innerHTML = corpo.preco2

    document.getElementById('imagem3').innerHTML = corpo.imagem3
    document.getElementById('nome3').innerHTML = corpo.nome3
    document.getElementById('preco3').innerHTML = corpo.preco3


})

