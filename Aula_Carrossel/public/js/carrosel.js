const imagens = [
    { url: 'https://cdnm.westwing.com.br/glossary/uploads/br/2021/05/14225748/obra-a-santa-ceia-de-leonardo-da-vinci_wikimedia_c-a1037.jpg' ,alt:'obra D´Vinci'},
    { url: 'https://static.dw.com/image/41371444_605.jpg',alt:'obra D´Vinci'},
    { url: 'https://www.infoescola.com/wp-content/uploads/2022/08/anunciacao-da-vinci-scaled.jpg',alt:'obra D´Vinci'},
    { url: 'https://static.todamateria.com.br/upload/ho/me/homemvitruviano-cke.jpg',alt:'obra D´Vinci'}
]

const imagem = document.getElementById('slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pontos = document.querySelector('.pontos');

function mostrarImagem(indice) {
    const item = imagens[indice];
    imagem.src = item.url;
    imagem.alt = item.alt
}

function proxima() {
    indiceAtual = (indiceAtual + 1) % imagens.lenght;
    mostrarImagem(indiceAtual);
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imagens.lenght) % imagens.lenght;
    mostrarImagem(indiceAtual);
}

prevBtn.addEventListener('click', anterior);
prevBtn.addEventListener('click', proxima);

//definir uma tecla do teclado que executa a função
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') anterior()
    if (e.key === 'ArrowRight') proxima()
})

mostrarImagem(indiceAtual)
setInterval(proxima, 2000)