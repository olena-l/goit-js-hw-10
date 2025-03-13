import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysDisplay = document.querySelector('[data-days]');
const hoursDisplay = document.querySelector('[data-hours]');
const minutesDisplay = document.querySelector('[data-minutes]');
const secondsDisplay = document.querySelector('[data-seconds]');
let userSelectedDate = null;
let timeInterval = 0;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function timerUpdate() {
  const currentTime = new Date();
  const remainingTime = userSelectedDate - currentTime;

  if (remainingTime <= 0) {
    clearInterval(timeInterval);
    datetimePicker.disabled = false;
    startButton.disabled = true;
  }

  const { days, hours, minutes, seconds } = convertMs(remainingTime);
  daysDisplay.textContent = addLeadingZero(days);
  hoursDisplay.textContent = addLeadingZero(hours);
  minutesDisplay.textContent = addLeadingZero(minutes);
  secondsDisplay.textContent = addLeadingZero(seconds);
}

document.addEventListener('DOMContentLoaded', function () {
  datetimePicker.value = '';
});
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  position: 'below center',
  appendTo: document.body,
  minuteIncrement: 1,
  dateFormat: 'Y-m-d H:i',
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  datetimePicker.disabled = true;
  timeInterval = setInterval(timerUpdate, 1000);
  timerUpdate();
});
