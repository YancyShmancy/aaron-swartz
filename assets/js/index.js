var scrollTop;
var pageHeight; 

var tl = new TimelineMax();

tl.to({}, 10, {})
    .to('.header-container>h1', 1, {opacity: 1}, '-=10' )
    .to('.header-container>h2', 1, {opacity: 1}, '-=9')
    .to('#home', 2, {top: '-100%'}, '-=7')
    .to('#accomp', 2, {top: 0}, '-=7')
    .to('#home', 3, {background: 'darkgreen'}, '-=4');

tl.stop();
    

$(window).on("scroll", function() {
    pageHeight = $('body').height();
    scrollTop = $(window).scrollTop();
    
    console.log(pageHeight);
    tl.seek( scrollTop / pageHeight *  10);
    console.log( scrollTop/ pageHeight * 10);
});

