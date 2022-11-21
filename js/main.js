import {
  RANDOM_FILTERED_QUANTITY,
  TIMEOUT_DELAY,
} from './variables.js';

import {
  getRandomArray,
  sortedByCommentsQuentity,
  debounce,
} from './util.js';

import {
  createPictureList,
} from './picture-render.js';

import {
  closeModal,
  setUserFormSubmit,
} from './form.js';

import {
  createSuccesMessageUpload,
  createErrorMessageUpload,
} from './alerts-render.js';

import {
  getData,
  sendData,
} from './api.js';

import {
  setSortByComments,
  setSortByRandom,
  setSortByDefault,
  showFilters,
} from './filter.js';

import './file.js';

getData( async (pictures) => {

  createPictureList(pictures);
  showFilters();
  setSortByDefault(debounce(() => createPictureList(pictures), TIMEOUT_DELAY));

  setSortByComments(debounce(() => createPictureList(sortedByCommentsQuentity(pictures)), TIMEOUT_DELAY));

  setSortByRandom(debounce(() => createPictureList(getRandomArray(pictures, RANDOM_FILTERED_QUANTITY)), TIMEOUT_DELAY));

});

setUserFormSubmit(async (data) => {
  await sendData(onSendDataSucces, createErrorMessageUpload, data);
});

function onSendDataSucces() {
  createSuccesMessageUpload();
  closeModal();
}
