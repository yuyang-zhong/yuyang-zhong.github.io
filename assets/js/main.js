$(document).ready(function() {	

	/* "Carousel" */
	$('#more-button').click(function() {
  		$('html, body').animate({
  			scrollTop: $('#one').offset().top}
  			, 400);
	});

	$('#d1').click(function() {
  		$('html, body').animate({
  			scrollTop: $('#two').offset().top}
  			, 400);
	});

	$('#d2').click(function() {
  		$('html, body').animate({
  			scrollTop: $('#three').offset().top}
  			, 400);
	});

	$('#u1').click(function() {
  		$('html, body').animate({
  			scrollTop: $('.main').offset().top}
  			, 400);
	});

	$('#u2').click(function() {
  		$('html, body').animate({
  			scrollTop: $('#one').offset().top}
  			, 400);
	});

	$('#u3').click(function() {
  		$('html, body').animate({
  			scrollTop: $('#two').offset().top}
  			, 400);
	});

});