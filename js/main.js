const LIKESQUENTITYMIN = 15;
const LIKESQUENTITYMAX = 200;
const COMMENTSQUANTITYMIN = 0;
const COMMENTSQUANTITYMAX = 20;
const VALIDCOMMENTLENGTH = 140;
const PHOTOSQUANTITY = 25;

const IDENTITIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 , 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const DESCRIPTIONS = ['Водоём на плоскогорье', 'На тёплом морском берегу', 'На пляж - это туда!', 'Девушка с обложки', 'Странная еда', 'Что-то, похожее на Теслу', 'И это всё?!', 'Выглядит, как морс', 'Поймать самолёт', 'Шкафчик для обуви', 'Море где-то там', 'Вот это - точно Ауди!', 'Сюда б немножко гарнира','Ну, а потом - Суши с котом', 'Домашние сапоги', 'Самое красивое место в мире', 'Жаль, что это не видео', 'Раритет и Олд скулл', 'Удачное изобретение', 'Стандартный отель', 'Полезная еда', 'Морской закат - всегда романтика', 'Зад не видно, поэтому кто, - не понятно', 'Рок концерт, по видимому. Видео в студию!', 'Попал товарищ. Джип не спасёт'];

function getRandomIntInclusive(min, max) {
  if (typeof min === 'number' && typeof max === 'number' && min >= 0 && max >=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return NaN;
};

function isStringLengthValid(currentComment, maxComentLength) {
  return currentComment.length <= maxComentLength;
}
isStringLengthValid(DESCRIPTIONS[getRandomIntInclusive(0, DESCRIPTIONS.length - 1)], VALIDCOMMENTLENGTH);

const createPhotoConstructor = () => ({
  id: IDENTITIES[getRandomIntInclusive(0, IDENTITIES.length - 1)],
  url: `photos/${IDENTITIES[getRandomIntInclusive(0, IDENTITIES.length - 1)]}.jpg`,
  description: DESCRIPTIONS[getRandomIntInclusive(0, DESCRIPTIONS.length - 1)],
  likesQuantity: getRandomIntInclusive(LIKESQUENTITYMIN, LIKESQUENTITYMAX),
  commentsQuantity: getRandomIntInclusive(COMMENTSQUANTITYMIN, COMMENTSQUANTITYMAX),
});

const photoConstructor = Array.from({length: PHOTOSQUANTITY}, createPhotoConstructor);
