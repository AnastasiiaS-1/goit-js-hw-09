const buttonOn = document.querySelector('[data-start]');
const buttonOff = document.querySelector('[data-stop]');

let intervalId;
buttonOn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
  buttonOn.disabled = true;
  buttonOff.disabled = false;
});

buttonOff.addEventListener('click', () => {
  clearInterval(intervalId);
  buttonOn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
