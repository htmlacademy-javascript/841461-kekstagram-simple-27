import {
  createPictureList,
} from './picture-render.js';

import {
  closeModal,
} from './image-editor.js';

import {
  setUserFormSubmit,
} from './form.js';

import {
  getData,
} from './api.js';

getData((pictures) => {
  createPictureList(pictures);
});

setUserFormSubmit(closeModal());
