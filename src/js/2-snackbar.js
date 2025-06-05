import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = form.elements.delay;
  const stateInput = form.elements.state;

  const delay = Number(delayInput.value);
  const state = stateInput.value;

  createPromise(delay, state)
    .then(delay => {
      console.log(`Fulfilled with delay: ${delay}ms`);
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        timeout: 5000,
      });
    })
    .catch(delay => {
      console.log(`Reject with delay: ${delay}ms`);
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        timeout: 5000,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}