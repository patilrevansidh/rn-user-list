import HTTPClient from '../http-client/http-client';

/**
 * Using API directly as string instead of constant as there is only one call
 */
export function fetchUserAPI(query) {
  return HTTPClient.get('https://randomuser.me/api/', {params: query});
}
