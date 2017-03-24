import { checkHttpStatus, parseJSON } from '../utils/utils';

export function getRepos() {
  return fetch('https://pumpa.cheppersdev.com/repos', {
    method: 'get',
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  })
  .then(checkHttpStatus)
  .then(parseJSON)
  .then((resp) => {
    const repos = [];
    try {
      resp.forEach((repo) => {
        repos.push({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          html_url: repo.html_url,
        });
      });
    } catch (err) {
      console.log(err); // eslint-disable-line
    }

    return repos;
  })
  .catch((error) => {
    console.log(error); // eslint-disable-line
  });
}

export function getMembers() {
  return fetch('https://pumpa.cheppersdev.com/members', {
    method: 'get',
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  })
  .then(checkHttpStatus)
  .then(parseJSON)
  .then(response => (response))
  .catch((error) => {
    console.log(error); // eslint-disable-line
  });
}
