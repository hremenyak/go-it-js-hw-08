import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {
  email: '',
  message: '',
};

addStoredDataToTextareas();

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

function addStoredDataToTextareas() {
  const dataFromStorage = localStorage.getItem(STORAGE_KEY);
  const parsedDataFromStorage = JSON.parse(dataFromStorage);

  if (parsedDataFromStorage?.email) {
    input.value = parsedDataFromStorage.email;
  }
  if (parsedDataFromStorage?.message) {
    textarea.value = parsedDataFromStorage.message;
  }
  if (parsedDataFromStorage) {
    formData = parsedDataFromStorage;
  }
}
