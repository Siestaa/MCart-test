window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', () => {
      burgerOn();
    });
  });

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

const buttons = Array.from(document.querySelectorAll('.button'));

const removeClass = (item, itemClass) => {
  item.classList.remove(itemClass);
};

const addClass = (item, itemClass) => {
  item.classList.add(itemClass);
};

const onAnimate = (button) => {
  if (button.classList.contains('button--rotate')) {
    removeClass(button, 'button--rotate-on');
    setTimeout(addClass, 100, button, 'button--rotate-on');
  } else if (button.classList.contains('button--up')) {
    removeClass(button, 'button--up-on');
    setTimeout(addClass, 100, button, 'button--up-on');
  }
};

const handleClickAnimate = (buttons) => {
  buttons.map((item) => {
    item.addEventListener('click', () => onAnimate(item));
  });
};

handleClickAnimate(buttons);

const progressBar = document.querySelector('.progress__current');
const progressNumber = document.querySelector('.progress__number');
const progressButtonRun = document.querySelector('.button--run');
const progressButtonReset = document.querySelector('.button--reset');

const handleProgress = () => {
  let intervalID;

  progressButtonRun && progressButtonRun.addEventListener('click', () => {
    clearInterval(intervalID);
    progressNumber.innerText = '0%';
    progressBar.style.width = '0%';
    let currentProgress = 0;
    intervalID = setInterval(() => {
      currentProgress += 1;
      if (currentProgress === 101 || currentProgress === 0) {
        clearInterval(intervalID);
      } else {
        progressNumber.innerText = `${currentProgress}%`;
        progressBar.style.width = `${currentProgress}%`;
      }
    }, 100);
  });
  progressButtonReset && progressButtonReset.addEventListener('click', () =>
    clearInterval(intervalID)
  );
};

handleProgress();
