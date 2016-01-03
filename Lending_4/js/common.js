$(document).ready(function () {
	$(".paralax").mousemove( function (e){
		var moveX = (e.pageX * -1/40);
		var moveY = (e.pageY * -1/40);
		$(this).css("background-position", moveX + "px " + moveY + "px");
	});

});