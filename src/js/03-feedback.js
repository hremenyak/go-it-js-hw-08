import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  console.log(event);

  localStorage.setItem('feedback-form-state');
}
