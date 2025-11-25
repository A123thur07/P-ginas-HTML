const imagem = document.getElementById('bolo');
const input = document.querySelector('.campoTexto');
imagem.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1751376886606-4681bc355776?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500');
imagem.setAttribute('alt', 'imagem de bolo');
alert(imagem.getAttribute('src'));
input.setAttribute('placeholder','Digite seu nome');
imagem.classList.add('esconder')