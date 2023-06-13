$(document).ready(function ($) {        
    function repeatStringNumTimes(string, times) {
        let i=0, s=''
        while(i<times){
            s = s+ string + ' '
            i= i+1
        }
        return s
    }

    $('.stars').html(repeatStringNumTimes('<i class="fa-solid fa-star" style="color: #e5a50a;"></i>',4));


	// Owl Carousel for Food Items
    $(".owl-food-item").owlCarousel({
		autoplay:3500,
		autoplayHoverPause: true,
		loop: true,
		dots: false,
		nav: false,
		margin: 30,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:3,
			},
			1000:{
				items:3,
			}
		}
	});
    
	var owlFoodSlider = $(".owl-food-item");
	owlFoodSlider.owlCarousel();
	$(".next-btn").click(function () {
		owlFoodSlider.trigger("next.owl.carousel");
	});
	$(".prev-btn").click(function () {
		owlFoodSlider.trigger("prev.owl.carousel");
	});
});