import Axios from 'axios';

class HttpService {
  get(url, config = {}) {
    return Axios.get(url, config);
  }

  post(url, data, config = {}) {
    return Axios.post(url, data, config);
  }

  put(url, data, config = {}) {
    return Axios.put(url, data, config);
  }

  delete(url, data, config = {}) {
    return Axios.delete(url, data, config);
  }

  patch(url, data, config = {}) {
    return Axios.patch(url, data, config);
  }
}

const HttpClient = new HttpService();

export default HttpClient;
