$(document).ready(function() {
	
	/* ADD NEW CSS FILE */
	
	/*$("head").append("<link id="sitecss" href="css/site320.css" type='text/css' rel='stylesheet' />");*/
	
	/* REPLACE CSS FILE */
	
	/*if ($(window).width() < 980) {
		$("#sitecss").attr('href','css/site320.css');
	} else {
		$("#sitecss").attr('href','css/site.css');
	}*/

	if ($(window).width() < 980) {
		if ($(".sitecss").length == 0) {
			$("head").append("<link class='sitecss' href='css/site320.css' type='text/css' rel='stylesheet' />");
		}
		$(".slider .one-column:nth-child(2)").hide();
	} else {
		$(".sitecss").remove();
		$(".slider .one-column:nth-child(2)").show();
	}
	
	$(window).resize(function() {
		if ($(window).width() < 980) {
			if ($(".sitecss").length == 0) {
				$("head").append("<link class='sitecss' href='css/site320.css' type='text/css' rel='stylesheet' />");
			}
			$(".slider .one-column:nth-child(2)").hide();
		} else {
			$(".sitecss").remove();
			$(".slider .one-column:nth-child(2)").show();
		}
	});
	
	
});