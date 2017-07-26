const header_link = new Scroll ({
	link: '.nav [data-link]',
	speed: 'low' // low, normal, fast
});


function Scroll (settings) {
	const link = document.querySelectorAll(settings.link);
	let count = 0;

	for (let i = 0; i < link.length; i++) {
		link[i].addEventListener('click', start);
	}


	function start () {
		let getAtr = this.getAttribute('data-link');
		let ancor = document.querySelector(getAtr);

	  if (window.pageYOffset < ancor.offsetTop) {

			let timer1 = setInterval(function () {
     	window.scrollTo('0',count += 10);
      if (count >= ancor.offsetTop) {
        clearInterval(timer1);
      }
    
  }, 1);

			} else if (window.pageYOffset > ancor.offsetTop) {
				let timer2 = setInterval(function () {
     		window.scrollTo('0',count -= 10);
      if (count <= ancor.offsetTop) {
        clearInterval(timer2);
      }
    
  }, 1);

			}
}
}	








// link.addEventListener('click', function () {
//   let getAtr = this.getAttribute('data-link');
//   let serachDiv = document.querySelector(getAtr);

//   let count = 0;
//   let timer1 = setInterval(function () {
    
//      window.scrollTo('0',count += 8);
//       if (count >= serachDiv.offsetTop) {
//         clearInterval(timer1);
//       }
    
//   }, 1);
// });









// let link = document.querySelector('.row-flex');


// link.addEventListener('click', function () {
//   let getAtr = this.getAttribute('data-link');
//   let serachDiv = document.querySelector(getAtr);

//   let count = 0;
//   let timer1 = setInterval(function () {
    
//      window.scrollTo('0',count += 8);
//       if (count >= serachDiv.offsetTop) {
//         clearInterval(timer1);
//       }
    
//   }, 1);
// });
