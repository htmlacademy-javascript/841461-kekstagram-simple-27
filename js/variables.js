const LIKESQUENTITYMIN = 15;
const LIKESQUENTITYMAX = 200;
const COMMENTSQUANTITYMIN = 0;
const COMMENTSQUANTITYMAX = 20;
const VALIDCOMMENTLENGTH = 140;
const PHOTOSQUANTITY = 25;

const descriptions = ['Водоём на плоскогорье', 'На тёплом морском берегу', 'На пляж - это туда!', 'Девушка с обложки', 'Странная еда', 'Что-то, похожее на Теслу', 'И это всё?!', 'Выглядит, как морс', 'Поймать самолёт', 'Шкафчик для обуви', 'Море где-то там', 'Вот это - точно Ауди!', 'Сюда б немножко гарнира','Ну, а потом - Суши с котом', 'Домашние сапоги', 'Самое красивое место в мире', 'Жаль, что это не видео', 'Раритет и Олд скулл', 'Удачное изобретение', 'Стандартный отель', 'Полезная еда', 'Морской закат - всегда романтика', 'Зад не видно, поэтому кто, - не понятно', 'Рок концерт, по видимому. Видео в студию!', 'Попал товарищ. Джип не спасёт'];

const SIZE_STEP = 25;
const CEIL_WIDTH = 100;

/*const effects = ['preview--none', 'chrome', 'preview--sepia', 'preview--marvin', 'preview--phobos', 'preview--heat'];*/

const effects = ['none', 'chrome', 'sepia', 'marvin', 'phobos', 'heat'];

export {
  LIKESQUENTITYMIN,
  LIKESQUENTITYMAX,
  COMMENTSQUANTITYMIN,
  COMMENTSQUANTITYMAX,
  VALIDCOMMENTLENGTH,
  PHOTOSQUANTITY,
  descriptions,
  SIZE_STEP,
  CEIL_WIDTH,
  effects
};
