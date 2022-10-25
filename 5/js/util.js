
const getRandomIntInclusive = (min, max) => {
  if (typeof min === 'number' && typeof max === 'number' && min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return NaN;
};

const isStringLengthValid = (currentComment, maxComentLength) => currentComment.length <= maxComentLength;

export {
  getRandomIntInclusive,
  isStringLengthValid,
};
