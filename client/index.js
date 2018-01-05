$(document).ready(function(){




  if ($(window).width() < 576) {

  } else {


    // handler for marketing services nav list
    $('.navigation li:first-child').hover(function(){
      $('#services').show();
      $(this).addClass('hover-over-services');

      // marketing services sub-nav
      $('#services li').hover(function(){
        $(this).css('color', '#FF8110');
        $(this).mouseleave(function(){
          $(this).css('color', '#fff');
        });
      });

      $(this).mouseleave(function(){
        $('#services').hide();
        $(this).removeClass('hover-over-services');
      });
    });
  }


});
