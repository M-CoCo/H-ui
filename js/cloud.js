// Cloud Float...
var $main = $cloud = mainwidth = null;
var offset1 = 150;
var offset2 = 250;
var offset3 = 450;
var offsetbg = 0;

$(document).ready(
	function () {
		$main = $("#mainBody");
		$body = $("body");
		$cloud1 = $("#cloud1");
		$cloud2 = $("#cloud2");
		$cloud3 = $("#cloud3");
		mainwidth = $main.outerWidth();  
	}
);

/// 飘动
setInterval(function flutter() {
	if (offset1 >= mainwidth) {
		offset1 =  -580;
	}
	if (offset2 >= mainwidth) {
		 offset2 =  -580;
	}
	if (offset3 >= mainwidth) {
		 offset3 =  -580;
	}
	offset1 += 0.5;
	offset2 += 0.8;
	offset3 += 0.8;
	$cloud1.css("background-position", offset1 + "px 30px")
	$cloud2.css("background-position", offset2 + "px 140px")
	$cloud3.css("background-position", offset3 + "px 50px")
}, 70);

