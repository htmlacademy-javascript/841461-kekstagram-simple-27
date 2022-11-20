import {
  createPictureList,
  showFilters,
  setSortByRandom,
  setSortByComments,
  setSortByDefault,
} from './picture-render.js';

import {
  closeModal,
} from './form.js';

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

getData( async (pictures) => {
  createPictureList(pictures);
  showFilters();
  setSortByRandom(pictures);
  setSortByComments(pictures);
  setSortByDefault(pictures);
});

setUserFormSubmit(async (data) => {
  await sendData(onSendDataSucces, createErrorMessageUpload, data);
});

function onSendDataSucces() {
  createSuccesMessageUpload();
  closeModal();
}
