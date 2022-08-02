const botaoPrev = document.querySelector(".btn-prev");
const botaoNext = document.querySelector(".btn-next");

let inicio = 0;
let fim = 5;
let paginaAtual = 1;
let limiteDePagina = 1;

const verificarUltimaPagina = () => {
  if (lista.length < 11) {
    limiteDePagina = 2;
  } else if (lista.length < 16) {
    limiteDePagina = 3;
  } else if (lista.length < 21) {
    limiteDePagina = 4;
  }
};
botaoNext.addEventListener("click", () => {
  if (lista.length <= 5) return;
  if (paginaAtual == limiteDePagina) {
    inicio = 0;
    fim = 5;
    paginaAtual = 1;
  } else {
    inicio += 5;
    fim += 5;
    paginaAtual++;
  }
  separarFilmes(inicio, fim);
});
botaoPrev.addEventListener("click", () => {
  if (lista.length <= 5) return;
  if (paginaAtual == 1) {
    inicio = lista.length - 5;
    fim = lista.length;
    verificarUltimaPagina();
    paginaAtual = limiteDePagina;
  } else {
    inicio -= 5;
    fim -= 5;
  }
  separarFilmes(inicio, fim);
});
