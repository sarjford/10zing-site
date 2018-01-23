$(document).ready(function(){

  $('#about').click(function(){
    window.location.href="/about";
  });

  $('#contact').click(function(){
    window.location.href="/contact";
  });

  if ($(window).width() < 576) {

    // index
    $('.navigation').before('<img src="/assets/orange_logo.png">');
    // $('.diagonal.section4 .content').after('<img class="climbers-chart-mobile" src="/assets/Climbers_Chart_MobileHome.png">');
    $('.section3 h2').before('<img class="seo-header" src="/assets/seo_h1_mobile.png">');



    $('.navigation li:first-child').click(function(){
      if (!$(this).hasClass('services-expanded')) {
        $('.navigation li').css('padding-bottom', '9px');
        $('header ul ul li').css('color', '#fff');
        $('#services').show();
        $(this).addClass('services-expanded');
      } else {
        $('.navigation li').css('padding-bottom', '20px');
        $('#services').hide();
        $(this).removeClass('services-expanded');
      }
    });

    $('header ul ul li').click(function(){
      $(this).css('color', '#FF8110');
    });

  } else {

    // index
    // $('.diagonal.section4 .content').after('<img class="climbers-img" src="/assets/climbers_fromside.png"><img class="chart-img" src="/assets/chart.png">');
    $('.section3 h2').before('<img src="/assets/orange_key.png">');

    // about
    $('#about-section1').append('<img src="/assets/About_excel_desktop.png">');

    // handler for marketing services nav list
    $('.navigation li:first-child').hover(function(){
      $('#services').show();
      $(this).children('div').addClass('hover-over-services');
      $(this).find('ul').addClass('hover-over-services-ul');

      // marketing services sub-nav
      $('#services li').hover(function(){
        $(this).css('color', '#FF8110');
        $(this).children('div').addClass('underlined');
        $(this).mouseleave(function(){
          $(this).css('color', '#fff');
          $(this).children('div').removeClass('underlined');
        });
      });

      $(this).mouseleave(function(){
        $('#services').hide();
        $(this).children('div').removeClass('hover-over-services');
        $(this).find('ul').removeClass('hover-over-services-ul');
      });
    });
  }


});
