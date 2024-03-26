import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://dummyjson.com/';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const _get = (url, config = {}) => {
  return apiClient.get(url, config);
};

const _delete = (url, config = {}) => {
  return apiClient.delete(url, config);
};

const _put = (url, data = {}, config = {}) => {
  return apiClient.put(url, data, config);
};

const _post = (url, data = {}, config = {}) => {
  return apiClient.post(url, data, config);
};

// Export API methods
export { _get, _delete, _put, _post };