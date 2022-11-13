
import {
  isEscapeKey,
  isEnterKey,
} from './util.js';

import {
  initImageEffects,
  resetFieldsValue,
  destroyImageEffectsListeners,
} from './image-editor.js';

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
const pictureUploadInput = modal.querySelector('.img-upload__input');
const modalBackground = modal.querySelector('.img-upload__overlay');
const resetButton = modal.querySelector('.img-upload__cancel');
const submitButton = modal.querySelector('.img-upload__submit');

const openModal = () => {
  modal.classList.add('modal-open');
  modalBackground.classList.remove('hidden');
  initImageEffects();

  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeModal = () => {
  modal.classList.remove('modal-open');
  modalBackground.classList.add('hidden');
  destroyImageEffectsListeners();
  resetFieldsValue();

  document.removeEventListener('keydown', onPopupEscKeydown);
};

pictureUploadInput.addEventListener('change', () => {
  openModal();
});

resetButton.addEventListener('click', () => {
  closeModal();
});

submitButton.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeModal();
  }
});

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = isStringLengthValid();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
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
  openModal,
  closeModal,
  setUserFormSubmit,
};
