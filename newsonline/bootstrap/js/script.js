// owl carousel
$(document).ready(function() {
    $("#myowl").owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        }
    }
    });
    var owl = $('.owl-carousel');
    // Custom Button
    $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
    });
    $('.customPrevBtn').click(function() {
      owl.trigger('prev.owl.carousel');
    });
  });
  $('.dropdown-item').hover(function() {
    $(this).parent().siblings('a').color="red";
  });