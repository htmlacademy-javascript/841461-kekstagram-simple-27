
const modal = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const alertSuccesFragment = document.createDocumentFragment();
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const alertErrorFragment = document.createDocumentFragment();

const createSuccesMessageUpload = () => {
  const messageElement = successTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.success__inner');
  const messageTitle = messageContainer.querySelector('.success__title');
  messageTitle.textContent = 'Изображение успешно загружено';
  const button = messageContainer.querySelector('.success__button');
  button.textContent = 'Круто!';
  alertSuccesFragment.appendChild(messageElement);
  modal.insertAdjacentHTML('beforeend', alertSuccesFragment);
  button.addEventListener('click', () => {
    alertSuccesFragment.remove();
  });
};

const createErrorMessageUpload = () => {
  const messageElement = errorTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.success__inner');
  const messageTitle = messageContainer.querySelector('.success__title');
  messageTitle.textContent = 'Ошибка загрузки файла';
  const button = messageContainer.querySelector('.success__button');
  button.textContent = 'Попробовать ещё раз';
  alertErrorFragment.appendChild(messageElement);
  modal.insertAdjacentHTML('beforeend', alertErrorFragment);
  button.addEventListener('click', () => {
    alertErrorFragment.remove();
  });
};

export {
  createSuccesMessageUpload,
  createErrorMessageUpload,
};
