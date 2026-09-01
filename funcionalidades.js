let pontos = 0
let perguntaAtual = 0
let erradas = []

let perguntas = [
    {
        questão: 'Qual a minha maior Qualidade ?',
        alternativas: ['Carinhoso', 'Amigável', 'Paciente', 'Parceiro'],
        correta: 'Paciente'
    },
    {
        questão: 'Qual a parte do seu corpo que eu acho mais bonita',
        alternativas: ['Boca', 'Sorriso', 'Mãos', 'Olhos'],
        correta: 'Olhos'
    },
    {
        questão: 'Qual é meu sonho',
        alternativas: ['Passar em um concurso', 'Ir ao morumbi', 'Comprar um polo', 'Viajar para europa'],
        correta: 'Ir ao morumbi'
    },
    {
        questão: 'Qual o meu esporte favorito',
        alternativas: ['Futebol', 'Corrida', 'Dirigir', 'Volei'],
        correta: 'Futebol'
    },
    {
        questão: 'MInha comida favorita',
        alternativas: ['Feijoada', 'Panqueca', 'Strogonoff', 'Peixe Frito'],
        correta: 'Panqueca'
    }
]

function comecar() {
    let inicio = document.getElementById('start')
    inicio.style.display = 'none'

    let quiz = document.getElementById('quiz')
    quiz.style.display = 'block'

    pontos = 0
    perguntaAtual = 0
    erradas = []

    mostrarPergunta()
}

function mostrarPergunta() {
    let quiz = document.getElementById('quiz')
    let pergunta = perguntas[perguntaAtual]

    let html = `
        <h2>Pergunta ${perguntaAtual + 1}</h2>
        <p>${pergunta.questão}</p>
    `

    for (let i = 0; i < pergunta.alternativas.length; i++) {
        html += `<button class="alternativa" onclick="verificarResposta('${pergunta.alternativas[i]}')">${pergunta.alternativas[i]}</button><br>`
    }

    html += `<input type="button" value="Voltar ao início" onclick="voltarInicio()">`

    quiz.innerHTML = html
}

function verificarResposta(resposta) {

    if (resposta == perguntas[perguntaAtual].correta) {
        pontos++
    } else {
        erradas.push({
            questão: perguntas[perguntaAtual].questão,
            suaResposta: resposta,
            respostaCorreta: perguntas[perguntaAtual].correta
        })
    }

    perguntaAtual++

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta()
    } else {
        mostrarResultado()
    }
}

function mostrarResultado() {
    let quiz = document.getElementById('quiz')
    let mensagem = ''

    if (pontos == 5) {
        mensagem = 'Você realmente me conhece! ❤️'
    } else if (pontos >= 3) {
        mensagem = 'Até que você me conhece bem! 😂'
    } else {
        mensagem = 'Precisamos conversar... 👀'
    }

    let html = `
        <h2>${mensagem}</h2>
        <p>Você acertou ${pontos} de ${perguntas.length} perguntas!</p>
    `

    if (erradas.length > 0) {
        html += `<h2>Perguntas que você errou:</h2>`
        for (let i = 0; i < erradas.length; i++) {
            html += `
                <p>
                    <strong>${erradas[i].questão}</strong><br>
                    Sua resposta: ${erradas[i].suaResposta} ❌<br>
                    
                </p>
            `
        }
    }

    html += `<input type="button" value="Voltar ao início" onclick="voltarInicio()">`

    quiz.innerHTML = html
}

function voltarInicio() {
    let voltar = document.getElementById('start')
    voltar.style.display = 'block'

    let quiz = document.getElementById('quiz')
    quiz.style.display = 'none'

    pontos = 0
    perguntaAtual = 0
    erradas = []
}