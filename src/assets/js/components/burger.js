const header = document.querySelector('.navigation');
const burgerButton = document.querySelector('.navigation__burger');

const menuOpen = () => {
  header.classList.add('navigation--is-open');
};

const menuClose = () => {
  header.classList.remove('navigation--is-open');
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    menuClose();
  }
};

const onDocumentClick = (evt) => {
  if (!evt.target.closest('.header')) {
    menuClose();
  }
};

const burgerOn = () => {
  burgerButton && burgerButton.addEventListener('click', () => {
    if (header.classList.contains('navigation--is-open')) {
      menuClose();
    } else {
      menuOpen();
    }
  });
};
