import axios from 'axios'

const BASE_URL = 'https://three-points.herokuapp.com';

const saveUserToLocalStorage = (user = {}) => {
  const { id = '' } = user;
  localStorage.setItem('user-id', id);
};

/**
 * @param {string} username
 * @param {string} password
 */
export const login = async (username, password) => {
  try {
    const url = `${BASE_URL}/api/login`;
    const body = {
      username,
      password,
    }
    const response = await axios.post(url, body);
    saveUserToLocalStorage(response.data);
    return response;
  } catch (error) {
    return Promise.reject(error.data);
  }
};
