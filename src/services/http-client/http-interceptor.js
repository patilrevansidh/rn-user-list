/* eslint-disable no-param-reassign */
import Axios from 'axios';

export default {
  setupInterceptors: store => {
    // Requests interceptor
    Axios.interceptors.request.use(
      config => {
        let headers = {...config.headers};
        headers['Content-Type'] = 'application/json';
        config.headers = headers;
        return config;
      },
      error => {
        return Promise.reject(error ? error.response : null);
      },
    );

    // Response interceptor
    Axios.interceptors.response.use(
      response => {
        const {data = {}} = response;
        return response;
      },
      error => {
        return Promise.reject(error ? error.response : null);
      },
    );
  },
};
