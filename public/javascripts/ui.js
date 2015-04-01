jQuery(document).ready(function($) {
	$('body').stellar();

	$('#mobile-nav-trigger').click(function(){
		console.log("Click...");
		$('#mobile-nav').slideToggle(200);
	});
});