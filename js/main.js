(function () {
	'use strict';

	let body            = document.querySelector('body'),
	    inputArea       = document.querySelectorAll('.input-field'),
	    listItem        = document.querySelectorAll('.list-item'),
	    btButton        = document.querySelector('.back-top'),
	    animatedObject  = document.querySelectorAll('.js-animation'),
	    windowHeight    = window.innerHeight;

	//Toggle Right Section
	listItem.forEach(el => {
		el.addEventListener('click', function () {
			listItem.forEach(el => {
				el.classList.remove('active');
			});
			body.classList.add('is-open');
			el.classList.add('active');
		});
	});
//
//	mobileMenuClose.addEventListener('click', function () {
//		body.classList.toggle('menu-is-open');
//	});
//
////Check for not-empty Field for Floating Label
//	inputArea.forEach(el => {
//		el.addEventListener('keyup', function () {
//			if (el.value.length > 0) {
//				el.classList.add('not-empty');
//			} else {
//				el.classList.remove('not-empty');
//			}
//		});
//	});
//
//	inputArea.forEach(el => {
//		el.addEventListener('keyup', function () {
//			if (el.value.length > 0) {
//				el.classList.add('not-empty');
//			} else {
//				el.classList.remove('not-empty');
//			}
//		});
//	});
//
//// Show or hide the Back to Top Button
//	window.addEventListener('scroll', function () {
//		let offset    = 500,
//		    scrollpos = window.scrollY;
//
//		if (scrollpos > offset) {
//			btButton.classList.add('visible');
//		} else {
//			btButton.classList.remove('visible');
//		}
//	});
//
////Smoothscroll
//	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//		anchor.addEventListener('click', function (e) {
//			e.preventDefault();
//
//			document.querySelector(this.getAttribute('href')).scrollIntoView({
//				behavior: 'smooth'
//			});
//		});
//	});
//
//	animatedObject.forEach(el => {
//		window.addEventListener('scroll', function () {
//			let posTop = el.getBoundingClientRect().top;
//			if (posTop - windowHeight <= 0) {
//				el.className = el.className.replace('js-animation', 'fade-in');
//			}
//		});
//	});
})();