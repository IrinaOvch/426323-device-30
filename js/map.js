const mapLink = document.querySelector('.contacts__map-link');
const mapModal = document.querySelector('.modal_map');
const closeButton = mapModal.querySelector('.modal__close-button');



mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapModal.classList.add('modal_visible');
});

mapLink.addEventListener('keydown', function(evt) {
  if (evt.code === 'Space') {
  evt.preventDefault();
  mapModal.classList.add('modal_visible');
  }
});

closeButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapModal.classList.remove('modal_visible');
});

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    mapModal.classList.remove('modal_visible');
  }
});
