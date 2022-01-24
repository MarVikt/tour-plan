const hotelSlider = new Swiper('.hotel__photos', {
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