
import {
  closeModal,
  setUserFormSubmit,
} from './form.js';

import {
  createSuccesMessageUpload,
  createErrorMessageUpload,
} from './alerts-render.js';

import {
  sendData,
} from './api.js';

import {
  showFilters,
} from './filter.js';

import './file.js';

showFilters();

setUserFormSubmit(async (data) => {
  await sendData(onSendDataSucces, createErrorMessageUpload, data);
});

function onSendDataSucces() {
  createSuccesMessageUpload();
  closeModal();
}
