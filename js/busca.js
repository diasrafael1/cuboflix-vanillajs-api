const input = document.querySelector('.input')

input.addEventListener('keydown', (event) => {
    if (event.key != "Enter") return
    if (input.value == "") return init()
    const initSearch = async () => {
        await pegarListaFilmes(`https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false**&query=${input.value}`)
        separarFilmes(0, 5)
        verificarUltimaPagina()
    }
    initSearch()
    input.value = ""
})