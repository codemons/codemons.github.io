var navbarUpdateColor = function() {
    var o = $(document).scrollTop() / 500;
	if (o > 1.000) { o = 1;}
	var e = $('nav');
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

navbarUpdateColor();

$(document).on('scroll', function (e) { navbarUpdateColor(); });