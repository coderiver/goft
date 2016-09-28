$(document).ready(function() {

	// go js
	$('.gallery__thumbs div').click(function(event) {
		newlink = $(this).data('pic');
		$('.gallery__main img').attr('src',newlink);
	});

	$('.js-gallery-thumbs').slick({
		infinite: true,
		slidesToShow: 10,
		slidesToScroll: 1
	});
});