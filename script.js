

$( document ).ready(function() {
    var $developmentWrapper = $('.development-wrapper');
    var developmentIsVisible = false;
  $(window).scroll( function(){
    var bottom_of_window = $(window).scrollTop() + $(window).height(); 
      $('.academic .content .hidden').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          if( bottom_of_window > bottom_of_object ){
            $(this).animate({
              'opacity':'1',
              'margin-left': '0'
            },600);
          }
      });
	  })
	}); 
