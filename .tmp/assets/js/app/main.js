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
    .to('#home-aaron', 1, {opacity: 0.8}, '-=25')
    .to('#home-aaron-bg', 1, {opacity: 0.5}, '-=25')
    .to('.title-container>h1', 1, {opacity: 1}, '-=24' )
    .to('.title-container>h2', 1, {opacity: 1}, '-=23')
    .to('#home', 3, {top: '-100%'}, '-=20')
    .to('#young', 3, {top: 0}, '-=20')
    .to('#young', 3, {top: '-100%'}, '-=17')
    .to('#accomp', 3, {top: 0}, '-=17')
    .to('#jotit', 0.5, {x: 0}, '-=16')
    .to('#atx', 0.5, {x: '-100px'}, '-=15.75')
    .to('#rfc', 0.5, {x: '-150px'}, '-=15.50')
    .to('#rss', 0.5, {x: '-200px'}, '-=15.25')
    .to('#infogami', 0.5, {x: '-150px'}, '-=15')
    .to('#reddit', 0.5, {x: '-100px'}, '-=14.75')
    .to('#webpy', 0.5, {x: 0}, '-=14.50')
    .to('#accomp .content', 1, {opacity: 1}, '-=15')
    .to('#accomp', 3, {top: '-100%'}, '-=13')
    .to('#charges', 3, {top: 0}, '-=13')
    .staggerFrom('.charge-list li', 1, {scale: 0.5, opacity: 0, ease: Elastic.easeOut}, 0.2, '-=10')
    .to('#charges', 3, {top: '-100%'}, '-=8')
    .to('#example', 3, {top: 0}, '-=8');


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

$('li').on('click', function() {
    
    var modal = $(this).attr('modal');
    console.log(modal);
    $('.modal.active').removeClass('active');
    $('#' + modal).addClass('active');
});

$('.modal span.exit').on('click', function() {
    
    $(this).parent().removeClass('active');
})

$('span.prev-modal').on('click', function() {
    $(this).parent().removeClass('active');
    $(this).parent().prev().addClass('active');
})

$('span.next-modal').on('click', function() {
    $(this).parent().removeClass('active');
    $(this).parent().next().addClass('active');
})

