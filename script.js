const nomeCorSelecionada = document.getElementById('nome-cor-selecionada')
const tituloProduto = document.getElementById('titulo-produto')
const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const opcaoImagem0 = document.getElementById('0-imagem-miniatura')
const opcaoImagem1 = document.getElementById('1-imagem-miniatura')
const opcaoImagem2 = document.getElementById('2-imagem-miniatura')

// dicionario para cada cor
const verdeCipreste = {
  nome: 'Verde-cipreste',
  nomePastaImagens: 'imagens-verde-cipreste',
}
const azulInverno = {
  nome: 'Azul-inverno',
  nomePastaImagens: 'imagens-azul-inverno',
}
const meiaNoite = {
  nome: 'Meia-noite',
  nomePastaImagens: 'imagens-meia-noite',
  emEstoque: false,
}
const estelar = {
  nome: 'Estelar',
  nomePastaImagens: 'imagens-estelar',
}
const rosaClaro = {
  nome: 'Rosa-claro',
  nomePastaImagens: 'imagens-rosa-claro',
}

// Array contendo todas as cores
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]

const opcoesTamanho = ['41 mm', '45 mm']

let corSelecionada = 1
let tamanhoSelecionado = 1
let imagemSelecionada = 1

function atualizarCorSelecionada() {
  // pega a opção selecionada com querySelector buscando a opção checked
  // .id pega o id do elemento
  //.charAt(0) - pego a posição [0] da string (id dado no html) ja que cada id começa com o numero referente a imagem(0, 1)
  const numeroCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0)

  corSelecionada = numeroCorSelecionada
  // Carrega o nome da cor no titulo
  nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`
  // troca a aimagem principal
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`
  // Troca a imagem das miniaturas
  opcaoImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-0.jpeg`
  opcaoImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-1.jpeg`
  opcaoImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-2.jpeg`
  // Carrega a cor selecionada e o tamanho selecionado para o titulo do anúncio
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
}

function atualizarTamanho() {
  // pega a opção selecionada com querySelector buscando a opção checked
  // .id pega o id do elemento
  //.charAt(0) - pego a posição [0] da string (id dado no html) ja que cada id começa com o numero referente a imagem(0, 1)
  const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0)

  tamanhoSelecionado = opcaoTamanhoSelecionado
  if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
    // Atualiza a classe da imagem assim trocando o tamanho 
    imagemVisualizacao.classList.add('caixa-pequena')
    // Altera o titulo
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    return
  }
  // Remove a classe que deixa a img pequena
  imagemVisualizacao.classList.remove('caixa-pequena')
  // Altera o titulo
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
}

function atualizarImagemSelecionada() {
  // Outro jeito de fazer seria passar o numero da img como parametro para a função que iria funcionar normalmente

  // pega a opção selecionada com querySelector buscando a opção checked
  // .id pega o id do elemento
  //.charAt(0) - pego a posição [0] da string (id dado no html) ja que cada id começa com o numero referente a imagem(0, 1, 2)
  const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0)
  
  imagemSelecionada = opcaoImagemSelecionada

  // Atualiza a imagem de visualização baseada no id selecionado
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`
}
