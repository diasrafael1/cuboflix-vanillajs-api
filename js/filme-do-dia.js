const divVideo = document.querySelector(".highlight__video");
const titulo = document.querySelector(".highlight__title");
const average = document.querySelector(".highlight__rating");
const genero = document.querySelector(".highlight__genres");
const data = document.querySelector(".highlight__launch");
const descricao = document.querySelector(".highlight__description");
const video = document.querySelector(".highlight__video-link");

const pegarDados = async () => {
  const respostaGeral = await (
    await fetch(
      "https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR"
    )
  ).json();
  const respostaVideo = await (
    await fetch(
      "https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR"
    )
  ).json();

  titulo.textContent = respostaGeral.title;
  average.textContent = respostaGeral.vote_average.toFixed(1);
  genero.textContent = `${respostaGeral.genres[0].name},${respostaGeral.genres[1].name}, ${respostaGeral.genres[2].name}`;
  data.textContent = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(respostaGeral.release_date));
  descricao.textContent = respostaGeral.overview;

  video.src = `https://www.youtube.com/embed/${respostaVideo.results[0].key}`;
};
pegarDados();
