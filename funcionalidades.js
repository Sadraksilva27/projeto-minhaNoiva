function comecar() {
   let inicio = document.getElementById('start')
   inicio.style.display = 'none'

   let pergunta = document.getElementById('quiz')
   pergunta.style.display = 'block'

 pergunta.innerHTML = `
    <h2>Pergunta 1</h2>
    <p>Onde foi nosso primeiro beijo?</p>
`
}