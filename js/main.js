$(document).ready(function() {

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
    // var modalBody = $('"body"');
    modalOverlay.addClass('modal__overlay_visible');
    modalDialog.addClass('modal__dialog_visible');
    // modalBody.addClass('body_hidden');
    document.body.style.overflow = "hidden";
  };

  closeModalButton.on('click', closeModal);
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    // var modalBody = $('"body"');
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
    // modalBody.removeClass('body_hidden');
    document.body.style.overflow = "auto";
  };

  $(document).on('keydown',function(event) {
    if (event.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      // var modalBody = $('"body"');
      modalOverlay.removeClass('modal__overlay_visible');
      modalDialog.removeClass('modal__dialog_visible');
      // modalBody.removeClass('body_hidden');
      document.body.style.overflow = "auto";
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