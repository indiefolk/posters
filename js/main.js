$(document).ready(function () {

	var $main = $('.main');

	$main.on('mouseover', function () {
		$main.toggleClass('hover');

	}).on('mouseout', function () {
		$main.toggleClass('hover');
	});

});
