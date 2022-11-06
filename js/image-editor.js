
import {
  SIZE_STEP,
  CEIL_WIDTH,
  //CEIL_FILTER_VALUE,
} from './variables.js';

import {
  scaleResult,
} from './form.js';

const modal = document.querySelector('body');
const userDialog = modal.querySelector('.img-upload__preview-container');
const imageDialog = userDialog.querySelector('.img-upload__preview');
const image = imageDialog.querySelector('img');
const scaleFloorInput = userDialog.querySelector('.scale__control--smaller');
const scaleCeilInput = userDialog.querySelector('.scale__control--bigger');
const effectList = document.querySelector('.effects__list');
const sliderDialog = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
let carrentWidth = CEIL_WIDTH;
//valueElement.value = CEIL_FILTER_VALUE;

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

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 50,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

const onMarvin = (evt) => {
  if (evt.target.checked) {
    valueElement.value = `invert(${valueElement.value}%)`;
    sliderDialog.style.display = 'block';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      start: 50,
      step: 1,
    });
  }

};

const onPhobos = (evt) => {
  if (evt.target.checked) {
    valueElement.value = `blur(${valueElement.value}px)`;
    sliderDialog.style.display = 'block';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3
      },
      start: 1.5,
      step: 0.1,
    });
  }

};

const onHeat = (evt) => {
  if (evt.target.checked) {
    valueElement.value = `brightness(${valueElement.value})`;
    sliderDialog.style.display = 'block';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      start: 1.5,
      step: 0.1
    });
  }

};

const onChrome = (evt) => {
  if (evt.target.checked) {
    valueElement.value = `grayscale(${valueElement.value})`;
    sliderDialog.style.display = 'block';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 0.5,
      step: 0.1
    });
  }

};

const onSepia = (evt) => {
  if (evt.target.checked) {
    valueElement.value = `sepia(${valueElement.value})`;
    sliderDialog.style.display = 'block';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 0.5,
      step: 0.1
    });
  }

};

const onOriginal = (evt) => {
  if (evt.target.checked) {
    valueElement.value = '';
    sliderDialog.style.display = 'none';
  }
};

const effects = [
  {name: 'none', filter: effectList.addEventListener('change', onOriginal), },
  {name: 'chrome', filter: effectList.addEventListener('change', onChrome), },
  {name: 'sepia', filter: effectList.addEventListener('change', onSepia), },
  {name: 'marvin', filter: effectList.addEventListener('change', onMarvin), },
  {name: 'phobos', filter: effectList.addEventListener('change', onPhobos), },
  {name: 'heat', filter: effectList.addEventListener('change', onHeat), }
];

const onEffectChoise = (evt) => {

  for (let i = 0; i < effects.length; i += 1) {
    const effectClassPart = effects[i].name;
    const effectStyle = effects[i].filter;
    if (evt.target.value === effectClassPart) {
      image.classList.add(`effects__preview--${effectClassPart}`);
      image.style.filter = effectStyle;
    } else {
      image.classList.remove(`effects__preview--${effectClassPart}`);
    }
  }
};

const resetImageCurrentEffects = () => {

  for (let i = 0; i < effects.length; i += 1) {
    const effectClassPart = effects[i];
    if (image.className === `effects__preview--${effectClassPart}`) {
      image.classList.remove(`effects__preview--${effectClassPart}`);
    }
  }
};

const resetImageCurrentScale = () => {

  carrentWidth = CEIL_WIDTH;
  image.style.transform = `scale(${carrentWidth / 100})`;

};

const initImageEffects = () => {

  scaleCeilInput.addEventListener('click', onScaleCeilInput);
  scaleFloorInput.addEventListener('click', onScaleFloorInput);
  effectList.addEventListener('change', onEffectChoise);
  //effectList.addEventListener('change', onEffectIntencityChange);
};

const destroyImageEffectsListeners = () => {

  scaleCeilInput.removeEventListener('click', onScaleCeilInput);
  scaleFloorInput.removeEventListener('click', onScaleFloorInput);
  effectList.removeEventListener('change', onEffectChoise);
  //effectList.removeEventListener('change', onEffectIntencityChange);
};

export {
  initImageEffects,
  destroyImageEffectsListeners,
  resetImageCurrentEffects,
  resetImageCurrentScale,
};
