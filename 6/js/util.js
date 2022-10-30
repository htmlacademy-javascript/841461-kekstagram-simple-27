
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

export {
  getRandomIntInclusive,
  isEnterKey,
  isEscapeKey,
  isStringLengthValid,
};
