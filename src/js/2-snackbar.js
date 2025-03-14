import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const fulfilledBtn = document.querySelector(
  'input[name="state"][value="fulfilled"]'
);
const rejectedBtn = document.querySelector(
  'input[name="state"][value="rejected"]'
);

const inputDelay = document.querySelector('input[name="delay"]');

const assessPromise = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilledBtn.checked) {
        resolve(delay);
      } else if (rejectedBtn.checked) {
        reject(delay);
      }
    }, delay);
  });
};

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  const delay = parseInt(inputDelay.value);
  assessPromise(delay)
    .then(result => {
      iziToast.success({
        title: '',
        message: `✅ Fulfilled promise in ${result} ms`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: '',
        message: `❌ Rejected promise in ${error} ms`,
        position: 'topRight',
      });
    });
});
