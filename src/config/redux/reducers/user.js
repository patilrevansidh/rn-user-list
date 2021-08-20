import {
  FETCHING_USERS,
  FETCHED_USER,
  FETCH_USER_FAIL,
} from '../actions/userAction';
const initialState = {
  userList: [],
  loader: true,
  error: '',
};
export const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USERS:
      return {...state, loader: true};

    case FETCHED_USER:
      return {
        ...state,
        userList: [...state.userList, ...action.data.results],
        loader: false,
      };

    case FETCH_USER_FAIL:
      return {...state, loader: false};

    default:
      return state;
  }
};
