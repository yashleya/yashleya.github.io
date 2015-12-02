$(document).ready(function() {

	$(".sidebar-item").hover(function() {
		if ($(this).hasClass("selected")) {
			//do noth ing
		} else {
			$(this).css("background", "#97dadd");
		}
	}, function() {
		if ($(this).hasClass("selected")) {
			$(this).css("background", "#white");
		} else {
			$(this).css("background", "#84d3d6");
		}
	});
});