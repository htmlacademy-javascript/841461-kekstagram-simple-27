
import {
  isEscapeKey,
} from './util.js';

import {
  initImageEffects,
  resetImageCurrentEffects,
  destroyImageEffectsListeners,
} from './image-editor.js';

import {
  isStringLengthValid,
} from './validity.js';

const modal = document.querySelector('body');
const form = modal.querySelector('.img-upload__form');
const pictureUploadInput = modal.querySelector('.img-upload__input');
const modalBackground = modal.querySelector('.img-upload__overlay');
const pictureDialog = modalBackground.querySelector('.img-upload__wrapper');
const userDialog = pictureDialog.querySelector('.img-upload__preview-container');
const resetButton = userDialog.querySelector('.img-upload__cancel');
//const submitButton = modal.querySelector('.img-upload__submit');

const imageDialog = userDialog.querySelector('.img-upload__preview');
const image = imageDialog.querySelector('img');
const scaleResult = userDialog.querySelector('.scale__control--value');

const openModal = () => {
  modal.classList.add('modal-open');
  modalBackground.classList.remove('hidden');
  initImageEffects();

  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeModal = () => {
  modal.classList.remove('modal-open');
  modalBackground.classList.add('hidden');
  resetImageCurrentEffects();
  destroyImageEffectsListeners();

  document.removeEventListener('keydown', onPopupEscKeydown);
};

pictureUploadInput.addEventListener('change', () => {
  openModal();
});

resetButton.addEventListener('click', () => {

  closeModal();
});

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    closeModal();
    destroyImageEffectsListeners();
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  isStringLengthValid();

});

export {
  modal,
  userDialog,
  image,
  scaleResult,
};
