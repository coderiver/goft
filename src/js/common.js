$(document).ready(function() {

	var gallery = $('.js-gallery-main'),
		gallerySlide = gallery.find('.g-slide'),
		galleryThumb = $('.js-gallery-thumb'),
		galleryModal = $('.js-gallery-modal'),
		galleryLarge = $('.js-gallery-large'),
		galleryCounter = $('.js-gallery-counter'),
		buttonClose = $('.js-close'),
		body = $('body');

	if (galleryModal.length) {
		var clones = gallery.html();

		galleryLarge.html(clones);

		galleryLarge.slick({
			infinite: false,
			prevArrow: '.js-gallery-prev',
			nextArrow: '.js-gallery-next',
			fade: true
		});

		galleryLarge.on('beforeChange', function(e, slick, current, next) {
			galleryCounter.text(next + 1);
		});

		// galleryLarge.slick('slickGoTo', index);
	}

	gallery.slick({
		arrows: false,
		fade: true
	});

	galleryThumb.click(function() {
		var that = $(this);
		var index = that.index();

		gallery.slick("slickGoTo", index);
	});

	gallerySlide.click(function(){
		var that = $(this);
		var index = that.index();
		
		galleryCounter.text(index + 1);
		galleryLarge.slick('slickGoTo', index);

		if(!galleryModal.hasClass('is-open')) {
			galleryModal.addClass('is-open');
			body.addClass('is-hidden');
		}

	});

	buttonClose.click(function() {
		galleryModal.removeClass('is-open');
		body.removeClass('is-hidden');
	})

});