
import {
  indexes,
  getPhotosWithUniqueIndex,
} from './data.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureSorces = getPhotosWithUniqueIndex(indexes);

const createPictureList = () => {
  const pictureListFragment = document.createDocumentFragment();

  pictureSorces.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = url;
    pictureImg.alt = description;
    const pictureInfoContainer = pictureElement.querySelector('.picture__info');
    const pictureComents = pictureInfoContainer.querySelector('.picture__comments');
    pictureComents.textContent = comments;
    const pictureLikes = pictureInfoContainer.querySelector('.picture__likes');
    pictureLikes.textContent = likes;
    pictureInfoContainer.appendChild(pictureComents);
    pictureInfoContainer.appendChild(pictureLikes);
    pictureListFragment.appendChild(pictureElement);
  });
  pictureContainer.appendChild(pictureListFragment);
};

/*const destroyPictureList = () => {
  pictureContainer.innerHTML = '';
};*/

export {
  createPictureList,
  //destroyPictureList
};
