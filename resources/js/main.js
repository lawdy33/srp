
// Slick - Carousel - jumbotron photos //

$(document).ready(function () {

  $('.jumbotron').slick( {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    speed: 4000
  });

// hide navbar //

  var scrollMovement = 0;

  $(window).scroll(function (){
    var scrollAction = $(this).scrollTop();

    if (scrollAction - scrollMovement > 50) {
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: "-" + navHeight}, 150);
      scrollMovement = scrollAction;
    } else if (scrollMovement - scrollAction > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      scrollMovement = scrollAction;
    }
  });
});
