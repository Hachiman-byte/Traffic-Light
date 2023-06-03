$(document).ready(function(){
	$('.go').click(function(){
		$('.circle1').css("opacity", 1);
		$('.circle2').css("opacity", .2);
		$('.circle3').css("opacity", .2);
	});
	$('.ready').click(function(){
		$('.circle1').css("opacity", .2);
		$('.circle2').css("opacity", 1);
		$('.circle3').css("opacity", .2);
	});
	$('.stop').click(function(){
		$('.circle1').css("opacity", .2);
		$('.circle2').css("opacity", .2);
		$('.circle3').css("opacity", 1);
	});
});