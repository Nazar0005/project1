var tab = new Tabs ({
	title: '[data-tabs]',
	tab_conteiner: '.tabs-conteiner'
});

//tab-content
function Tabs (settings) {
	var that = this;

	var title = document.querySelectorAll(settings.title);




	for (var i = 0; i < title.length; i++) {
		title[i].addEventListener('click', openTabs);
	}


	function openTabs () {
		var tab_test = document.querySelectorAll('.tabs-test');

		for (var i = 0; i < tab_test.length; i++) {
			tab_test[i].classList.add('hide');
		}

		var saveAttribute = this.getAttribute(settings.title.slice(1, -1));
		var giveContent = document.querySelector(saveAttribute);
		giveContent.classList.remove('hide');


		var parentTabs = document.querySelector(settings.tab_conteiner);
		var createDiv = document.createElement('div');
		parentTabs.appendChild(createDiv.innerHTML = giveContent);

	}


}
