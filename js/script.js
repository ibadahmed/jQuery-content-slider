$(document).ready(function(){
	// Set Options
	var speed = 500; // Fade Speed
	var autoswitch = true; // Auto Slider Option
	var autoswitch_speed = 4000 // Auto Slider Speed

	// Add Initial Active Class
	$('.slide').first().addClass('active');

	// Hide  All Slides
	$('.slide').hide();

	// Show First Slide
	$('.active').show();

	// Next Button Functionality
	$('#next').on('click', nextSlide);

	// Previous Button Functionality
	$('#prev').on('click', prevSlide);

	// Auto Slider Handler
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);
	}

	// Switch To Next Slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	// Switch To Previous Slide
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

});