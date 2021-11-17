$(document).ready(function () {
	$('#navmain').fadeOut();
	$(window).scroll(() => {
		var scroll = $(window).scrollTop();
		var objectSelect = $('#services');
		var objectPosition = objectSelect.offset().top;

		if (scroll > objectPosition - 80) {
			$('#navmain').fadeIn();
		} else {
			$('#navmain').fadeOut();
		}
	});
	new Swiper('.testimonials-slider', {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 40
			},

			1200: {
				slidesPerView: 3
			}
		}
	});
});

var nav = document.getElementById('navbar');
var navlink = document.getElementsByClassName('nav-link');

for (var i = 0; i < navlink.length; i++) {
	navlink[i].addEventListener('click', function () {
		var current = document.getElementsByClassName('active1');
		current[0].className = current[0].className.replace(' active1', '');
		this.className += ' active1';
	});
}

const scrollProgress = document.getElementById('progress');
const scrollProgress1 = document.getElementById('progress1');
const height =
	document.documentElement.scrollHeight -
	document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
	const scrollTop =
		document.body.scrollTop || document.documentElement.scrollTop;
	scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
	scrollProgress1.style.width = `${(scrollTop / height) * 100}%`;
});
