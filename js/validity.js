
import {
  descriptions,
  VALIDCOMMENTLENGTH,
} from './variables.js';

import {
  getRandomIntInclusive,
  isStringLengthValid
} from './util.js';

const commentValid = isStringLengthValid(descriptions[getRandomIntInclusive(0, descriptions.length - 1)], VALIDCOMMENTLENGTH);

export {
  commentValid,
};

