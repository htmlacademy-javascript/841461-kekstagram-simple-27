
const filterSection = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
//const filterButtonDefault = filterForm.querySelector('#filter-default');
const filterButtonRandom = filterForm.querySelector('#filter-random');
const filterButtonDiscussed = filterForm.querySelector('#filter-discussed');

const setfilterRandom = (cb) => {
  filterButtonRandom.addEventListener('click', () => {
    filterForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    filterButtonRandom.classList.add('img-filters__button--active');
    cb();
  });
};

const setfilterComments = (cb) => {
  filterButtonDiscussed.addEventListener('click', () => {
    filterForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    filterButtonDiscussed.classList.add('img-filters__button--active');
    cb();
  });
};

const showFilters = () => {
  filterSection.classList.remove('img-filters--inactive');
};

export {
  showFilters,
  setfilterComments,
  setfilterRandom,
};
