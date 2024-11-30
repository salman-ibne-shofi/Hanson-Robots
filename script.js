const swiper = new Swiper(".swiper", {
	// Optional parameters
	loop: true,

	autoplay: {
		delay: 1000, // Slide every 3 seconds
		disableOnInteraction: true, // Pause autoplay after user interaction
	},

	speed: 2000,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},

	slidesPerView: "auto",
	spaceBetween: 30,
});

const swiperBrands = new Swiper(".swiper-brands", {
	// Optional parameters
	loop: true,

	autoplay: {
		delay: 1000, // Slide every 3 seconds
		disableOnInteraction: true, // Pause autoplay after user interaction
	},

	speed: 2000,

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},

	autoplay: {
		disableOnInteraction: false, // Continue autoplay after user interaction
	},

	slidesPerView: 6,
	spaceBetween: 30,
});
