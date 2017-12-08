$(document).ready(function() {
	var carImgHeight = $('#group1').height();
	var carImgWidth = $('#group1').width();
	console.log(carImgHeight);
	console.log(carImgWidth);
	var imgElement = $('img');
	$.each(imgElement, function(i) {
		imgElement[i].height = carImgHeight;
		imgElement[i].width = carImgWidth;
	});
});
