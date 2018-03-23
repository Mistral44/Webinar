$(".anchor-wrap").click(function(){
    var idtop = $($(this).attr("href")).offset().top;
    $('html,body').animate({scrollTop: idtop}, 2000);
    return false;
});

$(document).ready(function() {
	clock = new FlipClock($('.clock'), 88, {
		clockFace: 'Counter',
		autoPlay: true,
		autoStart: true,
		countdown: true
	});
});