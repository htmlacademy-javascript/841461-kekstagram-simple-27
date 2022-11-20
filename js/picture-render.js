
import {
  RANDOM_FILTERED_QUANTITY,
} from './variables.js';

import {
  getRandomArrayElement,
} from './util.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const filterSection = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const filterButtons = filterForm.querySelectorAll('.img-filters__button');
const filterButtonDefault = filterForm.querySelector('#filter-default');
const filterButtonRandom = filterForm.querySelector('#filter-random');
const filterButtonDiscussed = filterForm.querySelector('#filter-discussed');

/*const getCommentsArray = () => {
  const pictureComments = document.querySelectorAll('.picture__comments');
  const elements = [];
  for (const comment of pictureComments) {
    const textComment = comment.textContent;
    const el = parseFloat(textComment);
    elements.push(el);
  }
  return elements.sort((a, b) => b - a);
};*/


const comparePictures = (a, b) => b.comments - a.comments;

const sliceRandomPictures = (pictures) => {
  getRandomArrayElement(pictures).slice(0, RANDOM_FILTERED_QUANTITY);
};

const pictureListFragment = document.createDocumentFragment();

const createPictureList = (pictures) => {

  pictures.slice().forEach(({url, likes, comments, description}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = url;
    pictureImg.alt = description;
    const pictureInfoContainer = pictureElement.querySelector('.picture__info');
    const pictureComments = pictureInfoContainer.querySelector('.picture__comments');
    pictureComments.textContent = parseFloat(comments);
    const pictureLikes = pictureInfoContainer.querySelector('.picture__likes');
    pictureLikes.textContent = parseFloat(likes);
    pictureInfoContainer.appendChild(pictureComments);
    pictureInfoContainer.appendChild(pictureLikes);
    pictureListFragment.appendChild(pictureElement);
  });
  pictureContainer.appendChild(pictureListFragment);
};

const showFilters = () => {
  filterSection.classList.remove('img-filters--inactive');

  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', handleBtnsClick);
  });
};

function handleBtnsClick() {
  toggleButtons.call(this);
}

function toggleButtons() {
  filterButtons.forEach((filterButton) => filterButton.classList.remove('img-filters__button--active'));
  this.classList.add('img-filters__button--active');
}

const setSortByRandom = () => {

  if (filterButtonRandom) {
    sliceRandomPictures(createPictureList());
  }
};

const setSortByComments = () => {

  if (filterButtonDiscussed) {
    comparePictures(createPictureList());
  }
};

const setSortByDefault = () => {
  if (filterButtonDefault) {
    createPictureList();
  }

};

export {
  createPictureList,
  showFilters,
  setSortByRandom,
  setSortByComments,
  setSortByDefault,
};
