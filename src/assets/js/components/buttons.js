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
