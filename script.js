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

	slidesPerView: "auto",
	spaceBetween: 30,
});

const swiperBrands = new Swiper(".swiper-brands", {
	// Optional parameters
	loop: true,

	autoplay: {
		delay: 1000, // Slide every 1 seconds
		disableOnInteraction: false, // Pause autoplay after user interaction
	},

	speed: 2000,
	slidesPerView: 6,
	spaceBetween: 30,
});

// Swiper pertners wrapper
const swiperPartners = new Swiper(".swiper-partners", {
	// Optional parameters
	loop: true,
    freeMode: true,
    freeModeMomentum: false,

	autoplay: {
		delay: 0, // Slide 0 second
		disableOnInteraction: false, // Pause autoplay after user interaction
	},

	speed: 1000,


	slidesPerView: 6,
	spaceBetween: 30,
});
