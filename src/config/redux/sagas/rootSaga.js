import {all} from 'redux-saga/effects';
import {actionWatcher} from './userSaga';
import {fetchUsers} from '../actions/userAction';

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
