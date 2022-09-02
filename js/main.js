window.addEventListener('DOMContentLoaded', () => {

    var swiper = new Swiper(".main_slider", {
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

    });



    var CubeSlider = new Swiper('.new', {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var MovieSlider = new Swiper('.movie', {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })



})

