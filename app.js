$(function() {

/*FIXED HEADER*/
var header = $("header");
var intro = $("intro");

var currentHeight = $('#intro').innerHeight();
    console.log(currentHeight);

var scrollPos = $(window).scrollTop();
    console.log(scrollPos);


$(window).on("scroll load resize", function(){
    currentHeight = $('#intro').innerHeight();
    scrollPos = $(this).scrollTop();
    if( scrollPos > currentHeight){
        header.addClass("fixed");
    }else{
        header.removeClass("fixed");
    }
});



});
