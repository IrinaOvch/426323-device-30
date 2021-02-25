const writeUsButton = document.querySelector('.contacts__button');
const feedbackPopup = document.querySelector('.modal_feedback');
const feedbackPopupClose = feedbackPopup.querySelector('.modal__close-button');
const feedbackForm = feedbackPopup.querySelector('.modal__feedback-form');
const usernameInput = feedbackForm.querySelector('.modal__input_type_username');
const emailInput = feedbackForm.querySelector('.modal__input_type_email');
const feedbackInput = feedbackForm.querySelector('.modal__input_user-comment');



let hasStorageSupport = true;
let login = "";
let username = "";

try {
  login = localStorage.getItem('login');
  username = localStorage.getItem('username');
} catch (err) {
  hasStorageSupport = false;
}

function openFeedbackPopup(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('modal_visible');
  usernameInput.focus();
  if (login) {
    emailInput.value = login;
  }
  if (username) {
    usernameInput.value = username;
  }
}

function openFeedbackPopupKeyboard(evt) {
  if (evt.code === 'Space') {
    openFeedbackPopup(evt);
  }
}


writeUsButton.addEventListener('click', openFeedbackPopup);
writeUsButton.addEventListener('keydown', openFeedbackPopupKeyboard);

feedbackPopupClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('modal_visible');
  feedbackPopup.classList.remove('modal_error');
});

feedbackForm.addEventListener('submit', function(evt) {
  if (!feedbackInput.value || !emailInput.value || !usernameInput.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove('modal_error')
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('modal_error');
  } else {
    if (hasStorageSupport) {
      localStorage.setItem('login', emailInput.value);
      localStorage.setItem('username', usernameInput.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    if (feedbackPopup.classList.contains('modal_visible')) {
      evt.preventDefault();
      feedbackPopup.classList.remove('modal_visible');
    }
  }
});

