function repos(state = [], action) {
  switch (action.type) {
    case 'REPOS_SUCCEEDED':
      return action.repos;

    default:
      return state;
  }
}

export default repos;
