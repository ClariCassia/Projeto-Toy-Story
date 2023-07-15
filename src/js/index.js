const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {    

    adicionaEremoveSelecao(personagem);
    alteraImagemGrande(personagem);
    alteraNomePersonagem(personagem);
    alteraDescricaoPersonagem(personagem);

  });
});

function adicionaEremoveSelecao(personagem) {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove('selecionado');
  personagem.classList.add('selecionado');
}

const alteraImagemGrande = (personagem) => {
  const imagemPersonagemGrande = document.querySelector('.personagem-maior');
  const idPersonagem = personagem.getAttribute('id');
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
};

const alteraNomePersonagem = (personagem) => {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute('data-name');
};

const alteraDescricaoPersonagem = (personagem) => {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute('data-description');
};
