$(document).ready(function(){

  // navigation links
  $('#home').click(function(){
    window.location.href="/";
  });
  $('#about').click(function(){
    window.location.href="/about-us";
  });
  $('#contact').click(function(){
    window.location.href="/contact-us";
  });

  // sub nav
  $('#facebook-link').click(function(){
    window.location.href="/#facebook-advertising";
  });
  $('#paid-link').click(function(){
    window.location.href="/#paid-search-marketing";
  });
  $('#seo-link').click(function(){
    window.location.href="/#seo-keyword-optimization";
  });
  $('#measurement-link').click(function(){
    window.location.href="/#measurement-and-analytics";
  });
  $('#cross-channel-link').click(function(){
    window.location.href="/#cross-channel-marketing-strategy";
  });


  // MOBILE-SPECIFIC JS
  if ($(window).width() < 576) {

    // append h1 image in section 3 on home page
    $('.section3 h2').before('<img class="seo-header" src="/assets/seo_h1_mobile.png">');

    // handler for marketing services nav list
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

    // chrome back button bug
    window.onhashchange = function(event) {
      if (window.location.hash === "") {
        window.scrollTo(0,0);
      }
    }

  // DESKTOP
  } else {

    // append key in section 3 on homepage (alternative to h1 img in mobile)
    $('.section3 h2').before('<img src="/assets/orange_key.png">');
    // excel image only on desktop
    $('#about-section1').append('<img src="/assets/About_excel_desktop.png">');

    $('.sub-nav-wrapper span').click(function(){
      window.location.href="/";
    });

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


  // var $contactForm = $('#contact-form');
  // $contactForm.submit(function(e) {
  // 	e.preventDefault();
  //   $('#message-container').html('');
  //
  // 	$.ajax({
  // 		url: 'https://formspree.io/info@10zingdigital.com',
  // 		method: 'POST',
  //     data: {
  //       Name: $('#contact-form').find("input[name='name']").val(),
  //       Email: $('#contact-form').find("input[name='_replyto']").val(),
  //       Company: $('#contact-form').find("input[name='company']").val(),
  //       Phone: $('#contact-form').find("input[name='phone']").val(),
  //       Message: $('#contact-form').find("textarea[name='message']").val()
  //     },
  //     dataType: 'json',
  //     success: function(data) {
  //       $('#contact-form input').not('.submit').val('');
  //       $('#contact-form textarea').val('');
  //       console.log('success ', data);
  //       $('#message-container').append('<span class="res">Your message has been sent. Thanks for contacting us!</span>');
  // 		},
  // 		error: function(err) {
  //       console.log('error ', err);
  //       $('#message-container').append('<span class="res">Looks like there was an error. Please try again.</span>');
  //     }
  // 	});
  // });

});
