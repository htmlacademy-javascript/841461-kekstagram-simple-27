
import {
  showAlert,
} from './util.js';

import {
  createSuccesMessageUpload,
  createErrorMessageUpload,
} from './alerts-render.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showAlert('Что-то пошло не так! Перезагрузите страницу');
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        createSuccesMessageUpload();
      } else {
        onFail();
        createErrorMessageUpload();
      }
    })
    .catch(() => {
      onFail();
      createErrorMessageUpload();
    });
};

export {
  getData,
  sendData,
};
