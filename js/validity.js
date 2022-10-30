import {
  VALIDCOMMENTLENGTH,
} from './variables.js';

const modal = document.querySelector('body');
const commentContainer = modal.querySelector('.text__description');

const isStringLengthValid = (currentComment) => {
  currentComment = commentContainer.textContent;
  return currentComment.length <= VALIDCOMMENTLENGTH;
};

export {
  isStringLengthValid,
};

