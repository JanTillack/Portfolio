jQuery("document").ready(function($){
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 354) {
			$('.topPage').addClass("f-nav");
			$('#body').addClass("menu-fixed");
		} else {
			$('.topPage').removeClass("f-nav");
			$('#body').removeClass("menu-fixed");
		}
	});

});
