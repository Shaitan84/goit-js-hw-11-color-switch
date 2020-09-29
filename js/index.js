'use strict'

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

let intervalId = null;
//Вешаем слушателя событий
refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', stopChangeColor);
//Генерация случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//Функция рандомного изменения цвета
function changeColor() {
  refs.btnStart.setAttribute('disabled', 'disabled');
  intervalId = setInterval(() => {
    const backgroundColorBody =
      colors[randomIntegerFromInterval(0, colors.length)];
    refs.body.style.backgroundColor = backgroundColorBody;
  }, 1000);
}
//Функция остановки изменения цвета
function stopChangeColor() {
  refs.btnStart.removeAttribute('disabled');
  clearInterval(intervalId);
}