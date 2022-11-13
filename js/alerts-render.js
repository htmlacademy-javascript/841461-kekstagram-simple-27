
import {
  isEscapeKey,
  isEnterKey,
} from './util.js';

const modal = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const alertSuccesFragment = document.createDocumentFragment();
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const alertErrorFragment = document.createDocumentFragment();

const createSuccesMessageUpload = () => {
  const messageElement = successTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.success__inner');
  const messageTitle = messageContainer.querySelector('.success__title');
  messageTitle.textContent = 'Изображение успешно загружено';
  const button = messageContainer.querySelector('.success__button');
  button.textContent = 'Круто!';
  alertSuccesFragment.appendChild(messageElement);
  modal.append('beforeend', alertSuccesFragment);
  delAlert(alertSuccesFragment, button);
};

const createErrorMessageUpload = () => {
  const messageElement = errorTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.success__inner');
  const messageTitle = messageContainer.querySelector('.success__title');
  messageTitle.textContent = 'Ошибка загрузки файла';
  const button = messageContainer.querySelector('.success__button');
  button.textContent = 'Попробовать ещё раз';
  alertErrorFragment.appendChild(messageElement);
  modal.append('beforeend', alertErrorFragment);
  delAlert(alertErrorFragment, button);
};

function delAlert(message, manipulyator) {
  manipulyator.addEventListener('click', () => {
    message.remove();
  });
  document.addEventListener('keydown', onPopupEnterKeydown);
  document.addEventListener('keydown', onPopupEscKeydown);
}

function onPopupEnterKeydown(evt) {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    delAlert();
  }
}

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    delAlert();
  }
}

export {
  createSuccesMessageUpload,
  createErrorMessageUpload,
};
