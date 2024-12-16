const elementMenu = document.querySelector('#controls');
const inputEl = elementMenu.querySelector('input');
const btnCreate = elementMenu.querySelector('[data-create]');
const btnDestroy = elementMenu.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;


const createBoxes = (amount) => {

  boxesEl.innerHTML = '';

  let size = 30;
  const boxFragments = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    box.style.margin = '5px';
    size += 10;
    boxFragments.appendChild(box);
  }

  boxesEl.appendChild(boxFragments);
};

btnCreate.addEventListener('click', () => {
  const amount = Number(inputEl.value);

  if (amount < 1 || amount > 100) {
    alert('Введіть значення від 1 до 100.');
    inputEl.value = '';
    return;
  }

  createBoxes(amount);
  inputEl.value = '';
});

btnDestroy.addEventListener('click', () => {
  boxesEl.innerHTML = '';
});