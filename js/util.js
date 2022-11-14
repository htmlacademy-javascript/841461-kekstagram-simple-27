import {
  ALERT_SHOW_TIME,
} from './variables.js';

const getRandomIntInclusive = (min, max) => {
  if (typeof min === 'number' && typeof max === 'number' && min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return NaN;
};

const isStringLengthValid = (currentComment, maxComentLength) => currentComment.length <= maxComentLength;

const isEnterKey = (evt) => evt.key === 'Enter';
const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '15px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.fontStyle = 'bold';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'tomato';
  alertContainer.style.backgroundColor = 'white';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomIntInclusive,
  isEnterKey,
  isEscapeKey,
  isStringLengthValid,
  showAlert,
};
