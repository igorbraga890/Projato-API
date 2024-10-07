function buscar(){
    //função para consumir a API
    fetch('https://raw.githubusercontent.com/igorbraga890/ProjetoAPI_JSON_CPF-/refs/heads/main/cpf.json').then(resposta => resposta.json()).then(corpo => {
        var identificador = document.getElementById('valor').value 

        var encontrado = false
        corpo.forEach(pessoa => {
            if(identificador == pessoa.cpf){
                var linkSite = `<a href ="${pessoa.link}">visite nosso site</a>`
                document.getElementById('imagens').innerHTML = pessoa.imagens
                document.getElementById('nome').innerHTML = pessoa.nome
                document.getElementById('sobrenome').innerHTML = pessoa.sobrenome
                document.getElementById('cidade').innerHTML = pessoa.cidade
                document.getElementById('erro').innerHTML = ""
                encontrado = true;


            } 
        });
        if (!encontrado){
            document.getElementById('imagem').innerHTML = ""
            document.getElementById('nome').innerHTML = ""
            document.getElementById('sobrenome').innerHTML = ""
            document.getElementById('cidade').innerHTML = ""
            document.getElementById('erro').innerHTML = "valor invalido"
        }
        console.log(corpo)
    })
}