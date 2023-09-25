//ドロワーメニュー
jQuery(function ($) {
$('.js-hamburger').on('click', function () {
  if ($('.js-hamburger').hasClass('is-open')) {
    $('.js-drawer-menu').fadeOut();
    $(this).removeClass('is-open');
  } else {
    $('.js-drawer-menu').fadeIn();
    $(this).addClass('is-open');
  }
});

$('.js-drawer-menu a').on('click',function() {
  $('.js-drawer-menu').fadeOut();
  $('.js-hamburger').removeClass('is-open');
});
});
  

//スライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 0,
		disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
  },
	spaceBetween: 20,
  slidesPerView:3,
  loopedSlides: 6,
  speed: 6000,
  allowTouchMove: false, // スワイプ無効,
  breakpoints: {
    768: {
      slidesPerView: 6,
    }
  },
});
