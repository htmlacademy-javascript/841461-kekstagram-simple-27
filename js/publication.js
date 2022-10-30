const modal = document.querySelector('body');
const messageSuccesTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const messageErrorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const isMessageSuccess = () => {
  const message = document.createDocumentFragment();
  const messageElement = messageSuccesTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.success__inner');
  const messageTitle = messageContainer.querySelector('.success__title');
  const successButton = messageContainer.querySelector('.success__button');
  messageTitle.textContent = messageTitle;
  successButton.value = successButton;
  message.insertAdjacentElement('beforeend', modal);

  successButton.addEventListener('click', () => {
    message.remove();
  });
};

const isMessageUnsuccess = () => {
  const message = document.createDocumentFragment();
  const messageElement = messageErrorTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.error__inner');
  const messageTitle = messageContainer.querySelector('.error__title');
  const errorButton = messageContainer.querySelector('.error__button');
  messageTitle.textContent = messageTitle;
  errorButton.value = errorButton;
  message.insertAdjacentElement('beforeend', modal);

  errorButton.addEventListener('click', () => {
    message.remove();
  });
};

export {
  isMessageSuccess,
  isMessageUnsuccess
};
