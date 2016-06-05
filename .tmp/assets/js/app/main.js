var scrollTop;
var pageHeight; 

$.fn.parallax = function ( resistance, mouse ) {
	$el = $(this);
	TweenLite.set( $el, {
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
//		y : -(( mouse.clientY - (window.innerHeight/4) ) / resistance )
	});
};

var tl = new TimelineMax();

tl.to({}, 20, {})
    .to('.intro', 3, {opacity: 1}, '-=20')
    .to('.intro-finish', 1, {opacity: 1}, '-=17')
    .to('.intro', 1, {opacity: 0}, '-=17')
    .to('.intro-finish', 1, {opacity: 0}, '-=15')
    .to('.title-container>h1', 1, {opacity: 1}, '-=14' )
    .to('.title-container>h2', 1, {opacity: 1}, '-=13')
    .to('#home', 3, {top: '-100%'}, '-=10')
    .to('#accomp', 3, {top: 0}, '-=10')
    .to('#home', 3, {background: 'darkgreen'}, '-=4');

tl.stop();

$(document).mousemove(function(e){
    $('#home-aaron').parallax(250, e);
    $('#accomp-aaron').parallax(50, e);
});
    

$(window).on("scroll", function() {
    pageHeight = $('body').height();
    scrollTop = $(window).scrollTop();
    tl.seek( scrollTop / pageHeight *  20);
});

$('.nav-icon').on('click', function(){
    $('#nav').toggleClass('active');
    $(this).toggleClass('open');
})
