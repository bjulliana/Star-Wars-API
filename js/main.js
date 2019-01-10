(function () {
	'use strict';

	let body         = document.querySelector('body'),
	    inputArea    = document.querySelectorAll('.input-field'),
	    listItem     = document.querySelectorAll('.list-item'),
	    closeIcon    = document.querySelector('.close-icon'),
	    panelRight   = document.querySelector('.js-panel-right'),
	    panelLeft    = document.querySelector('.js-panel-left'),
	    jsPanel      = document.querySelectorAll('.js-panel'),
	    windowHeight = window.innerHeight;

	//Toggle Right Section
	listItem.forEach(el => {
		el.addEventListener('click', function () {
			listItem.forEach(el => {
				el.classList.remove('active');
			});
			jsPanel.forEach(el => {
				el.classList.remove('is-active');
			});
			panelRight.classList.add('is-active');
			body.classList.add('is-open');
			el.classList.add('active');
		});
	});

	closeIcon.addEventListener('click', function () {
		body.classList.remove('is-open');
		panelRight.classList.remove('is-active');
		panelLeft.classList.add('is-active');
		listItem.forEach(el => {
			el.classList.remove('active');
		});
	});
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