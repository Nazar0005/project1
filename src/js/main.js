//= partials/carusel.js
//= partials/accardion.js




//task1  Корзина товаров
// window.onload = function () {
// 	var item = document.querySelectorAll('.list__item');
// 	var p = document.querySelector('.total-price');

// 	for (var i = 0; i < item.length; i++) {
// 		item[i].addEventListener('click', calcTeh);
// 	}

// function calcTeh() {
// 	this.classList.toggle('active');
// 	priceCalc();
// }


// function priceCalc () {
// 	var total = 0;
// 	var totalArr = [];

// 		for (var i = 0; i < item.length; i++) {

// 			if (item[i].classList.contains('active')) {
// 				total += parseInt(item[i].getAttribute('data-price'));
// 				totalArr.push(parseInt(item[i].getAttribute('data-price')));
// 			} 
// 		}
// 		//console.log(totalArr);
// 		p.innerText = total;

// 	}

// };




	var cat1 = new NewSlider ({
		item: '#slider1 .slider__item',
		next: '#next1',
		prev: '#prev1',
		auto: false,
		slideTimer: 3000
	});





function NewSlider (slider) {
	var item  = document.querySelectorAll(slider.item);
	var next = document.querySelector(slider.next);
	var prev = document.querySelector(slider.prev);
	var count = 0;

	if (slider.auto) {
		var x = setInterval(autoSlider, slider.slideTimer);
	}

	next.addEventListener('click', nextSlider);
	prev.addEventListener('click', prevSlider);
	
	function nextSlider () {
		item[count].classList.remove('slider-active');

		count++;

		if (count >= item.length) {

			count = 0;

		}

		item[count].classList.add('slider-active');
	}

	function prevSlider () {
		item[count].classList.remove('slider-active');
		count--;

		if (count < 0) {
			count = item.length - 1;
		}

		item[count].classList.add('slider-active');
	}

	function autoSlider () {
		nextSlider();
	}
	

}
// var paragraf = document.querySelectorAll('p');


// var loopInput = new OurJquery(paragraf);

// loopInput.getElement('click', function () {
// 	this.classList.toggle('p-active');
// });


// function OurJquery(elements) {
// 	this.elements = elements;

// 	this.getElement = function (eventListen, f) {

// 		for (var i = 0; i < this.elements.length; i++) {
// 			this.elements[i].addEventListener(eventListen, f);

// 		}
// 	};

// }



