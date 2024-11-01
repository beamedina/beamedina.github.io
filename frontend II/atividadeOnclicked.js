const miniaturas = document.querySelectorAll('.miniatura')
const imgAmpliada = document.querySelector('#imgAmpliada')

console.log(miniaturas[0])
miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        miniaturas.forEach(miniatura => {
            miniatura.style.opacity = '0.4';
        })
        miniatura.style.opacity = '1';
        imgAmpliada.src = miniatura.src;
        imgAmpliada.style.display = 'block';
    });
});
