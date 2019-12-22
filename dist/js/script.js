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
	
	/*$('.offer-slider').slick({
	  lazyLoad: 'ondemand',
	  slidesToShow: 3,
	  slidesToScroll: 1
	  responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }

        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        }
        ]
	});*/

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
      breakpoint: 1199,
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

});