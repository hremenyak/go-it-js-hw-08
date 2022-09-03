// import throttle from 'lodash.throttle';
console.log('text');

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', onFormInput);

function onFormInput(event) {
  console.log(event);

  localStorage.setItem('feedback-form-state');
}
