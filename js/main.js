$(document).ready(function() {

  // var hotelSlider = new Swiper('.hotel__photos', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.hotel__photo-button--next',
  //     prevEl: '.hotel__photo-button--previous',
  //   },
  
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },
    
  // });
  
  // var aboutUsSlider = new Swiper('.about-us__feedback', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.about-us__button--next',
  //     prevEl: '.about-us__button--previous',
  //   },
  
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },
    
  // });
  
  // parallax
  // document.addEventListener('scroll', event => {
  //   const
  //     newsLetter = document.querySelector('.newsletter'),
  //     { height,  top } = newsLetter.getBoundingClientRect(),
  //     step = (top + height) / (innerHeight + height),
  //     // относительная скорость перемещения фона в процентах (от 0 до 100);
  //     slowing = 60,
  //     // смещение положения положения фона в процентах 
  //     shift = 20,
  //     //     реверс -1 движение фона в противоположную сторону
  //     reverse = true;
      
      
  //   if ((top - innerHeight <= 0) && (top + height >= 0))
  //       newsLetter.style.backgroundPositionY =
  //         `${(100 - (slowing + shift) * (reverse ? -1 : 1)) % 100 + (step * slowing * (reverse ? -1 : 1))}%`;
  // });
  
  var menuButton = document.querySelector(".menu-mobile");
    menuButton.addEventListener('click', function() {
    console.log("клик по кнопке мобильного меню");
    document.querySelector(".nav").classList.toggle('nav__mobile--visible');
  
  });

  var closeModalButton = $(".modal__close");
  var openModalButton = $('[data-toggle=modal-booking]');
  // var modalButton = document.querySelector("data-toggle");
  console.log(openModalButton);
  openModalButton.on('click', openModal);
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay_visible');
    modalDialog.addClass('modal__dialog_visible');
  };

  closeModalButton.on('click', closeModal);
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
  };

  $(document).on('keydown',function(event) {
    if (event.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass('modal__overlay_visible');
      modalDialog.removeClass('modal__dialog_visible');
       }
  });

// валидация форм
$(".newsletter__bar").validate({
  errorClass: "invalid",
  messages: {
    newsletterMail: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  }
});

$(".modal__send-form").validate({
  errorClass: "invalid",
  messages: {
    modal_send_name: {
      required: "Please specify your name",
      minlength: "The name must contain at least 2 characters"
    },
    modal_send_phone: "Please specify your phone +_(___)___-__-__",
    modal_send_mail: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  }
});

$(".footer__send-form").validate({
    errorClass: "invalid",
    messages: {
      send_name: {
        required: "Please specify your name",
        minlength: "The name must contain at least 2 characters"
      },
      send_phone: "Please specify your phone +_(___)___-__-__",
    }
  });

// номер телефона по маске
$('.footer__send-phone').mask('+0(000)000-00-00', {
  'translation': {0: {pattern: /[0-9]/}}
});
$('.modal__send-phone').mask('+0(000)000-00-00', {
  'translation': {0: {pattern: /[0-9]/}}
});
// $('.footer__send-phone').mask('+0(000)000-00-00', {
//   'translation': {0: {pattern: /[0-9*]/}},
//   placeholder: "+_(___)___-__-__"
// });


});