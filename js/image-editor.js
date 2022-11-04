
import {
  SIZE_STEP,
  CEIL_WIDTH,
  effects
} from './variables.js';

import {
  image,
  scaleResult,
} from './form.js';

const modal = document.querySelector('body');
const modalBackground = modal.querySelector('.img-upload__overlay');
const pictureDialog = modalBackground.querySelector('.img-upload__wrapper');
const userDialog = pictureDialog.querySelector('.img-upload__preview-container');
//const imageDialog = userDialog.querySelector('.img-upload__preview');
const scaleFloorInput = userDialog.querySelector('.scale__control--smaller');
const scaleCeilInput = userDialog.querySelector('.scale__control--bigger');
const effectList = document.querySelector('.effects__list');

let carrentWidth = CEIL_WIDTH;
const onScaleFloorInput = () => {

  if (carrentWidth > SIZE_STEP || carrentWidth === CEIL_WIDTH) {
    carrentWidth = carrentWidth - SIZE_STEP;
    scaleResult.value = `${carrentWidth}%`;
    image.style.transform = `scale(${carrentWidth / 100})`;
  }
};

const onScaleCeilInput = () => {

  if ((carrentWidth + SIZE_STEP) <= CEIL_WIDTH || carrentWidth === SIZE_STEP) {
    carrentWidth = carrentWidth + SIZE_STEP;
    scaleResult.value = `${carrentWidth}%`;
    image.style.transform = `scale(${carrentWidth / 100})`;
  }
};

const onEffectChoise = (evt) => {

  for (let i = 0; i < effects.length; i += 1) {
    const effectClassPart = effects[i];
    if (evt.target.value === effectClassPart) {
      image.classList.add(`effects__preview--${effectClassPart}`);
    } else {
      image.classList.remove(`effects__preview--${effectClassPart}`);
    }
  }
};

const resetImageCurrentEffects = (evt) => {

  for (let i = 0; i < effects.length; i += 1) {
    const effectClassPart = effects[i];
    if (evt.target.value === effectClassPart) {
      image.classList.remove(`effects__preview--${effectClassPart}`);
    }
  }
  image.style.transform = carrentWidth;
};


const initImageEffects = () => {

  scaleCeilInput.addEventListener('click', onScaleCeilInput);
  scaleFloorInput.addEventListener('click', onScaleFloorInput);
  effectList.addEventListener('change', onEffectChoise);

};

const destroyImageEffectsListeners = () => {

  scaleCeilInput.removeEventListener('click', onScaleCeilInput);
  scaleFloorInput.removeEventListener('click', onScaleFloorInput);
  effectList.removeEventListener('change', onEffectChoise);

};


export {
  initImageEffects,
  destroyImageEffectsListeners,
  resetImageCurrentEffects,
};
