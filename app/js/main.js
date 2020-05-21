$(function(){

    $('.header__slider').slick({
        fade: true,
        infinite: true,
        dots: true,
        arrows: true,
    });

    $('.client__slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
    });


    $('.menu__burger-wrapper').click(function(event) {
        $('.menu__burger, .menu__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });


    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3500);
  


    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        mobile:       false,       // default
        live:         true        // default
      }
      );
      wow.init();


    
});