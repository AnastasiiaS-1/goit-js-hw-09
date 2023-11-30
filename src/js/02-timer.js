import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const remainingDay = document.querySelector('[data-days]');
const remainingHours = document.querySelector('[data-hours]');
const remainingMinutes = document.querySelector('[data-minutes]');
const remainingSeconds = document.querySelector('[data-seconds]');

let deadline = 0;
let formatDate = null;
let timerId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    differenceDate(selectedDates[0]);
  },
};
btnStart.disabled = true;

flatpickr('#datetime-picker', options);

btnStart.addEventListener('click', clickOn);

function clickOn() {
  timerId = setInterval(() => {
    btnStart.disabled = true;
    deadline -= 1000;
    if (
      remainingSeconds.textContent <= 0 &&
      remainingMinutes.textContent <= 0
    ) {
      Notiflix.Notify.success('Time end');
      clearInterval(timerId);
    } else {
      formatDate = convertMs(deadline);
      renderDate(formatDate);
    }
  }, 1000);
}
