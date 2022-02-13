console.log('before');
getUser(1, displayUserDetails);

function displayUserDetails(user) {
  console.log('User', user);
  getRepositories(user.name, displayRepositories);
}

function displayRepositories(repos) {
  console.log('repos', repos);
}
console.log('after');


function getUser(id, callback) {
  setTimeout(() => {
    console.log('Connecting to DB...');
    callback({ id, name: 'Dee' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Fetching Repos for username')
    callback(['r1', 'r2']);
  }, 2000);
}