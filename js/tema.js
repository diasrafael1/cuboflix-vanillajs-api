const botao = document.querySelector(".btn-theme")
const body = document.querySelector('body')
const setaEsq = document.querySelector('.btn-prev')
const setaDir = document.querySelector('.btn-next')
let theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'white';
const mudarTema = () => {
    botao.src = theme === 'white' ? "../assets/light-mode.svg" : "../assets/dark-mode.svg"
    setaEsq.src = theme === 'white' ? "../assets/seta-esquerda-preta.svg" : "../assets/seta-esquerda-branca.svg"
    setaDir.src = theme === 'white' ? "../assets/seta-direita-preta.svg" : "../assets/seta-direita-branca.svg"

    body.style.setProperty('--background-color', theme === 'white' ? '#fff' : '#242424');
    body.style.setProperty('--input-border-color', theme === 'white' ? '#979797' : '#fff');
    body.style.setProperty('--color', theme === 'white' ? '#000' : '#fff');
    body.style.setProperty('--highlight-background', theme === 'white' ? '#fff' : '#454545');
    body.style.setProperty('--highlight-description', theme === 'white' ? '#000' : '#fff');
    body.style.setProperty('--highlight-color', theme === 'white' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)');
    localStorage.setItem('theme', theme);
}


mudarTema()
botao.addEventListener('click', () => {
    console.log("oiii")
    theme = localStorage.getItem('theme') === 'dark' ? 'white' : 'dark';
    mudarTema()
})