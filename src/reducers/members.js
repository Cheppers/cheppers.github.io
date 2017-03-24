import _ from 'lodash';

function members(state = {

  membersList: [],
  memberRepos: [],
  languageList: [],
  repoCount: 0,
  memberFilter: null,
  languageFilter: null,

}, action) {
  switch (action.type) {
    case 'MEMBERS_SUCCEEDED': {
      const membersList = [];
      const languageList = [];
      let repoCount = 0;

      action.members.forEach((member) => {
        if (member.repos.length > 0) {
          membersList.push({
            id: member.login,
            label: member.login,
            value: member.login,
          });

          repoCount += member.repos.length;

          member.repos.forEach((repo) => {
            if (repo.language !== null) {
              languageList.push({
                id: repo.language,
                label: repo.language,
                value: repo.language,
              });
            }
          });
        }
      });

      return {
        ...state,
        membersList,
        languageList: _.sortBy(_.uniqBy(languageList, 'id'), ['id']),
        repoCount,
        memberRepos: action.members,
      };
    }

    case 'MEMBERS_FILTER': {
      return {
        ...state,
        memberFilter: action.memberFilter,
      };
    }

    case 'LANGUAGE_FILTER': {
      return {
        ...state,
        languageFilter: action.languageFilter,
      };
    }

    default:
      return state;
  }
}

export default members;
