import axios from 'axios';

export function getRepos() {
  return axios.get('https://pumpa.cheppersdev.com/repos')
  .then(response => (response.data))
  .catch((error) => {
    console.err(error); // eslint-disable-line
  });
}

export function getMembers() {
  return axios.get('https://pumpa.cheppersdev.com/members')
  .then(response => (response.data))
  .catch((error) => {
    console.err(error); // eslint-disable-line
  });
}
