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

tl.to({}, 60, {})
    .to('.intro-finish', 1, {opacity: 1}, '-=59')
    .to('.intro', 1, {opacity: 0}, '-=58')
    .to('.intro-finish', 1, {opacity: 0}, '-=56')
    .to('#home-aaron', 1, {opacity: 0.8}, '-=55')
    .to('#home-aaron-bg', 1, {opacity: 0.5}, '-=55')
    .to('.title-container>h1', 1, {opacity: 1}, '-=54' )
    .to('.title-container>h2', 1, {opacity: 1}, '-=53')
    .to('#home', 3, {top: '-100%'}, '-=50')
    .to('#young', 3, {top: 0}, '-=50')
    .staggerFrom('.young-list li', 1, {scale: 0.5, opacity: 0, ease: Elastic.easeOut}, 0.2, '-=47')
    .to('#young', 3, {top: '-100%'}, '-=44')
    .to('#accomp', 3, {top: 0}, '-=44')
    .to('#jotit', 0.5, {x: 0}, '-=43')
    .to('#atx', 0.5, {x: '-100px'}, '-=42.75')
    .to('#rfc', 0.5, {x: '-150px'}, '-=42.50')
    .to('#rss', 0.5, {x: '-200px'}, '-=42.25')
    .to('#infogami', 0.5, {x: '-150px'}, '-=42')
    .to('#reddit', 0.5, {x: '-100px'}, '-=41.75')
    .to('#webpy', 0.5, {x: 0}, '-=41.50')
    .to('#accomp .content', 1, {opacity: 1}, '-=41')
    .to('#accomp', 3, {top: '-100%'}, '-=40')
    .to('#charges', 3, {top: 0}, '-=40')
    .staggerFrom('.charge-list li', 1, {scale: 0.5, opacity: 0, ease: Elastic.easeOut}, 0.2, '-=37')
    .to('#charges', 3, {top: '-100%'}, '-=35')
    .to('#example', 3, {top: 0}, '-=35')
    .to('#example-text', 1, {opacity: 0}, '-=31')
    .to('#spying', 0.5, {x: '-50px'}, '-=31')
    .to('#cfac', 0.5, {x: '-100px'}, '-=30.75')
    .to('#pros', 0.5, {x: '-150px'}, '-=30.50')
    .to('#obama', 0.5, {x: '-200px'}, '-=30.25')
    .to('#super', 0.5, {x: '-150px'}, '-=30')
    .to('#legal', 0.5, {x: '-100px'}, '-=29.75')
    .to('#secrecy', 0.5, {x: '-50px'}, '-=29.50')
    .to('#example', 3, {top: '-100%'}, '-=26')
    .to('#sopa', 3, {top: 0}, '-=26')
    .to('#sopa-text', 1.5, {x: 0, opacity: 1}, '-=24')
    .to('#sopa-text', 1.5, {x: '-20%', opacity: 0}, '-=21')
    .to('#sopa .content', 1.5, {x: 0, opacity: 1}, '-=20.5')
    .to('#sopa', 3, {top: '-100%'}, '-=18')
    .to('#closing', 3, {top: 0}, '-=18')
    .to('#closing-text', 1.5, {y: 0, opacity: 1}, '-=15')
    .staggerFrom('.closing-list li', 1, {scale: 0.5, opacity: 0, ease: Elastic.easeOut}, 0.2, '-=14')
    
    

tl.stop();

$(document).mousemove(function(e){
    $('#home-aaron').parallax(50, e);
    $('#accomp-aaron').parallax(50, e);
});

$(window).on("scroll", function() {
    pageHeight = $('body').height();
    scrollTop = $(window).scrollTop();
    tl.seek( scrollTop / pageHeight *  60);
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

$('.nav-list li').on('click', function() {
    $('#nav').removeClass('active');
    $('.nav-icon').removeClass('open');
})

$('#nav-home').on('click', function() {
    tl.seek(0);
})

$('#nav-youth').on('click', function() {
    tl.seek(13);
})

$('#nav-accomp').on('click', function() {
    tl.seek(17);
})

$('#nav-sopa').on('click', function() {
    tl.seek(36);
})

$('#nav-closing').on('click', function() {
    tl.seek(45);
})

