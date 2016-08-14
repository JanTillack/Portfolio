jQuery("document").ready(function($){
	
	var nav = $('.topPage');
		body = $('#body');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 354) {
			nav.addClass("f-nav");
			body.addClass("menu-fixed");
		} else {
			nav.removeClass("f-nav");
			body.removeClass("menu-fixed");
		}
	});

});
