$(function() {

/*FIXED HEADER*/
var header = $("header");
var intro = $("intro");

var currentHeight = $('#intro').innerHeight();

var scrollPos = $(window).scrollTop();

checkScroll(scrollPos , currentHeight);

    $(window).on("scroll resize", function(){
        currentHeight = $('#intro').innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos , currentHeight);
    });

    function checkScroll(scrollPos , currentHeight){
        if( scrollPos > currentHeight){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }


/*SMOOTH SCROLL*/
$("[data-scroll]").on("click", function(Event){
    Event.preventDefault();

    var elementId = $(this).data('scroll');
    var elementOffset = $(elementId).offset().top;

    $("html, body").animate({
        scrollTop:elementOffset - 60
    }, 700);

});

});
