const sliderButtons = document.querySelectorAll('.popular-items__slider-control');
const slides = document.querySelectorAll('.popular-item');




sliderButtons.forEach((button, index) => button.addEventListener('click', function() {
  sliderButtons.forEach(currentButton => currentButton.classList.remove('popular-items__slider-control_current'));
  slides.forEach(slide => slide.classList.remove('popular-item_current'));
  slides[index].classList.add('popular-item_current');
  button.classList.add('popular-items__slider-control_current');
}));