
import {
  indexes,
  getPhotosWithUniqueIndex,
} from './data.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureSorces = getPhotosWithUniqueIndex(indexes);
const pictureListFragment = document.createDocumentFragment();

pictureSorces.forEach(({url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  const pictureInfoContainer = pictureElement.querySelector('.picture__info');
  const pictureComents = pictureInfoContainer.querySelector('.picture__comments');
  pictureComents.textContent = comments;
  const pictureLikes = pictureInfoContainer.querySelector('.picture__likes');
  pictureLikes.value = likes;
  pictureInfoContainer.appendChild(pictureComents);
  pictureInfoContainer.appendChild(pictureLikes);
  pictureListFragment.appendChild(pictureElement);
});
pictureContainer.appendChild(pictureListFragment);
