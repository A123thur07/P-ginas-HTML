const container = document.querySelector('.container')
container.style.backgroundColor = '#37e95da3'

const titulo = document.getElementById ('titulo');
titulo.style.fontSize = '28px';
titulo.style.color = '#09631dff';
titulo.textContent = '🌵  Manipulando o HTML usando Java Script  🌵'

const paragrafo = '<p> Acrescentando elementos via Java Script </p>'
container.innerHTML += paragrafo;
