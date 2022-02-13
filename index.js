console.log('before');
getUser(1)
  .then(user => getRepositories(user.name))
  .then(repos => displayRepositories(repos))
  .catch(err => console.log('Error', err.message));

function displayRepositories(repos) {
  console.log('repos', repos);
}
console.log('after');


function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Connecting to DB...');
      resolve({ id, name: 'Dee' });
    }, 2000);
  })
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching Repos for username')
      resolve(['r1', 'r2']);
    }, 2000);
  })
}