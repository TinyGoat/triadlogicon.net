jQuery(document).ready(function($) {
	$('body').stellar();

	$('#mobile-nav-trigger').click(function(){
		$('#menu').fadeToggle();
		$('#close').fadeToggle();
		$('#mobile-nav').fadeToggle(300);
	});
});