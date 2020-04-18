if ($('.slider').length > 0) {
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    adaptiveHeight: false,
    autoplaySpeed: 3000,
    accessibility: false,
    nextArrow: '<a type="button" class="slick-prev">НАЗАД</<a>',
    prevArrow: '<a type="button" class="slick-next">ВПЕРЕД</a>',
    responsive: [
      {
        breakpoint: 768,
        settings: {}
      }]
  });
};

// if ($('.galery-slider').length > 0) {
//   $('.galery-slider').slick({
//     infinite: true,
//     autoplay: true,
//     rtl: true,
//     pauseOnHover: true,
//     arrows: false,
//     dots: false,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     autoplaySpeed: 4500,
//     accessibility: false,
//     nextArrow: '<a type="button" class="slick-next">НАЗАД</<a>',
//     prevArrow: '<a type="button" class="slick-prev">ВПЕРЕД</a>',
//     responsive: [
//       {
//         breakpoint: 769,
//         settings: {
//         }
//       }]
//   });
// };




