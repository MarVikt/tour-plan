$(document).ready(function() {
  
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
  
});