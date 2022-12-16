import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const formData = {};

const onFormData = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onSubmitForm = event => {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('[name="email"]');
  const message = document.querySelector('[name="message"]');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);
