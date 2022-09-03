// navbar scrolling
$(window).scroll(function(){
var scrolling = $(window).scrollTop();

if(scrolling > 20){
  $('.menu_bg').addClass('bg')
}
else{
  $('.menu_bg').removeClass('bg')
};


});





// slider  
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
  dots: false,
  rewind: true,
  autoplay: true,
  // autoplayTimeout: 1000,
  // autoplayHoverPause: true,
  checkVisible: false,
  animateOut: 'fadeOut',
  smartSpeed: 2000,
  // dots: true,
  // loop: true,
  // items:1,
  // responsive: {
  // 0:{
  //     items:1
  // },
  // 576:{
  //     items:1
  // },
  // 768:{
  //     items:2
  // },
  // 992:{
  //     items:3
  // }
  // }
});
// slider  
// preloader
$(window).load(function () {
  $('#preloader').delay(300).fadeOut()
})
// preloader
// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back2top').fadeIn('slow');
  } else {
    $('.back2top').fadeOut('slow');
  }
});
// $('.back-to-top').click(function () {
//     $('html, body').animate({scrollTop: 0}, 2500, 'easeInOutExpo');
//     return false;
// });

// back2top
// slider service 

$('.service_slide').slick({
  smartSpeed: 2000,
  loop: true,
  autoplay: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  nav: true,
  vertical: true,
  nextArrow: '<i class="fas fa-arrow-down  next"></i>',
  prevArrow: '<i class="fas fa-arrow-up prev"></i>',
  // navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '0px',
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
});
// slider  service
// slider testimonial 


$('.testi_text_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // fade: true,
  vertical: true,
  asNavFor: '.testi_img_slide'
});
$('.testi_img_slide').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  nav: true,
  vertical: true,
  nextArrow: '<i class="fas fa-arrow-down  next"></i>',
  prevArrow: '<i class="fas fa-arrow-up prev"></i>',
  slidesToScroll: 1,
  asNavFor: '.testi_text_slide',
  dots: false,
  smartSpeed: 2000,
  autoplay: true,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',

});
// slider  testimonial
// counter  
window.onload = () => {
  $(".counter_1").countMe(10, 65);
  $(".counter_2").countMe(10, 65);
  $(".counter_3").countMe(0, 0);
  $(".counter_4").countMe(10, 65);
  $(".counter_5").countMe(10, 65);
}
// counter  

$('.partner_main').slick({
  arrows: false,
  smartSpeed: 2000,
  loop: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  // nav:true,
  // nextArrow:'<i class="fas fa-arrow-right  next"></i>',
  // prevArrow:'<i class="fas fa-arrow-left prev"></i>'
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
      }
    }
  ],
});
// slider  service