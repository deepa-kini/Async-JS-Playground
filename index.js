console.log('before');
getUser(1, user => console.log('user', user));
console.log('after');


function getUser(id, callback) {
  setTimeout(() => {
    console.log('Connecting to DB...');
    callback({ id, name: 'Dee' });
  }, 2000);
}
