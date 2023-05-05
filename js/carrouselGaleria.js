//*carouselGeneral
const carousel = document.querySelectorAll('.carousel')

//*Fotovoltaico
const buttonFoto = document.querySelector('.catalog__buttons__fotovoltaico')
const carouselFotovoltaico = document.querySelector('.catalog__carousel_fotovoltaico')

//*termico
const buttonTermico = document.querySelector('.catalog__buttons__termico')
const carouselTermico = document.querySelector('.catalog__carousel_termico')

//*ilumination
const buttonIlumination = document.querySelector('.catalog__buttons__ilumination')
const carouselIlumination = document.querySelector('.catalog__carousel_ilumination')

M.Carousel.init(carousel,{
    duration:150
})


function initialCarrouselFoto(){
    carouselFotovoltaico.classList.remove('catalog__carousel_fotovoltaico--active')
    carouselTermico.classList.remove('catalog__carousel_termico--active')
    carouselIlumination.classList.remove('catalog__carousel_ilumination--active')

    M.Carousel.init(carousel,{
        duration:150,
    })
    
}

function initialCarrouselTermico(){
    carouselFotovoltaico.classList.add('catalog__carousel_fotovoltaico--active')//*elimina
    carouselTermico.classList.add('catalog__carousel_termico--active')//*elimina
    carouselIlumination.classList.remove('catalog__carousel_ilumination--active')

    M.Carousel.init(carousel,{
        duration:150,       
    })
}

function initialCarrouselIlumniation(){
    carouselFotovoltaico.classList.add('catalog__carousel_fotovoltaico--active')
    carouselTermico.classList.remove('catalog__carousel_termico--active')
    carouselIlumination.classList.add('catalog__carousel_ilumination--active')

    M.Carousel.init(carousel,{
        duration:150,       
    })
}

buttonFoto.addEventListener('click',initialCarrouselFoto )
buttonTermico.addEventListener('click',initialCarrouselTermico )
buttonIlumination.addEventListener('click',initialCarrouselIlumniation )