// hiding nav bar

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

// scroll progress bar
const scrollProgress = document.getElementById('progress');
const scrollProgress1 = document.getElementById('progress1');
const height =
	document.documentElement.scrollHeight -
	document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
	const scrollTop =
		document.body.scrollTop || document.documentElement.scrollTop;
	let scrollValue = (scrollTop / height) * 100;
	console.log(scrollValue);
	scrollProgress.style.width = `${scrollValue}%`;
	scrollProgress1.style.width = `${scrollValue}%`;
});

// nav bar collaps
$('.navbar-nav>a').on('click', function () {
	$('.navbar-collapse').collapse('hide');
});
