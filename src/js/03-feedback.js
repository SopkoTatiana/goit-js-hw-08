import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

const STORAGE_INPUT_DATA = 'feedback-form-state';
const parsedData = JSON.parse(localStorage.getItem(STORAGE_INPUT_DATA));
const formData = {};

if (parsedData) {
  if (parsedData.email) {
    refs.email.value = parsedData.email;
  }
  if (parsedData.message) {
    refs.message.value = parsedData.message;
  }
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', removeInputData);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_INPUT_DATA, JSON.stringify(formData));
}

function removeInputData(event) {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_INPUT_DATA);
  event.target.reset();
}
