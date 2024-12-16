const elementMenu = document.querySelector('#controls');
const inputEl = elementMenu.querySelector('input');
const btnCreate = elementMenu.querySelector('button');
const btnDestroy = elementMenu.lastChild;

const randomColor = `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;



const boxesEl = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  if (0 <= inputEl.value >= 100) {
    boxesEl.style.width = '30px';
    boxesEl.style.hight = '30px';
    boxesEl.style.bacgroundColor = randomColor;
  }
});

