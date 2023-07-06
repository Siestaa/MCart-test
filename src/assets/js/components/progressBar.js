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
