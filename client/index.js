$(document).ready(function(){

  $('#about').click(function(){
    window.location.href="/about";
  });

  $('#contact').click(function(){
    window.location.href="/contact";
  });

  if ($(window).width() < 576) {

    $('.navigation').before('<img src="/assets/orange_logo.png">');
    $('.diagonal.section4 .content').after('<img class="climbers-chart-mobile" src="/assets/Climbers_Chart_MobileHome.png">');

    $('.navigation li:first-child').click(function(){
      if (!$(this).hasClass('services-expanded')) {
        $('header ul ul li').css('color', '#fff');
        $('#services').show();
        $(this).addClass('services-expanded');
      } else {
        $('#services').hide();
        $(this).removeClass('services-expanded');
      }
    });

    $('header ul ul li').click(function(){
      $(this).css('color', '#FF8110');
    });

  } else {

    $('.diagonal.section4 .content').after('<img class="climbers-img" src="/assets/climbers_fromside.png"><img class="chart-img" src="/assets/chart.png">');
    $('.section5 .content').before('<img src="/assets/climber_lookingout_backdrop.png">');

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
