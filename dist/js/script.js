$(document).ready(function(){

//slider slick home-page
	$('.home-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  arrows: false,
	  cssEase: 'linear'
	});


//slider slick offer-page
	$('.offer-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,  //1199
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//burger in header-page

	let menuElem = document.getElementById('burger-trip');
    let titleElem = menuElem.querySelector('.burger-box__toggler');

    titleElem.onclick = function() {
      	menuElem.classList.toggle('open');
    };	

});