const filterSection = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const filterButtons = filterForm.querySelectorAll('.img-filters__button');
const filterButtonDefault = filterForm.querySelector('#filter-default');
const filterButtonRandom = filterForm.querySelector('#filter-random');
const filterButtonDiscussed = filterForm.querySelector('#filter-discussed');

const showFilters = () => {
  filterSection.classList.remove('img-filters--inactive');

  /*filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', handleFilterOnClick);
  });*/
};

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  if (pictures.length > 0) {
    pictures.forEach((picture) => picture.remove());
  }
};

const setSortByComments = (cb) => {
  filterButtonDiscussed.addEventListener('click', handleFilterOnClick);
  cb();
};

const setSortByRandom = (cb) => {
  filterButtonRandom.addEventListener('click', handleFilterOnClick);
  cb();
};

const setSortByDefault = (cb) => {
  filterButtonDefault.addEventListener('click', handleFilterOnClick);
  cb();
};

function handleFilterOnClick() {
  toggleFilterButtons.call(this);
}

function toggleFilterButtons() {
  filterButtons.forEach((filterButton) => filterButton.classList.remove('img-filters__button--active'));
  this.classList.add('img-filters__button--active');
}

export {
  showFilters,
  clearPictures,
  setSortByComments,
  setSortByRandom,
  setSortByDefault,
};
