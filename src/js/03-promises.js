const refs = {
  form: document.querySelector('form'),
  firstStep: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]')
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({position, delay});
      }
    },delay)
  }
 )
}

refs.form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log();
  let time = Number(refs.firstStep.value);
  for (let i = 1; i <= Number(refs.amount.value); i++){
    createPromise(i,time)
  .then(({ position, delay } ) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    time += Number(refs.delayStep.value);
  }
  e.currentTarget.reset()
})

