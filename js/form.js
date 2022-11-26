
import {
  isEscapeKey,
  isEnterKey,
} from './util.js';

import {
  initImageListeners,
  resetEffectsValue,
  resetOtherFieldsValue,
  destroyImageListeners,
} from './image-editor.js';

const modal = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const modalBackground = modal.querySelector('.img-upload__overlay');
const imgUploadInput = modal.querySelector('.img-upload__input');
const submitButton = modal.querySelector('.img-upload__submit');
const resetButton = modal.querySelector('.img-upload__cancel');

const pristine = new Pristine(form, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__error-text',
});

const openModal = () => {
  modal.classList.add('modal-open');
  modalBackground.classList.remove('hidden');
  modal.style.overflow = 'hidden';
  initImageListeners();

  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeModal = () => {
  modal.classList.remove('modal-open');
  modalBackground.classList.add('hidden');
  modal.style.overflow = 'auto';
  resetEffectsValue();
  resetOtherFieldsValue();
  destroyImageListeners();

  document.removeEventListener('keydown', onPopupEscKeydown);
};

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

imgUploadInput.addEventListener('change', () => {
  openModal();
});

resetButton.addEventListener('click', () => {
  closeModal();
});

imgUploadInput.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openModal();
  }
});

resetButton.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeModal();
  }
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(evt.target));
      unblockSubmitButton();
    }
  });
};

export {
  closeModal,
  setUserFormSubmit,
};
