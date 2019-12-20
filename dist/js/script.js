$(document).ready(function(){

//slider slick home-page
	$('.home-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});


//slider slick about-page
	
	$('.offer-slider').slick({
	  lazyLoad: 'ondemand',
	  slidesToShow: 3,
	  slidesToScroll: 1
	});

});