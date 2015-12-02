$(document).ready(function() {

	//change scroll top button's hover effects
	$("#scroll-top").hover(function(){
	    $("#scroll-top").addClass("scroll-top-active");

	    }
	    , function() {
	    	if ($("#scroll-top").hasClass("scroll-top-active")) {
	    		$("#scroll-top").removeClass("scroll-top-active");
	    	}
	    }
	    );

	//make scroll top button actually scroll to top smoothly
	$("#scroll-top").click(function() {
		// window.scrollTo(0, 0);
		$("a[href='#top']").click(function() {
  			$("html, body").animate({ scrollTop: 0 }, "slow");
  			return false;
		});
	});

	$(window).scroll(function() {
    if ($(window).scrollTop() > 3700) {
    	// $(".interest").css("background", "gray");
    	$("#music-img").css("visibility", "visible");
    	$("#music-img").fadeIn("medium");
    } else {
    	// $(".interest").css("background", "white");
    	$("#music-img").fadeOut("medium");
    }
});
});