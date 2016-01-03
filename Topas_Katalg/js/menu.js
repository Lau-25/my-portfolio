$(document).ready(function(){
	var tuoch = $('#touch-menu');
	var menu = $('.l-menu');

	$(tuoch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});