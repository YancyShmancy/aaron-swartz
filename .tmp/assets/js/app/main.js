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

tl.to({}, 30, {})
    .to('.intro', 3, {opacity: 1}, '-=30')
    .to('.intro-finish', 1, {opacity: 1}, '-=27')
    .to('.intro', 1, {opacity: 0}, '-=27')
    .to('.intro-finish', 1, {opacity: 0}, '-=25')
    .to('.title-container>h1', 1, {opacity: 1}, '-=24' )
    .to('.title-container>h2', 1, {opacity: 1}, '-=23')
    .to('#home', 3, {top: '-100%'}, '-=20')
    .to('#accomp', 3, {top: 0}, '-=20')
    .to('#jotit', 0.5, {x: 0}, '-=19')
    .to('#atx', 0.5, {x: '-100px'}, '-=18.75')
    .to('#rfc', 0.5, {x: '-150px'}, '-=18.50')
    .to('#rss', 0.5, {x: '-200px'}, '-=18.25')
    .to('#infogami', 0.5, {x: '-150px'}, '-=18')
    .to('#reddit', 0.5, {x: '-100px'}, '-=17.75')
    .to('#webpy', 0.5, {x: 0}, '-=17.50')
    .to('#accomp', 3, {top: '-100%'}, '-=14')
    .to('#charges', 3, {top: 0}, '-=14');

tl.stop();

$(document).mousemove(function(e){
    $('#home-aaron').parallax(50, e);
    $('#accomp-aaron').parallax(50, e);
}); 

$(window).on("scroll", function() {
    pageHeight = $('body').height();
    scrollTop = $(window).scrollTop();
    tl.seek( scrollTop / pageHeight *  30);
});

$('.nav-icon').on('click', function(){
    $('#nav').toggleClass('active');
    $(this).toggleClass('open');
});

$('.accomp-list li').on('click', function() {
    
    $(this).toggleClass('active');
})


