{
	const slider = document.querySelector('[data-slider="home-banner-second-slider"]');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
                mySwiper = new Swiper(slider, {
                    autoplay: {
                        delay: 1,
                        disableOnInteraction: false,
                    },
					slidesPerView: 'auto',
                    spaceBetween: 6,
					speed: 5000,
                    loop: true,
				});

				slider.dataset.mobile = 'true';
			}

			if(document.documentElement.clientWidth > 767) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

}