const btnChngColor = document.querySelector('.change-color');
const spanChngColor = document.querySelector('.color');
const bodyColor = document.querySelector("body");

btnChngColor.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;


  bodyColor.style.backgroundColor = randomColor;
  spanChngColor.textContent = randomColor;

});