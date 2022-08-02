const catalogo = document.querySelector(".movies");
const modal = document.querySelector(".modal");

lista = [];

const pegarListaFilmes = async (linkAPI) => {
  const resposta = await fetch(linkAPI);
  const filmes = await resposta.json();
  lista = filmes.results;
};

const separarFilmes = (inicio, fim) => {
  const catalogoSeparado = lista.slice(inicio, fim);
  catalogo.innerHTML = "";
  catalogoSeparado.forEach((filme) => {
    criarCardFilme(filme);
  });
};

const criarCardFilme = (filme) => {
  const divImagem = document.createElement("div");
  divImagem.classList.add("movie");
  divImagem.style.backgroundImage = `url(${filme.poster_path})`;
  divImagem.addEventListener("click", async () => {
    const resposta = await (
      await fetch(
        `https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${filme.id}?language=pt-BR`
      )
    ).json();
    modal.classList.remove("hidden");

    const titulo = document.querySelector(".modal__title");
    titulo.textContent = resposta.title;

    const imagem = document.querySelector(".modal__img");
    imagem.src = resposta.backdrop_path;

    const descricao = document.querySelector(".modal__description");
    descricao.textContent = resposta.overview;

    const ranking = document.querySelector(".modal__average");
    ranking.textContent = resposta.vote_average.toFixed(1);

    const listaGeneros = document.querySelector(".modal__genres");
    listaGeneros.innerHTML = "";
    resposta.genres.forEach((genero) => {
      const spanGenero = document.createElement("span");
      spanGenero.classList.add("modal__genre");
      spanGenero.textContent = genero.name;
      listaGeneros.append(spanGenero);
    });
    const botaoFechar = document.querySelector(".modal__close");
    botaoFechar.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
    modal.addEventListener("click", () => modal.classList.add("hidden"));
  });
  const divInfo = document.createElement("div");
  divInfo.classList.add("movie__info");

  const titulo = document.createElement("span");
  titulo.classList.add("movie__title");
  titulo.textContent = filme.title;

  const ranking = document.createElement("span");
  ranking.classList.add("movie__rating");
  ranking.textContent = filme.vote_average;

  const imagemEstrela = document.createElement("img");
  imagemEstrela.src = "../assets/estrela.svg";

  ranking.append(imagemEstrela);
  divInfo.append(titulo, ranking);
  divImagem.append(divInfo);
  catalogo.append(divImagem);
};

const init = async () => {
  await pegarListaFilmes(
    "https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false"
  );
  separarFilmes(0, 5);
  verificarUltimaPagina();
};
init();
