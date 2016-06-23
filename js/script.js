$(document).ready(function(){

		var $sliderUl = $('.testimonies-list');
		var $slides = $sliderUl.find('li'); 
		var width = $('.testimonies-list li:first').width();
		var currentSlide = 1;

		function sliderSlide(){
			if(currentSlide === $slides.length){
				currentSlide = 1;
				$sliderUl.css('margin-left',0);
			}
			currentSlide++;
			$sliderUl.animate({'margin-left': '-=' + width +''}, 800);
		}

		var sliderInterval = setInterval(sliderSlide, 4000);

		$('#slideMenuButton').click(function(){
			$('#navList').toggleClass("show-menu");
		});

});