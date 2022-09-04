import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
addStoredDataToTextarea();
const formData = {
  email: '',
  message: '',
};

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);

  evt.currentTarget.reset();
  localStorage.clear();
}

function addStoredDataToTextarea() {
  const dataFromStorage = localStorage.getItem(STORAGE_KEY);
  const parsedDataFromStorage = JSON.parse(dataFromStorage);

  if (parsedDataFromStorage) {
    form.elements.email.value = parsedDataFromStorage.email || '';
    form.elements.message.value = parsedDataFromStorage.message || '';
  }
}
