
import {
  IMAGE_TYPES,
} from './variables.js';

const imageInput = document.querySelector('[type=file]');
const imagePlaceholder = document.querySelector('.placeholder-container__item');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = IMAGE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imagePlaceholder.src = URL.createObjectURL(file);
    imagePlaceholder.classList.add('placeholder-container__item');
  }
});

