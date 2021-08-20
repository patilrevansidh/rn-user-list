export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHED_USER = 'FETCHED_USER';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const fetchUsers = query => {
  return {type: FETCHING_USERS, data: query};
};

export const fetchedUser = data => {
  return {type: FETCHED_USER, data};
};

export const fetchUserFail = () => {
  return {type: FETCH_USER_FAIL};
};
