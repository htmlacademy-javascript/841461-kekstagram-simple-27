const LIKESQUENTITYMIN = 15;
const LIKESQUENTITYMAX = 200;
const COMMENTSQUANTITYMIN = 0;
const COMMENTSQUANTITYMAX = 20;
const VALIDCOMMENTLENGTH = 140;
const PHOTOSQUANTITY = 25;

const descriptions = ['Водоём на плоскогорье', 'На тёплом морском берегу', 'На пляж - это туда!', 'Девушка с обложки', 'Странная еда', 'Что-то, похожее на Теслу', 'И это всё?!', 'Выглядит, как морс', 'Поймать самолёт', 'Шкафчик для обуви', 'Море где-то там', 'Вот это - точно Ауди!', 'Сюда б немножко гарнира','Ну, а потом - Суши с котом', 'Домашние сапоги', 'Самое красивое место в мире', 'Жаль, что это не видео', 'Раритет и Олд скулл', 'Удачное изобретение', 'Стандартный отель', 'Полезная еда', 'Морской закат - всегда романтика', 'Зад не видно, поэтому кто, - не понятно', 'Рок концерт, по видимому. Видео в студию!', 'Попал товарищ. Джип не спасёт'];

function getRandomIntInclusive(min, max) {
  if (typeof min === 'number' && typeof max === 'number' && min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return NaN;
};

function getArray(arrayLength) {
  const identities = [];
	  for (let i = 1; i < arrayLength + 1; i += 1) {
      identities.push(i);
    }
  return identities;
};

const indexes = getArray(PHOTOSQUANTITY);

function getUniqueIndex(array) {
  let uniQueId;
  let photos = [];
  let min, current, max = array.length;
    if(max > 0) {
      while(max -= 1) {
        current = getRandomIntInclusive(1, max)
        min = array[current-1];
        array[current-1] = array[max];
        array[max] = min;
      }
    uniQueId = array;
    for (let i = 0; i < uniQueId.length; i+=1) {
      photos.push({
        id: uniQueId[i],
        url: `photos/${uniQueId[i]}.jpg`,
        description: descriptions[getRandomIntInclusive(0, descriptions.length - 1)],
        likesQuantity: getRandomIntInclusive(LIKESQUENTITYMIN, LIKESQUENTITYMAX),
        commentsQuantity: getRandomIntInclusive(COMMENTSQUANTITYMIN, COMMENTSQUANTITYMAX),
      });
    }
    return photos;
  }
}
getUniqueIndex(indexes);

function isStringLengthValid(currentComment, maxComentLength) {
  return currentComment.length <= maxComentLength;
}

isStringLengthValid(descriptions[getRandomIntInclusive(0, descriptions.length - 1)], VALIDCOMMENTLENGTH);

