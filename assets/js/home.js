$(document).ready(function() {

	$("#scroll-top").hover(function(){
	    $("#scroll-top").addClass("scroll-top-active");

	    }
	    , function() {
	    	if ($("#scroll-top").hasClass("scroll-top-active")) {
	    		$("#scroll-top").removeClass("scroll-top-active");
	    	}
	    }
	    );

	$("#scroll-top").click(function() {
		// window.scrollTo(0, 0);
		$("a[href='#top']").click(function() {
  			$("html, body").animate({ scrollTop: 0 }, "slow");
  			return false;
		});
	});
});