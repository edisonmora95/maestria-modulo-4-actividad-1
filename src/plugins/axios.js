import axios from 'axios';

import { removeUserId } from '../services/localStorage';

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response && error.response.status === 401) {
    removeUserId();
    window.location.replace("/login");
  }
  return Promise.reject(error.response);
});
