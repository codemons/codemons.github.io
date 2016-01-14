(function ($) {
  $(function () {

		var alertMessageCache = {};
		$('a[href="#alert-info-modal"]').each( function(){
			
			var fragmentName = $(this).attr('data-alert-fragment');
			var $content = $('#alert-info-modal .modal-content')
			
			$(this).leanModal({
				dismissible: true,
				ready: function(args) {
					$content.scrollTop(0)
					if(alertMessageCache[fragmentName]){
						$content.html(alertMessageCache[fragmentName]);
					} else{
						$.get(fragmentName, function( data ) {
						  alertMessageCache[fragmentName] =  data;
						  $content.html(alertMessageCache[fragmentName]);
						});
					}
				}
			});
			
		});

  }); // end of document ready
})(jQuery); // end of jQuery name space
