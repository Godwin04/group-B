document.addEventListener('DOMContentLoaded', function () {
	if (typeof Swiper === 'undefined') {
		console.error('Swiper not loaded. Ensure the CDN script is included before script.js');
		return;
	}

	const swiper = new Swiper('.promo-swiper', {
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 900,
		effect: 'slide',
	});
});