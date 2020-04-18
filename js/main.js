//! wow анмация
new WOW().init();

//! ibg
function ibg() {
 $.each($('.ibg'), function (index, val) {
  if ($(this).find('img').length > 0) {
   $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
  }
 });
}
ibg();

//! ibg_gr
// function ibg_gr() {
//  $.each($('.ibg_gr'), function (index, val) {
//   if ($(this).find('img').length > 0) {
//    $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
//   }
//  });
// }
// ibg_gr();

//! parallax на класс abg
// $(window).scroll(function (e) {
//  parallax();
// });
// function parallax() {
//  var scrolled = $(window).scrollTop();
//  $('.abg').css('background-position', '0 ' + (220 - scrolled * 0.05) + 'px');
// }

//! Toggle activation
$('.icon-menu').click(function (event) {
 $(this).toggleClass('active');
 $('.header__menu').toggleClass('active');
 $('body').toggleClass('lock');
});

//! Закрытие мобильного меню после выбора ссылки
$('.menu__link, .header-btn').click(function (event) {
 $('.header__menu').removeClass('active');
 $('.icon-menu').removeClass('active');
 $('body').removeClass('lock');
});

//! при скролле к хедеру добавляет и удаляет класс шэдов
$(window).scroll(() => {
 var windowTop = $(window).scrollTop();
 windowTop > 0 ? $('header').addClass('shadow') : $('header').removeClass('shadow');
});

//! при скролле к футеру добавляет и удаляет класс шэдов
// $(window).scroll(() => {
//  var windowScroll = $(document).scrollTop();
//  // var scrollHeight = $(document).outerHeight(true) - $(window).innerHeight();
//  // windowScroll == scrollHeight ? $('footer').addClass('shadow-inner') : $('footer').removeClass('shadow-inner');
//  windowScroll == 0 ? $('footer').removeClass('display') : $('footer').addClass('display');
// });

//! добавление актив класса для меню
jQuery(window).scroll(function () {
 var $sections = $('section');
 $sections.each(function (i, el) {
  var top = $(el).offset().top - 84;
  var bottom = top + $(el).height();
  var scroll = $(window).scrollTop();
  var id = $(el).attr('id');
  if (scroll > top && scroll < bottom) {
   $('a.active').removeClass('active');
   $('a[href="#' + id + '"]').addClass('active');
  }
 })
});

//! скролл до нужной ссылки с отступом
// $('.menu__list').on("click", "a", function (event) {
//  event.preventDefault();
//  var id = $(this).attr('href'),
//   top;
//  top = $(id).offset().top - 67;
//  $('body,html').animate({ scrollTop: top }, 800);
// });

//! по id logo идет скролл на ввекрх
$('#logo').on('click', () => {
 $('html,body').animate({
  scrollTop: 0
 }, 500);
});

//! скролл вверх по ссылке, где двойная заглушка
$('a[href*="##"]').on('click', function (e) {
 $('html,body').animate({
  scrollTop: 0
 }, 500);
 e.preventDefault();
});

//! анимация счетчика чисел
// $(document).ready(function () {
//  var show = true;
//  var countbox = ".count__row";
//  $(window).on("scroll load resize", function () {
//   if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
//   var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
//   var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
//   var w_height = $(window).height(); // Высота окна браузера
//   var d_height = $(document).height(); // Высота всего документа
//   var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
//   if (w_top + 720 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
//    $('.count__count').css('opacity', '1');
//    $('.count__count').spincrement({
//     thousandSeparator: "",
//     duration: 4500
//    });
//    show = false;
//   }
//  });
// });

// ! добавление сортировки на портфолио
// const filterButtons = document.querySelector("#filter-btns").children;
// const items = document.querySelector(".portfolio__gallery").children;
// for (let i = 0; i < filterButtons.length; i++) {
//  filterButtons[i].addEventListener("click", function () {
//   for (let j = 0; j < filterButtons.length; j++) {
//    filterButtons[j].classList.remove("active")
//   }
//   this.classList.add("active");
//   const target = this.getAttribute("data-target")
//   for (let k = 0; k < items.length; k++) {
//    items[k].style.display = "none";
//    if (target == items[k].getAttribute("data-id")) {
//     items[k].style.display = "block";
//    }
//    if (target == "all") {
//     items[k].style.display = "block";
//    }
//   }
//  })
// }

//! удаление классов при определенном расширении
//  $(window).innerWidth(function () {
//  if ($(window).width() <= '576') {
//   const element = document.querySelector('.technology__description')
//   element.classList.remove('animated', 'wow', 'zoomIn');
//  }
// })