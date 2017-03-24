import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { getRepos, getMembers } from '../services/api';


// GET REPOS

function* fetchRepos() {
  try {
    const repos = yield call(getRepos);
    yield put({ type: 'REPOS_SUCCEEDED', repos });
  } catch (error) {
    yield put({ type: 'REPOS_REQUEST_FAILED', error });
  }
}

function* reposSaga() {
  yield* takeEvery('REPOS_REQUESTED', fetchRepos);
}


// GET MEMBERS

function* fetchMembers() {
  try {
    const members = yield call(getMembers);
    yield put({ type: 'MEMBERS_SUCCEEDED', members });
  } catch (error) {
    yield put({ type: 'MEMBERS_REQUEST_FAILED', error });
  }
}

function* membersSaga() {
  yield* takeEvery('MEMBERS_REQUESTED', fetchMembers);
}


export default function* root() {
  yield [
    fork(reposSaga),
    fork(membersSaga),
  ];
}
