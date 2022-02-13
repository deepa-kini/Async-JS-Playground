const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1);
    reject(new Error('Something did not work!'));
  }, 2000);

});

p
  .then(data => console.log('data resolved', data))
  .catch(err => console.log(err.message))

