// const titulo = document.querySelector('h1');
// titulo.remove()

// console.log(titulo.innerHTML)
// console.log(titulo.innerText)
// console.log(titulo.textContent)

const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.textContent= 'Meu link';
ancora.setAttribute('href', 'https://www.ifro.edu.br')
ancora.setAttribute('target', '_blank')
ancora.style.fontSize = '30px'
ancora.style.textDecoration = 'none'
ancora.style.color = 'red'
body.prepend(ancora);
const h1 = document.createElement('h1')
body.prepend(h1)
h1.textContent = 'Meu titulo'
h1.style.color = 'pink'
body.style.backgroundColor = '#048893'

h1.setAttribute('class', 'meuTitulo')