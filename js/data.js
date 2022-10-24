
import {
  LIKESQUENTITYMIN,
  LIKESQUENTITYMAX,
  COMMENTSQUANTITYMIN,
  COMMENTSQUANTITYMAX,
  PHOTOSQUANTITY,
  descriptions
} from './variables.js';

import {
  getRandomIntInclusive
} from './util.js';

const getArray = (arrayLength) => {
  const identities = [];
  for (let i = 1; i < arrayLength + 1; i += 1) {
    identities.push(i);
  }
  return identities;
};

const indexes = getArray(PHOTOSQUANTITY);

const getPhotosWithUniqueIndex = (array) => {
  let uniQueId;
  const photos = [];
  let min, current, max = array.length;
  if(max > 0) {
    while(max-- > 0) {
      current = getRandomIntInclusive(1, max);
      min = array[current - 1];
      array[current - 1] = array[max];
      array[max] = min;
    }
    uniQueId = array;
    for (let i = 0; i < uniQueId.length; i += 1) {
      photos.push({
        id: uniQueId[i],
        url: `photos/${uniQueId[i]}.jpg`,
        description: descriptions[getRandomIntInclusive(0, descriptions.length - 1)],
        likes: getRandomIntInclusive(LIKESQUENTITYMIN, LIKESQUENTITYMAX),
        comments: getRandomIntInclusive(COMMENTSQUANTITYMIN, COMMENTSQUANTITYMAX),
      });
    }
    return photos;
  }
};

export {
  indexes,
  getPhotosWithUniqueIndex,
};
