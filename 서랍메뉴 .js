$(function(){
  var $aside = $('.page-main'),
      $button = $('aside button'),
      $duration = 300;

      $button.click(function(){
        $aside.animate({left:'0px'},$duration);
      });


      
      $button.click(function(){
        $aside.toggleClass('open');
        if($aside.hasClass('open')){
          $aside.stop().animate({left:'0px'},$duration);

        }else{
           $aside.stop().animate({left:'-350px'},$duration);

        }
      });

});