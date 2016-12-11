(function ($) {
  $(function () {

      //Materilizecss plugins
      $('.button-collapse').sideNav();
      $('.scrollspy').scrollSpy();

    //Initiate WOW JS
   // new WOW().init();


    $('.slider').slider();

	// Countdown
	/*$('#counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
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
	});*/

	  var navbarUpdateColor = function() {
		  var o = $(document).scrollTop() / 500;
		  if (o > 1.000) { o = 1;}
		  var e = $('.theme-index nav');
          if(e.length){
              var currentColor = e.css('background-color');
              var rgb = currentColor.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
              var newColor = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + o + ')';
              e.attr('style', 'background-color: ' + newColor + ' !important');

              if(o===1){
                  e.removeClass('z-depth-0');
              } else{
                  e.addClass('z-depth-0');
              }
          }

	  };

	  navbarUpdateColor();

	  $(document).on('scroll', function (e) { navbarUpdateColor(); });

  }); // end of document ready
})(jQuery); // end of jQuery name space
