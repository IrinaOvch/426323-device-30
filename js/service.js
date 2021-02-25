const serviceButtons = document.querySelectorAll('.services__button');
const services = document.querySelectorAll('.service');




serviceButtons.forEach((button, index) => button.addEventListener('click', function() {
  serviceButtons.forEach(currentButton => currentButton.classList.remove('services__button_active'));
  services.forEach(service => service.classList.remove('service_active'));
  services[index].classList.add('service_active');
  button.classList.add('services__button_active');
}));