export function getRepos() {
  return {
    type: 'REPOS_REQUESTED',
  };
}

export function getMembers() {
  return {
    type: 'MEMBERS_REQUESTED',
  };
}

export function filterMember(memberFilter) {
  return {
    type: 'MEMBERS_FILTER',
    memberFilter,
  };
}

export function filterLang(languageFilter) {
  return {
    type: 'LANGUAGE_FILTER',
    languageFilter,
  };
}
