const p1 = new Promise(resolve => {
  setTimeout(() => {
    console.log('Async 1');
    resolve(1);
  }, 2000);
});
const p2 = new Promise(resolve => {
  setTimeout(() => {
    console.log('Async 2');
    resolve(2);
  }, 3000);
});

Promise.all([p1, p2])
  .then(r => console.log('Result', r))
  .catch(e => console.log(e.message));