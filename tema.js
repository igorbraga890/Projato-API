var json1 = `{
    "imagem1":  "<img src='./img/dragonborn.png' width='1000px' height='400px'>",
    "titulo1": "Dragonborn",
    "texto1": "Um Dragonborn é uma pessoa que tem o corpo de um mortal, mas o sangue e a alma de um dragão. Eles têm a habilidade de usar a Voz, uma forma de magia que envolve falar palavras de poder na língua do dragão."
}`;
var json2 = `{
    "imagem2": "<img src='./img/talos.png' width='1000px' height='400px'>",
    "titulo2": "Talos",
    "texto2": "Talos, também conhecido como Tiber Septim, Ysmir, Nascido do Dragão(dragonborn) e herdeiro do Trono dos Reis Despedaçados, após sua morte ele recebeu uma benção dos deuses ascendendo como uma divindade e se tornando o principal motivo da guerra civil em Skyrim"
}`;
var json3 = `{
    "imagem3": "<img src='./img/imperio.png' width='1000px' height='400px'>",
    "titulo3": "Imperio",
    "texto3": " Talos, sem alianças após o assassinato de seu senhor, começou sua carreira como o maior conquistador da história desta terra. Melhor conhecido por seu nome imperial, Tiber Septim; seus exércitos conquistaram todo Tamriel, criando o Império que ainda hoje, tem seu nome, e iniciando a Terceira Era."
}`;
var json4 = `{
    "imagem4": "<img src='./img/stormcloaks.png' width='1000px' height='400px'>",
    "titulo4": "Stormcloaks",
    "texto4": "Os Stormcloaks são uma facção rebelde em Skyrim, liderada por Ulfric Stormcloak. Eles são conhecidos por sua resistência contra o Império e sua luta pela independência de Skyrim. A origem dos Stormcloaks remonta à Guerra Civil de Skyrim, onde Ulfric desafiou o Alto Rei Torygg e matou-o em um duelo. Esse evento marcou o início da rebelião dos Stormcloaks contra o Império."
}`;
var json5 = `{
    "imagem5": "<img src='./img/aldmeri_dominion.png' width='1000px' height='400px'>",
    "titulo5": "Aldmeri Dominion",
    "texto5": " Membros da Aldmeri Dominion acreditam que as raças jovens e de curta duração de homens não serviam para governar e que esse papel dos Divinos deve ser da própria Aldmeri Dominion. após sua vitória na guerra contra o império eles fizeram um tratado para acabar com o culto ao deus talos o'que iniciou a guerra civil em Skyrim"
}`

var data1 = JSON.parse(json1);

function botao1(){
    document.getElementById('imagem').innerHTML = data1.imagem1
    document.getElementById('titulo').innerHTML = data1.titulo1
    document.getElementById('texto').innerHTML = data1.texto1
}
var data2 = JSON.parse(json2);

function botao2(){
    document.getElementById('imagem').innerHTML = data2.imagem2
    document.getElementById('titulo').innerHTML = data2.titulo2
    document.getElementById('texto').innerHTML = data2.texto2
}
var data3 = JSON.parse(json3);

function botao3(){
    document.getElementById('imagem').innerHTML = data3.imagem3
    document.getElementById('titulo').innerHTML = data3.titulo3
    document.getElementById('texto').innerHTML = data3.texto3
}
var data4 = JSON.parse(json4);

function botao4(){
    document.getElementById('imagem').innerHTML = data4.imagem4
    document.getElementById('titulo').innerHTML = data4.titulo4
    document.getElementById('texto').innerHTML = data4.texto4
}
var data5 = JSON.parse(json5);

function botao5(){
    document.getElementById('imagem').innerHTML = data5.imagem5
    document.getElementById('titulo').innerHTML = data5.titulo5
    document.getElementById('texto').innerHTML = data5.texto5
}