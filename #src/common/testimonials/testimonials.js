{
    let testimonialsSlider = document.querySelector('[data-slider="testimonials-slider"]');
    if(testimonialsSlider) {
        let sliderData = new Swiper(testimonialsSlider, {
            effect: 'fade',
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 600,
            watchSlidesProgress: true,
            watchOverflow: true,
            watchSlidesVisibility: true,
            navigation: {
                nextEl: testimonialsSlider.querySelector('.slider-button--next'),
                prevEl: testimonialsSlider.querySelector('.slider-button--prev'),
            },
        });
    }
}