const miniaturas = document.querySelectorAll('.miniatura')
const imgAmpliada = document.querySelector('.imgAmpliada')

miniaturas.forEach(miniatura => {
    miniatura.addeventListener('click', () =>{
        const src = miniatura.src;
        console.log(src)
    })
})
