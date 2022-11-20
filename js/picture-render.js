

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

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

const compareElements = (elements) => {
  elements.sort((a, b) => b - a);
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

export {
  createPictureList,
  compareElements,
};
