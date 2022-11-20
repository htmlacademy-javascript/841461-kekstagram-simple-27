
import {
  SIZE_STEP,
  CEIL_WIDTH,
  CEIL_FILTER_VALUE,
  effects,
} from './variables.js';

const modal = document.querySelector('body');
const imgUploadInput = modal.querySelector('.img-upload__input');
const userDialog = modal.querySelector('.img-upload__preview-container');
const imageDialog = userDialog.querySelector('.img-upload__preview');
const image = imageDialog.querySelector('img');
const scaleFloorInput = userDialog.querySelector('.scale__control--smaller');
const scaleCeilInput = userDialog.querySelector('.scale__control--bigger');
const scaleResult = userDialog.querySelector('.scale__control--value');
const effectList = modal.querySelector('.effects__list');
const effectListInputs = effectList.querySelectorAll('.effects__radio');
const sliderDialog = modal.querySelector('.img-upload__effect-level');
const sliderElement = modal.querySelector('.effect-level__slider');
const valueElement = modal.querySelector('.effect-level__value');
const inputComment = modal.querySelector('.text__description');

let carrentWidth = CEIL_WIDTH;
valueElement.value = CEIL_FILTER_VALUE;
sliderDialog.style.display = 'none';

const onScaleFloorInput = () => {

  if (carrentWidth > SIZE_STEP || carrentWidth === CEIL_WIDTH) {
    carrentWidth = carrentWidth - SIZE_STEP;
    scaleResult.value = `${carrentWidth}%`;
    image.style.transform = `scale(${carrentWidth / 100})`;
  }
};

const onScaleCeilInput = () => {

  if (carrentWidth < CEIL_WIDTH || carrentWidth === SIZE_STEP) {
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
  start: 100,
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
  if (effectListInputs[1].checked) {
    image.style.filter = `grayscale(${valueElement.value})`;
  } else if (effectListInputs[2].checked) {
    image.style.filter = `sepia(${valueElement.value})`;
  } else if (effectListInputs[3].checked) {
    image.style.filter = `invert(${valueElement.value}%)`;
  } else if (effectListInputs[4].checked) {
    image.style.filter = `blur(${valueElement.value}px)`;
  } else if (effectListInputs[5].checked) {
    image.style.filter = `brightness(${valueElement.value})`;
  }
});

const onEffectChoise = (evt) => {
  for (let i = 0; i < effects.length; i += 1) {
    const effectClassPart = `effects__preview--${effects[i]}`;
    if (evt.target.matches(effects[i])) {
      image.classList.add(effectClassPart);
    }
  }
  onSliderUse(evt);
};

function onSliderUse(evt) {
  if (evt.target.value === 'chrome') {
    sliderDialog.style.display = 'block';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
  }
  if (evt.target.value === 'sepia') {
    sliderDialog.style.display = 'block';
    if (evt.target.checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
    }
  }
  if (evt.target.value === 'marvin') {
    sliderDialog.style.display = 'block';
    if (evt.target.checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        start: 100,
        step: 1,
      });
    }
  }
  if (evt.target.value === 'phobos') {
    sliderDialog.style.display = 'block';
    if (evt.target.checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        start: 3,
        step: 0.1,
      });
    }
  }
  if (evt.target.value === 'heat') {
    sliderDialog.style.display = 'block';
    if (evt.target.checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        start: 3,
        step: 0.1
      });
    }
  }
  if (evt.target.value === 'none') {
    sliderDialog.style.display = 'none';
    image.style.removeProperty('filter');
  }
}

const resetFieldsValue = () => {
  imgUploadInput.value = '';
  inputComment.value = '';
  image.style.transform = 'none';
  carrentWidth = CEIL_WIDTH;
  scaleResult.value = `${CEIL_WIDTH}%`;
  sliderDialog.style.display = 'none';
  image.style.filter = '';
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
  resetFieldsValue,
  destroyImageEffectsListeners,
};
