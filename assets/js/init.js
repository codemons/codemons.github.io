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

  }); // end of document ready
})(jQuery); // end of jQuery name space
