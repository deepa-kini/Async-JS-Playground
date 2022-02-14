const p = Promise.resolve(1);
p.then(res => console.log(res));
const q = Promise.reject(new Error('e'));
q.catch(err => console.log(err.message));