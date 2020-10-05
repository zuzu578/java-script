$(function(){
 $('.main-1-logo-image').hover(function(){
 $(this).animate({opacity:0},1500, 'easeInOutElastic',
 function(){
    $(this).animate({opacity:1},10)
 });
});
});