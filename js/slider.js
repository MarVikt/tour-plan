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

});