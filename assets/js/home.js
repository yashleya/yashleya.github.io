$(document).ready(function() {

	// var waypoint = new Waypoint({
	//   	element: document.getElementById('music'),
	//   	handler: function() {
	//     	notify('Basic waypoint triggered')
	//   	},
	//   	// offset: 200%
	// });

	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#volleyball"})
					// trigger a velocity opaticy animation
					// .setVelocity("#volleyball-caption", {opacity: 0.5}, {duration: 400})
					.setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5})
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	// $("#volleyball-caption").click(function() {
	// 	if ($("#volleyball-caption").hasClass("volleyball-caption-active")) {
	// 		$("#volleyball-caption").removeClass("volleyball-caption-active");
	// 	} else {
	// 		$("#volleyball-caption").addClass("volleyball-caption-active");
	// 	}
	// });
});