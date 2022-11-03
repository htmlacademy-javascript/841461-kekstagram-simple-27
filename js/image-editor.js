
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

const initScaleHandlers = () => {
  let carrentWidth = CEIL_WIDTH;
  scaleFloorInput.addEventListener('click', () => {

    if (carrentWidth > SIZE_STEP || carrentWidth === CEIL_WIDTH) {
      carrentWidth = carrentWidth - SIZE_STEP;
      scaleResult.value = `${carrentWidth}%`;
      image.style.transform = `scale(${carrentWidth / 100})`;
    }
  });

  scaleCeilInput.addEventListener('click', () => {

    if ((carrentWidth + SIZE_STEP) <= CEIL_WIDTH || carrentWidth === SIZE_STEP) {
      carrentWidth = carrentWidth + SIZE_STEP;
      scaleResult.value = `${carrentWidth}%`;
      image.style.transform = `scale(${carrentWidth / 100})`;
    }
  });
};

const effectList = document.querySelector('.effects__list');

//const effects = Array.from(effectList.querySelectorAll('.effects__preview'));

const initEffectHandler = () => {

  effectList.addEventListener('change', (evt) => {
    for (let i = 0; i < effects.length; i += 1) {
      const classOfimage = effects[i];
      if (evt.target.checked && evt.target.classList.contains(effects[i])) {
        image.classList.add(classOfimage);
      }
    }
  });
};

export {
  initScaleHandlers,
  initEffectHandler,
};
