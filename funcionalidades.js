  let pontos = 0
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
}

function verificarResposta(resposta) {
if(resposta == "Área de lazer") {
 pontos++
}

}
onclick="verificarResposta"