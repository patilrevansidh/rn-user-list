import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchUserAPI} from '../../../services/apis/list';
import {
  FETCHED_USER,
  FETCHING_USERS,
  FETCH_USER_FAIL,
} from '../actions/userAction';

export function* fetchUserAsync(payload) {
  try {
    const {data: query} = payload;
    const response = yield call(fetchUserAPI, query);
    yield put({
      type: FETCHED_USER,
      data: response,
    });
  } catch (error) {
    // console.log('Error', error);
    yield put({
      type: FETCH_USER_FAIL,
      error: typeof error?.message === 'string' || 'Something went wrong',
    });
  }
}

export function* actionWatcher() {
  yield takeEvery(FETCHING_USERS, fetchUserAsync);
}
