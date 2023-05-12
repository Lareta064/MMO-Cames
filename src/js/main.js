document.addEventListener("DOMContentLoaded", function (){        

	/*========= HEADER MENU MOBILE ========= */
	const menuToggle = document.querySelector('.toggle-menu');
	const mobMenu = document.querySelector('.header-menu');
	const overlayBlock = document.querySelector('#overlay');
	// const backTopButton = document.querySelector('#back-top');

	const bodyEl = document.body;
	if (menuToggle) {
		menuToggle.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active');
				mobMenu.classList.remove('active');
				overlayBlock.classList.remove('active');
				bodyEl.classList.remove('lock');

			} else {
				this.classList.add('active');
				mobMenu.classList.add('active');
				overlayBlock.classList.add('active');
				bodyEl.classList.add('lock');

			}
		});
		window.addEventListener('resize', function () {
			menuToggle.classList.remove('active');
			overlayBlock.classList.remove('active');
			bodyEl.classList.remove('lock');
			mobMenu.classList.remove('active');

		});
		mobMenu.addEventListener('click', function () {
			this.classList.remove('active');
			menuToggle.classList.remove('active');
			overlayBlock.classList.remove('active');
			bodyEl.classList.remove('lock');

		});
	}
	
	/*=========RATING BLOCK =======*/
	const ratingBlock = document.querySelectorAll('[data-rating]');
	if(ratingBlock){
		ratingBlock.forEach( function(item, index) {
			const itemActive = item.querySelector('[data-count]');
			const itemActiveCount = itemActive.querySelectorAll('i');
			const itemActiveLength = itemActiveCount.length
			const itemActiveVal = itemActive.getAttribute('data-count');
			const activeBlockWidth = +(((itemActiveVal / itemActiveLength) * 100)+0.5) ;//0.5 погрешность нп расстояние между звездами
			itemActive.style.width =`${activeBlockWidth}%`;
		});
	}
});