function comecar() {
   let inicio = document.getElementById('start')
   inicio.style.display = 'none'

   let pergunta = document.getElementById('quiz')
   pergunta.style.display = 'block'

 pergunta.innerHTML = `
    <h2>Pergunta 1</h2>
    <p>Onde foi nosso primeiro beijo?</p>
   
      <button class="alternativa">Praça</button><br>
      <button class="alternativa">Área de lazer</button><br>
      <button class="alternativa">Piscina</button><br>
      <button class="alternativa">Casa do seu pai </button><br>
      
    <input type="button" value="Voltar ao início" onclick="voltarInicio()">
`
}
function voltarInicio() {
let voltar = document.getElementById('start')
voltar.style.display = 'block'

let quiz = document.getElementById('quiz')
quiz.style.display = 'none'
}