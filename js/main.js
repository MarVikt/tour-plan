$(document).ready(function() {

  var hotelSlider = new Swiper('.hotel__photos', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel__photo-button--next',
      prevEl: '.hotel__photo-button--previous',
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
  });
  
  var aboutUsSlider = new Swiper('.about-us__feedback', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.about-us__button--next',
      prevEl: '.about-us__button--previous',
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
  });
  
  document.addEventListener('scroll', event => {
    const
      newsLetter = document.querySelector('.newsletter'),
      { height,  top } = newsLetter.getBoundingClientRect(),
      step = (top + height) / (innerHeight + height),
      // относительная скорость перемещения фона в процентах (от 0 до 100);
      slowing = 60,
      // смещение положения положения фона в процентах 
      shift = 20,
      //     реверс -1 движение фона в противоположную сторону
      reverse = true;
      
      
    if ((top - innerHeight <= 0) && (top + height >= 0))
        newsLetter.style.backgroundPositionY =
          `${(100 - (slowing + shift) * (reverse ? -1 : 1)) % 100 + (step * slowing * (reverse ? -1 : 1))}%`;
  });
  
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




});