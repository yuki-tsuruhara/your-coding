// スライダー
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: true,
  },
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    897: {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 20,
    },
    481: {
        slidesPerView: 3,
        centeredSlides: true,
    },
},
});

// グーグルフォーム

$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_utf5m5JIiB0ftVRTYDYgP7hBvc_67w7UzS63jnHtwe1bjw/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});

// アコーディオンメニュー

$(function(){
  $(".open").show();
  $('.js-menu-ttl').each(function(){
      $(this).on('click',function(){
          $("+.submenu",this).slideToggle();
          return false;
      });
  });
});

ScrollReveal().reveal('.back', { 
  duration: 1600, 
  scale: 0.1,
  reset: true
});

ScrollReveal().reveal('.fadeIn', { 
  duration: 1600, 
  viewFactor: 0.1,
  origin: 'bottom', 
  distance: '50px',
  reset: true   
});

// ハンバーガーメニュー

function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// スムーズスクロール

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});