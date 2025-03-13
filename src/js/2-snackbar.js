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
        resolve(`✅ Fulfilled promise in ${delay} ms`);
      } else if (rejectedBtn.checked) {
        reject(`❌ Rejected promise in ${delay} ms`);
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
        message: result,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: '',
        message: error,
        position: 'topRight',
      });
    });
});
