
import {
  SIZE_STEP,
  CEIL_WIDTH,
  EFFECTS
} from './variables.js';

import {
  image,
  scaleResult,
  effectList,
} from './form.js';

const modal = document.querySelector('body');
const modalBackground = modal.querySelector('.img-upload__overlay');
const pictureDialog = modalBackground.querySelector('.img-upload__wrapper');
const userDialog = pictureDialog.querySelector('.img-upload__preview-container');
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

const initEffectHandlers = () => {
  effectList.addEventListener('click', (evt) => {
    for (let i = 0; i < EFFECTS.length; i += 1) {
      const effect = EFFECTS[i].value;
      if (evt.target.checked) {
        image.classList.add(effect);
      }
    }
  });
};

export {
  initScaleHandlers,
  initEffectHandlers,
};
