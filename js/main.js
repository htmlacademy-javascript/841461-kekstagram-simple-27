import {
  createPictureList,
  compareElements,
} from './picture-render.js';

import {
  closeModal,
} from './form.js';

import {
  showFilters,
  setfilterComments,
  setfilterRandom,
} from './filter.js';

import {
  createSuccesMessageUpload,
  createErrorMessageUpload,
} from './alerts-render.js';

import {
  setUserFormSubmit,
} from './form.js';

import {
  getData,
  sendData,
} from './api.js';

import './file.js';

import {
  getRandomArrayElement,
} from './util.js';

getData( async (pictures) => {
  //createPictureList(pictures);
  showFilters();
  setfilterComments(() => compareElements(createPictureList(pictures)));
  setfilterRandom(() => getRandomArrayElement(createPictureList(pictures)).slice(0, 10));
});

setUserFormSubmit(async (data) => {
  await sendData(onSendDataSucces, createErrorMessageUpload, data);
});

function onSendDataSucces() {
  createSuccesMessageUpload();
  closeModal();
}
