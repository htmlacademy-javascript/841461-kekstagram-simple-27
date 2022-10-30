import {
  isEscapeKey,
} from './util.js';

import {
  initScaleHandlers,
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

const effectList = form.querySelector('.effects__list');

const openPictureDialog = () => {
  modal.classList.add('modal-open');
  modalBackground.classList.remove('hidden');
  initScaleHandlers();

  document.addEventListener('keydown', onPopupEscKeydown);
};

const closePictureDialog = () => {
  modal.classList.remove('modal-open');
  modalBackground.classList.add('hidden');
  pictureUploadInput.value = '';
  document.removeEventListener('keydown', onPopupEscKeydown);
};

pictureUploadInput.addEventListener('change', () => {

  openPictureDialog();
});

resetButton.addEventListener('click', () => {

  closePictureDialog();
});

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    closePictureDialog();
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  isStringLengthValid();

});

export {
  modal,
  image,
  scaleResult,
  effectList,
};
