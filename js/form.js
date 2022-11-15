
import {
  isStringLengthValid,
} from './validity.js';

import {
  sendData,
} from './api.js';

import {
  createSuccesMessageUpload,
  createErrorMessageUpload,
} from './alerts-render.js';

const modal = document.querySelector('body');
const form = modal.querySelector('.img-upload__form');
const submitButton = modal.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = isStringLengthValid();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          createSuccesMessageUpload();
          unblockSubmitButton();
        },
        () => {
          createErrorMessageUpload();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {
  setUserFormSubmit,
};
