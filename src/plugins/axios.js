import axios from 'axios';

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response && error.response.status === 401) {
    window.location.replace("/login");
  }
  return Promise.reject(error.response);
});
