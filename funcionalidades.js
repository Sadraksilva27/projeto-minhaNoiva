
let pontos = 0
let perguntaAtual = 1
let Bruna = "Bruna"

function comecar() {
    let inicio = document.getElementById('start')
    inicio.style.display = 'none'

    let pergunta = document.getElementById('quiz')
    pergunta.style.display = 'block'

    pergunta.innerHTML = `
        <h2>Pergunta 1</h2>
        <p>Onde foi nosso primeiro beijo?</p>

        <button class="alternativa" onclick="verificarResposta('Praça')">Praça</button><br>
        <button class="alternativa" onclick="verificarResposta('Área de lazer')">Área de lazer</button><br>
        <button class="alternativa" onclick="verificarResposta('Piscina')">Piscina</button><br>
        <button class="alternativa" onclick="verificarResposta('Casa do seu pai')">Casa do seu pai</button><br>

        <input type="button" value="Voltar ao início" onclick="voltarInicio()">
    `
}

function voltarInicio() {
    let voltar = document.getElementById('start')
    voltar.style.display = 'block'

    let quiz = document.getElementById('quiz')
    quiz.style.display = 'none'

    pontos = 0
    perguntaAtual = 1
}

function verificarResposta(resposta) {

    if (perguntaAtual == 1) {

        if (resposta == "Área de lazer") {
            pontos++
        }

        perguntaAtual = 2

        let pergunta = document.getElementById('quiz')

        pergunta.innerHTML = `
            <h2>Pergunta 2</h2>
            <p>Qual time eu torço?</p>

            <button class="alternativa" onclick="verificarResposta('Fluminense')">Fluminense</button><br>
            <button class="alternativa" onclick="verificarResposta('São paulo correia')">São paulo correia</button><br>
            <button class="alternativa" onclick="verificarResposta('Duque de caxias')">Duque de caxias</button><br>
            <button class="alternativa" onclick="verificarResposta('São Paulo')">São Paulo</button><br>

            <input type="button" value="Voltar ao início" onclick="voltarInicio()">
        `
    }

    else if (perguntaAtual == 2) {

        if (resposta == "São Paulo") {
            pontos++
        }

        perguntaAtual = 3

        let pergunta = document.getElementById('quiz')

        pergunta.innerHTML = `
            <h2>Pergunta 3</h2>
            <p>Qual a cor da camisa que estava quando te conheci?</p>

            <button class="alternativa" onclick="verificarResposta('Azul')">Azul</button><br>
            <button class="alternativa" onclick="verificarResposta('Verde')">Verde</button><br>
            <button class="alternativa" onclick="verificarResposta('Amarelo')">Amarelo</button><br>
            <button class="alternativa" onclick="verificarResposta('Branco')">Branco</button><br>

            <input type="button" value="Voltar ao início" onclick="voltarInicio()">
        `
    }

    else if (perguntaAtual == 3) {

        if (resposta == "Branco") {
            pontos++
        }

        perguntaAtual = 4

        let pergunta = document.getElementById('quiz')

        pergunta.innerHTML = `
            <h2>Pergunta 4</h2>
            <p>Onde foi nosso primeiro encontro?</p>

            <button class="alternativa" onclick="verificarResposta('Seu bastião')">Seu Bastião</button><br>
            <button class="alternativa" onclick="verificarResposta('Alambique')">Alambique</button><br>
            <button class="alternativa" onclick="verificarResposta('Fogo e brasa')">Fogo e brasa</button><br>
            <button class="alternativa" onclick="verificarResposta('Forever')">Forever</button><br>

            <input type="button" value="Voltar ao início" onclick="voltarInicio()">
        `
    }

    else if (perguntaAtual == 4) {

        if (resposta == "Fogo e brasa") {
            pontos++
        }

        perguntaAtual = 5

        let pergunta = document.getElementById('quiz')

        pergunta.innerHTML = `
            <h2>Pergunta 5</h2>
            <p>Qual tipo de filme eu gosto de assistir?</p>

            <button class="alternativa" onclick="verificarResposta('Terror')">Terror</button><br>
            <button class="alternativa" onclick="verificarResposta('Ação')">Ação</button><br>
            <button class="alternativa" onclick="verificarResposta('Romance')">Romance</button><br>
            <button class="alternativa" onclick="verificarResposta('Comédia')">Comédia</button><br>

            <input type="button" value="Voltar ao início" onclick="voltarInicio()">
        `
    }

    else if (perguntaAtual == 5) {

        if (resposta == "Romance") {
            pontos++
        }

        let pergunta = document.getElementById('quiz')

        if (pontos == 5) {

            pergunta.innerHTML = `
                <h2>Você realmente me conhece! ❤️</h2>
                <p>Você acertou ${pontos} de 5 perguntas!</p>
                   <input type="button" value="Voltar ao início" onclick="voltarInicio()">
            `

        } else if (pontos >= 3) {

            pergunta.innerHTML = `
                <h2>Até que você me conhece bem! 😂</h2>
                <p>Você acertou ${pontos} de 5 perguntas!</p>
                   <input type="button" value="Voltar ao início" onclick="voltarInicio()">
            `

        } else {

            pergunta.innerHTML = `
                <h2>Precisamos conversar... 👀</h2>
                <p>Você acertou ${pontos} de 5 perguntas!</p>
                   <input type="button" value="Voltar ao início" onclick="voltarInicio()">
            `
        }
    }
}

