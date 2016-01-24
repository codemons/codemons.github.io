(function ($) {
  $(function () {

    //Initiate WOW JS
    new WOW().init();

    //Navigation
    $('.button-collapse').sideNav();

    //Parrallax Effect
    $('.parallax').parallax();


    $('.scrollspy').scrollSpy();

    $('.slider').slider();

	// Countdown
	$('#counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

  $("#owl-index").owlCarousel({
    autoPlay : 5000,
    stopOnHover : true,
    paginationSpeed : 1000,
    singleItem : true,
    autoHeight : false,
    pagination: false
  });

  var owlWrapperHeight = parseInt($('.owl-wrapper').css('height'),10);
  $('.owl-item').each(function(){
    $(this).css('padding-top',(owlWrapperHeight-parseInt($(this).css('height'), 10))/2 + 'px');
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space
