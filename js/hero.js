const swiper = new Swiper('.swiper', {
    slidesPerView: 1,

    navigation: {
    nextEl: '.hero--next',
    prevEl: '.hero--prev',
    },

    pagination: {
        el: '.swiper-pagination',
      },

      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },


})  