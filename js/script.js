$(document).ready(function(){

		var $sliderUl = $('.testimonies-list');
		var $slides = $sliderUl.find('li'); 
		console.log($slides.length);
		var width = 400;
		var currentSlide = 1;

		function sliderSlide(){
			if(currentSlide === $slides.length){
				currentSlide = 1;
				$sliderUl.css('margin-left',0);
			}
			currentSlide++;
			$sliderUl.animate({'margin-left': '-=' + width +''}, 1000);
		}

		var sliderInterval = setInterval(sliderSlide, 3000);

});