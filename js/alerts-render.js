
import {
  isEscapeKey,
  isEnterKey,
} from './util.js';

const modal = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const alertSuccessFragment = document.createDocumentFragment();
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const alertErrorFragment = document.createDocumentFragment();

const createSuccesMessageUpload = () => {
  const messageElement = successTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.success__inner');
  document.addEventListener('keydown', onPopupEnterKeydown);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onOverlayClick);
  messageElement.querySelector('.success__button').addEventListener('click', onHideAlertButtonClick);
  messageElement.appendChild(messageContainer);
  alertSuccessFragment.appendChild(messageElement);
  modal.append(alertSuccessFragment);
  modal.style.overflow = 'hidden';
};

const createErrorMessageUpload = () => {
  const messageElement = errorTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.error__inner');
  document.addEventListener('keydown', onPopupEnterKeydown);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onOverlayClick);
  messageElement.querySelector('.error__button').addEventListener('click', onHideAlertButtonClick);
  messageElement.appendChild(messageContainer);
  alertErrorFragment.appendChild(messageElement);
  modal.append(alertErrorFragment);
};

function onHideAlertButtonClick() {
  hideAlert();
}

function onPopupEnterKeydown(evt) {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    hideAlert();
  }
}

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideAlert();
  }
}

function onOverlayClick() {
  hideAlert();
}

function hideAlert() {
  const alertMessage = document.querySelector('.success') || document.querySelector('.error');
  modal.removeChild(alertMessage);
  document.removeEventListener('keydown', onPopupEnterKeydown);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onOverlayClick);
}

export {
  createSuccesMessageUpload,
  createErrorMessageUpload,
};
